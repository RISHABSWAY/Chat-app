import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col bg-amber-500'>
      {noChatSelected?(
        <NoChatSelected/>
      ): (
      <>
      <div className='bg-teal-800 px-4 py-2 mb-2'>
      <span className='label-text'>To:</span>{''}
      <span className='text-gray-900 font-bold'>John Doe</span>
      </div>

      <Messages/>
      <MessageInput/>
      </>
      )}
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-white font semibold flex flex-col items-center gap-2'>
        <p>Welcome John Doe</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  )
}