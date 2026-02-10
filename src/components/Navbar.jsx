import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    return (
        <nav className='w-full border-b border-gray-500/50'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-4'>

                <h1
                    className='text-2xl font-bold cursor-pointer'
                    onClick={() => navigate('/')}
                >
                    ClipBoard Lab
                </h1>

                <ul className='hidden md:flex items-center gap-5'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-red-500 font-semibold'
                                    : 'text-blue-500'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pastes"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-red-500 font-semibold'
                                    : 'text-blue-500'
                            }
                        >
                            All Pastes
                        </NavLink>
                    </li>
                </ul>

                <button
                    className='md:hidden'
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className='md:hidden border-t border-gray-500/50'>
                    <ul className='flex flex-col gap-4 py-4 px-4'>
                        <li onClick={() => setOpen(false)}>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-red-500 font-semibold'
                                        : 'text-blue-500'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <NavLink
                                to="/pastes"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-red-500 font-semibold'
                                        : 'text-blue-500'
                                }
                            >
                                All Pastes
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
