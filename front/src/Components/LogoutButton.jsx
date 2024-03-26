import React from 'react'
import { CiLogout } from "react-icons/ci";
import userLogout from '../Hooks/userLogout';

const LogoutButton = () => {
  const {loading, logout}= userLogout()
  return (
    <div className='mt-auto'>
      {!loading ? (
        <CiLogout className='text-white cursor-pointer w-6 h-6' size={25} onClick={logout}/>
      ):(
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton