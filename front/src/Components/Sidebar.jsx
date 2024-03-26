import React from 'react'
import SearchInput from './Left Container/SearchInput'
import Conversations from './Left Container/Conversation/Conversations'
import LogoutButton from './LogoutButton'


const Sidebar = () => {
  return (
    <div className='bg-teal-800 p-4 border-r border-slate-500 flex flex-col'>

      <SearchInput/>
      <div className='divider px-3'/>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar