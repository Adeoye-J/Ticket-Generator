import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import { AnimatePresence } from 'framer-motion'
import Events from './pages/Events'
import MyTickets from './pages/MyTickets'
import Home from './pages/Home'
import AboutProject from './pages/AboutProject'

const App = () => {

    return (
        <AnimatePresence>
            <div className='w-full min-h-screen bg-[#02191D] px-4 py-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/my-tickets' element={<MyTickets />} />
                    <Route path='/about' element={<AboutProject />} />
                </Routes>
            </div>
        </AnimatePresence>
    )
}

export default App