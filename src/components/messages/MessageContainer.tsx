import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

function MessageContainer() {
    return (
        <div className='border-l h-full'>
            <>
                <div className='border-b h-10 flex items-center justify-start px-4'>
                    <span>To: <span> </span>John Doe</span>
                </div>
                <div className='py-2 px-4'>
                    <Messages />
                </div>
                <div>
                    <MessageInput />
                </div>
            </>
        </div>
    )
}

export default MessageContainer