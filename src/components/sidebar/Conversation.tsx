import React from 'react'

function Conversation() {
    return (
        <div className='flex flex-row items-center justify-start py-5 px-2 gap-6 cursor-pointer'>
            <img src="https://avatar.iran.liara.run/public/12" className='w-10 h-10' alt="" />
            <div>John Doe</div>
        </div>
    )
}

export default Conversation