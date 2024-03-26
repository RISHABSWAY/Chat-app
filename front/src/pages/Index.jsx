import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png"

const Index = () => {
  return (
    <>
    <div className='flex flex-col  items-center justify-center h-screen'>
    <img src={logo} alt="Pixel-Pal" width={300} />
<div class="flex flex-col">
  <p class="text-3xl mb-8">Welcome to Pixel-Pal</p>
  <div class="space-x-4">
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      <Link to="/signup">New User?</Link>
    </button>
    <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      <Link to="/login">Existing User?</Link>
    </button>
  </div>
</div>
</div>
</>
  )
}

export default Index