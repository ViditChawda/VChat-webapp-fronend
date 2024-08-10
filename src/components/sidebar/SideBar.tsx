import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function SideBar() {
    return (
        <div className=''>
            <SearchInput />
            <div className='border'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default SideBar