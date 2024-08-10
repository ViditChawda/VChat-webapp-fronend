import { LogOut } from 'lucide-react'
import React from 'react'

function LogoutButton() {
    return (
        <div className='py-10 px-6'>
            <LogOut className='rotate-180' strokeWidth={1.25} />
        </div>
    )
}

export default LogoutButton