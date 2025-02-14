import React, { useState } from 'react'
import logo from "/logo.png"
import dropdown_icon from "/dropdown_icon.png"
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const navVariants = {
        hidden: { x: "-100%" }, // Start off-screen (left)
        visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Slide in
        exit: { x: "-100%", transition: { duration: 0.3, ease: "easeIn" } }, // Slide out
    };

    return (
        <div className='flex justify-between items-center p-3 px-5 border border-white rounded-3xl'>
            <Link onClick={() => setShowMenu(true)} className='sm:hidden' to={"/"}>
                <img src={logo} alt="" />
            </Link>

            <Link className='hidden sm:block' to={"/"}>
                <img src={logo} alt="" />
            </Link>

            <ul className='hidden sm:flex items-center gap-4 text-white text-lg'>
                <NavLink to={"/events"} className="font-[300]">
                    <p>Events</p>
                </NavLink>
                <NavLink to={"/"} className="font-[300]">
                    <p>My Tickets</p>
                </NavLink>
                <NavLink to={"/about"} className="font-[300]">
                    <p>About Project</p>
                </NavLink>
            </ul>

            <Link to={"/"} className='px-4 py-2 sm:px-6 sm:py-3 bg-white text-black text-base sm:text-lg rounded-xl hover:bg-[#02191D] hover:text-white transition-all ease-in-out duration-500 border border-white'>
                <p>MY TICKETS</p>
            </Link>

            {/* Side bar menu for smaller screen */}
            {showMenu &&
                <motion.div 
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`absolute top-0 left-0 bottom-0 overflow-hidden w-[80%] h-full bg-[#02191D] border-r border-white transition-all z-50`}
                    // className={`absolute top-0 left-0 bottom-0 overflow-hidden w-[80%] h-full bg-white transition-all z-50 ${showMenu ? 'block' : 'hidden'}`}
                >
                    <div className='flex flex-col text-white'>
                        <div onClick={() => setShowMenu(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                            <img src={dropdown_icon} className='h-4 rotate-180' alt="" />
                            <p>Back</p>
                        </div>
                        <NavLink onClick={() => setShowMenu(false)} to='/events' className='py-5 pl-6 border-t border-white' end>Events</NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/my-tickets' className='py-5 pl-6 border-t border-white' end>My Tickets</NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about' className='py-5 pl-6 border-y border-white' end>About Project</NavLink>
                    </div>
                </motion.div>
            }
        </div>
    )
}

export default Navbar