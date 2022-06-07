import React,{ useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'
import useStore from '../context/useStore';
import toast from 'react-hot-toast';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2pyZWFkczY2NSIsImEiOiJjbDN6bmF3ZnQwMDBjM2NvNjdleXVqZDNqIn0.IRNYoQWdg0Wc2K8jQ2ceEA';

const Map = () => {
  let {fromCenter,destinationCenter,lng,lat,start,end,distance,setDistance} = useStore()
const mapContainer = useRef(null);
const map = useRef(null);

useEffect(() => {
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: start||[lng,lat],
    zoom: 3
    });


async function getRoute() {
  console.log(end);
  console.log(start);
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  setDistance(data?.distance)
  const route = data?.geometry?.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.current.getSource('route')) {
    map.current.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.current.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }
  // add turn instructions here at the end
}

map.current.on('load', () => {
  // make an initial directions request that
  // starts and ends at the same location
  if(!start) return;
  toast.promise(
    getRoute(start),
     {
       loading: 'Fetching Route...',
       success: <b>Fetched successfully!</b>,
       error: <b>Total distance between places cannot exceed 10000km</b>,
     }
   );
  

  // Add starting point to the map
  map.current.addLayer({
    id: 'point',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        ]
      }
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#3887be'
    }
  });
  // this is where the code from the next step will go
});

    },[start,end]);
  return (
        <div ref={mapContainer} className="map-container w-full h-full" />
 
  )
}

export default Map