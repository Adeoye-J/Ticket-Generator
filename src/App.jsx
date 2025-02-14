import React from 'react'
import TicketBooking from './TicketBooking'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import { AnimatePresence } from 'framer-motion'

const App = () => {

    return (
        // <div className='bg-[radial-gradient(white_100%,#02191D_100%)] w-full h-full'>
        // <div className='w-full h-screen bg-[radial-gradient(circle,white 0%,#02191D 100%)]'>
        <AnimatePresence>
            <div className='w-full h-screen bg-[#02191D] px-4 py-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <Navbar />
                <Routes>
                    <Route index element={<TicketBooking />} />
                    <Route path='/events' element={<TicketBooking />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                {/* <TicketBooking /> */}
            </div>
        </AnimatePresence>
    )
}

export default App