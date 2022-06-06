import React,{useState} from 'react'
import axios from 'axios';
import { geoCoding } from './api/api';
const FormComponent = ({label,input,setInput,list,setList,setAxis}) => {
    console.log(input);
  let [open, setOpen] = useState(false);
    const fetchData = async () => {
        let { data } = await axios.get(geoCoding(input));
        console.log(data);
        setList(data);
      };
  return (
    <div className='flex flex-col relative'>
    <label htmlFor="origin">{label}</label>
    <input type="text" className='border-1 border border-black' onChange={(e)=>{
      setInput(e.target.value)
      fetchData()
        setOpen(true)
    }} value={input} />
    <ul className={`${open?`absolute -bottom-0 text-base ${input?'bg-white': ''} overflow-scroll w-full top-[3rem] h-[80%]`:'hidden'}`}>
    {
      list?.features?.map(obj=>{
        //   console.log(obj);
        if(input==='') return;
        return <li onClick={()=>{
          setAxis(obj.center)
          console.log(obj.center);
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