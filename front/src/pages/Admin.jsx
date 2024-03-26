import React, {useState, useEffect} from 'react'
import { MdDelete } from "react-icons/md";
import useAdmin from '../Hooks/useAdmin';

const Admin = () => {
  return (
    <div className='container mx-auto p-9'>
      <h1 className='text-2xl font-bold mb-4'> Admin Page</h1>
      <div className='grid grid-cols-3 gap-4'>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='px-4 py-2'>User Id</th>
              <th className='px-4 py-2'>Full Name</th>
              <th className='px-4 py-2'>Username</th>
              <th className='px-4 py-2'>Email Address</th>
              <th className='px-4 py-2'>Gender</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody> 
          <button><MdDelete/></button>
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default Admin