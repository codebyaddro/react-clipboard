import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full border-b border-gray-500/50'>
            <div className='w-7xl mx-auto flex justify-between items-center py-4'>
                <div>
                    <h1 className='text-2xl font-bold'>ClipBoard Lab</h1>
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-5'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-red-500 text-md' : 'text-blue-500 text-md'} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-red-500 text-md' : 'text-blue-500 text-md'} to='/pastes'>All Pastes</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar