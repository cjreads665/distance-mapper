import React,{useState} from 'react'

const Store = () => {
    let [from,setFrom] = useState('')
    let [fromList,setFromList] = useState('')
    let [fromCenter,setFromCenter] = useState('')
    const [lng, setLng] = useState(88.363881);
    const [lat, setLat] = useState(22.572672);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    let [destination,setDestination] = useState('')
    let [destinationList,setDestinationList] = useState('')
    let [destinationCenter,setDestinationCenter] = useState('')

  return {
from,setFrom,
    fromList,setFromList,
    fromCenter,setFromCenter,
    destination,setDestination, destinationList,setDestinationList, destinationCenter,setDestinationCenter,
    lng,setLng,lat,setLat,
    start, setStart,end, setEnd
  }
}

export default Store