import React,{useState} from 'react'

const Store = () => {
    let [from,setFrom] = useState('')
    let [fromList,setFromList] = useState('')
    let [fromCenter,setFromCenter] = useState('')
  return {
from,setFrom,
    fromList,setFromList,
    fromCenter,setFromCenter
  }
}

export default Store