import { useState } from 'react'
import logo from './images/logo.png'
import './App.css'
import Map from './Map/Map'
import {geoCoding} from './api/api'
import Origin from './Origin/Origin'
import Destination from './Destination/Destination'
import Button from './Button'
import useStore from './context/useStore'
function App() {
  let {distance} = useStore()
  return (
    <div className="App min-h-screen px-4 py-2 font-['Work_Sans']  ">
      <header className='flex flex-col justify-between h-32 border border-2 '>
        <nav className='flex'>
          <img src={logo} alt="graviti-logo" />
        </nav>
        <h1 className='text-center text-[#1B31A8]'>Let's calculate distance from MapBox</h1>
      </header>
      <section className='flex flex-col'>
    <form className='flex flex-col h-[50rem]]'>
     <Origin/>
    <Destination/>
    </form>
    <div>
    <Button/>
    </div>
    <p>Total distance : <span className='font-bold'>{distance}</span> km</p>
      </section>
      <div className='h-[20rem] w-full border border-1 border-black'>
      <Map></Map>
      </div>
    </div>
  )
}

export default App
