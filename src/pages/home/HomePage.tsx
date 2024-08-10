import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

function HomePage() {
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className='w-[80%] flex flex-row gap-5 border rounded-xl'>
                <div className='w-[40%]'> <SideBar /></div>
                <div className='w-[60%]'> <MessageContainer /></div>
            </div>
        </div>
    )
}

export default HomePage