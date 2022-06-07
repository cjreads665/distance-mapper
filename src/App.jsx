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
  let calDistance = Math.floor(distance/1000)
  return (
    <div className="App min-h-screen px-4 py-2 font-['Work_Sans']  ">
      <header className='flex flex-col justify-between h-32 lg:px-32 lg:pt-12'>
        <nav className='flex'>
          <img src={logo} alt="graviti-logo" />
        </nav>
        <h1 className='text-center text-[#1B31A8]'>Let's calculate distance from MapBox</h1>
      </header>
    <section className='flex flex-col lg:flex-row lg:justify-center lg:px-32 mt-8'>
    <form className='flex flex-col lg:w-[50%] lg:justify-center lg:px-32'>
     <Origin/>
    <Destination/>
    
    <p>Total distance : <span className='font-bold text-[#1B31A8] text-5xl'>{calDistance}</span> km</p> <br/>
    {
      distance!==0? <p className='text-sm'>The distance between Mumbai and Delhi is {calDistance} kms.</p> : ''
    }
    </form>
    <div className='self-center '>
    <Button/>
    </div>
    <div className='h-[20rem] lg:h-[30rem] w-full lg:w-[30rem]'>
      <Map></Map>
      </div>
      </section>
      
    </div>
  )
}

export default App
