import { useState } from 'react'
import logo from './images/logo.png'
import './App.css'
import Map from './Map/Map'
import {geoCoding} from './api/api'
import Origin from './Origin/Origin'
import Destination from './Destination/Destination'
import Button from './Button'
function App() {
  return (
    <div className="App min-h-screen px-4 py-2 font-['Work_Sans']  ">
      <header className='flex flex-col justify-between h-32 border border-2 '>
        <nav className='flex'>
          <img src={logo} alt="graviti-logo" />
        </nav>
        <h1 className='text-center text-[#1B31A8]'>Let's calculate distance from Google maps</h1>
      </header>
      <section className='flex'>
    <form className='flex flex-col h-[10rem]'>
     <Origin/>
    <Destination/>
    </form>
    <div>
    <Button/>
    </div>
  
      </section>
      <div className='h-[20rem] w-full border border-1 border-black'>
      <Map></Map>
      </div>
    </div>
  )
}

export default App
