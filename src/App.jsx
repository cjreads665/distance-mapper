import { useState } from 'react'
import logo from './images/logo.png'
import './App.css'
import Map from './Map/Map'
import {geoCoding} from './api/api'
import axios from 'axios'
function App() {
  let [from,setFrom] = useState('')

  const fetchData =async()=> {
    let {data} = await axios.get(geoCoding(from))
    console.log(data.features);
  }
  return (
    <div className="App min-h-screen px-4 py-2 font-['Work_Sans']  ">
      <header className='flex flex-col justify-between h-32 border border-2 '>
        <nav className='flex'>
          <img src={logo} alt="graviti-logo" />
        </nav>
        <h1 className='text-center text-[#1B31A8]'>Let's calculate distance from Google maps</h1>
      </header>
      <section className='flex'>
    <form action="" className='flex flex-col'>
      <div className='flex flex-col'>
      <label htmlFor="origin">Origin</label>
      <input type="text" className='border-1 border border-black' onChange={(e)=>{
        setFrom(e.target.value)
        fetchData()
      }} value={from} />
      </div>
      <div className='flex flex-col'>
      <label htmlFor="destination">Destination</label>
      <input type="text" name="destination" id="destination" className='border-1 border border-black' />
      </div>
    </form>
    <div>
    <button type="button" className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Calculate</button>
    </div>
  
      </section>
      <div className='h-[20rem] w-full border border-1 border-black'>
      <Map></Map>
      </div>
    </div>
  )
}

export default App
