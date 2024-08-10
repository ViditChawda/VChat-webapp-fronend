import React from 'react';
import Message from './Message';
import '../../../src/App.css'


function Messages() {
    return (
        <div className='flex flex-col overflow-y-scroll scrollbar-custom h-[500px] bg-black rounded-lg px-4'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
}

export default Messages;