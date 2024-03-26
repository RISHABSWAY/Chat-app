import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../../Hooks/useGetConversation';

const Conversations = () => {
  const {loading, conversations} = useGetConversation();
  console.log("Conversations", conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        {conversations.map((Conversation,Idx)=>{
          <Conversation
          key={Conversation._id}
          Conversation={Conversation}
          lastIdx={Idx === Conversation.lenght -1 }/>
        })}

        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
      </div>
  )
}

export default Conversations