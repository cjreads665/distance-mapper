import React,{useState} from 'react'

const Store = () => {
    let [from,setFrom] = useState('')
    let [fromList,setFromList] = useState('')
    let [fromCenter,setFromCenter] = useState('')

    let [destination,setDestination] = useState('')
    let [destinationList,setDestinationList] = useState('')
    let [destinationCenter,setDestinationCenter] = useState('')

  return {
from,setFrom,
    fromList,setFromList,
    fromCenter,setFromCenter,
    destination,setDestination, destinationList,setDestinationList, destinationCenter,setDestinationCenter
  }
}

export default Store