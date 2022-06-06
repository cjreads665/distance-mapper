import React,{useState} from 'react'
import useStore from '../context/useStore'
import FormComponent from '../FormComponent'
const Destination = () => {
    let [open,setOpen] = useState(false)
    let {destination,setDestination, destinationList,setDestinationList, destinationCenter,setDestinationCenter} =useStore()
  return (
    <FormComponent
    label={'Destination'} input={destination} setInput={setDestination} setOpen={setOpen} open={open}
     setList={setDestinationList} list={destinationList} setAxis={setDestinationCenter} />
  )
}

export default Destination