import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Veiculos } from './components/Veiculos'
import { Header } from './components/Header/Header'


function App() {
  return (
    <>
      <Header />
      <Veiculos />
    </>
  )
}

export default App
