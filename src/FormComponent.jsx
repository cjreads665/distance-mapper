import React,{useState} from 'react'
import axios from 'axios';
import { geoCoding } from './api/api';
const FormComponent = ({label,input,setInput,list,setList,setAxis,open,setOpen}) => {
    const fetchData = async () => {
        let { data } = await axios.get(geoCoding(input));
        setList(data);
      };
      
  return (
    <div className='flex flex-col relative h-full justify-around'>
    <label htmlFor="origin">{label}</label>
    <input type="text" className='border-1 border border-black rounded-md h-12 p-3 my-3' onChange={(e)=>{
      setInput(e.target.value)
      fetchData()
    setOpen(true)
    }} value={input} required />
    <ul className={`${open?` -bottom-0 text-base ${input?'bg-white': ''} overflow-scroll w-full top-[3rem] h-[80%] z-10`:'hidden'}`}>
    {
      list?.features?.map(obj=>{
        if(input==='') return;
        return <li onClick={()=>{
          setAxis(obj.center)
          setOpen(false)
          setInput(obj.place_name)
        }} >{obj.place_name}</li>
      })
    }
    </ul>
    </div>
  )
}

export default FormComponent