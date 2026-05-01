import React, { useContext, useState } from 'react'
import { Search, User, ShoppingCart, Menu, PencilOff, LogOut } from 'lucide-react';
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCartCount, navigate, setToken, setCartItems, token } = useContext(ShopContext)
    const logOut = () => {
        navigate('/login')
        localStorage.removeItem('token');
        setToken('')
        setCartItems({})

    }
    return (
        <div className='absolute left-0 right-0 top-0 flex bg-white-600 items-center bg-gray-300 justify-between px-6 z-50 w-full font-medium'>
            {/* sec 1 */}
            <img src={assets.logo} className='w-36' alt='App_logo' />

            {/* sec 2 */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            {/* sec 3 */}
            <div className='flex items-center gap-6'>
                <Search onClick={() => setShowSearch(true)} className='w-5 cursor-pointer' />

                <div className='group relative'>
                    <User onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' />


                    {/* Drop down */}
                    {
                        token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

                            <div className='flex flex-col gap-2 w-29 py-3 px-5 bg-slate-100 text-gray-500 '>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Order</p>
                                <p onClick={logOut} className='cursor-pointer hover:text-black'>Logout</p>

                            </div>

                        </div>
                    }
                </div>
                <Link to='/cart' className='relative'>
                    <ShoppingCart className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <Menu onClick={() => { setVisible(true) }} className="w-6 cursor-pointer sm:hidden" />

            </div>


            {/* Sidebar menu on small screens */}
            <div className={`fixed w-full top-0 right-0 bottom-0 h-full shadow-lg transform transition-transform duration-300 rounded-l-3xl bg-white ${visible ? 'translate-x-0' : 'translate-x-full'} `}>
                <div className='bg-amber-400'>
                    <div className='flex flex-col px-5 py-9 relative'>
                        <PencilOff onClick={() => { setVisible(false) }} className="w-5 cursor-pointer self-end" />
                    </div>
                    <div className='flex flex-col items-end p-2'>
                        {['/', '/collection', '/about', '/contact'].map((path, index) => (
                            <NavLink
                                key={index}
                                to={path}
                                className="block py-3 px-6 text-lg text-gray-700 hover:text-black bg-white my-1 rounded-[20px] transition-all"
                                onClick={() => { setVisible(false) }}
                            >
                                {path === '/' ? 'Home' : path.replace('/', "").charAt(0).toUpperCase() + path.slice(2)}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
