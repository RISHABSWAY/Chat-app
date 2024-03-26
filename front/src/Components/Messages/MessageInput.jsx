import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

const MessageInput = () => {
  return (
    <div className='px-4 my-3'>
    <div className='w-full relative'>
      <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-white text-black ' placeholder='Send a Message' />
    
    <button type='Submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
      <CiLocationArrow1 className='text-black'/>
    </button>
    </div>
    </div>
  )
}

export default MessageInput