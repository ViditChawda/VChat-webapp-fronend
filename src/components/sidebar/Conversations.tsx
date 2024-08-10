import React from 'react'
import Conversation from './Conversation'

function Conversations() {
    return (
        <div className='flex flex-col overflow-y-scroll scrollbar-custom h-[390px] bg-black rounded-lg px-4'>
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
}

export default Conversations