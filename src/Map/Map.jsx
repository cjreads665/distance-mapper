import React,{ useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiY2pyZWFkczY2NSIsImEiOiJjbDN6bmF3ZnQwMDBjM2NvNjdleXVqZDNqIn0.IRNYoQWdg0Wc2K8jQ2ceEA';

const Map = () => {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(88.363881);
const [lat, setLat] = useState(22.572672);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    if (map?.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng,lat],
    zoom: zoom
    });
    console.log(MapboxDirections);

    });
  return (
        <div ref={mapContainer} className="map-container w-full h-full" />
 
  )
}

export default Map