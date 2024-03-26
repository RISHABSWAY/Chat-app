import React from 'react'

const Conversation = (Conversation, lastIdx) => {
  return (
    <>
    <div className='flex gap-1 items-center hover:bg-gray-600 rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src={Conversation.profilePic} alt='user avatar'/>
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-2 justify-between'>
          <p className='font-bold text-sky'>{Conversation.fullname}</p>
        </div>
      </div>
    </div>
    <div className='divider my-0 py-0 h-1'/>

    {!lastIdx && <div className='divider my-0 py-0 h-1'/> }
    </>
  )
}

export default Conversation