import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="border border-[#0E464F] rounded-3xl p-6 mb-6 flex flex-col gap-2 items-center text-center text-white bg-[#0b353d] mt-5">
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-extralight road-rage'>Techember Fest '25</h1>
                <p className='w-[90%] md:w-[60%] mb-2 text-sm lg:text-base'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                <p className='flex flex-col sm:flex-row items-center gap-2 text-sm lg:text-base'><span>📍[Event Location]📍</span> <span className='hidden sm:block'>||</span> <span>March 15, 2025 | 7:00PM</span></p>
            </div>
        </div>
    )
}

export default Home