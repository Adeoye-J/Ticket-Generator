import React, { useContext } from 'react'
import { TicketContext } from '../context/TicketContext'
import ProgressBar from './ProgressBar'
import TicketSelection from './TicketSelection'
import AttendeeDetails from './AttendeeDetails'
import TicketDetails from './TicketDetails'

const TicketsContainer = () => {

    const {titles, step} = useContext(TicketContext)

    return (
        <div className='border border-[#0E464F] rounded-3xl w-full h-full sm:w-[80%] md:w-[70%] p-6 my-20'>
            <div className="flex justify-between items-center text-white mb-4">
                <p className='text-xl'>{titles[step]}</p>
                <span className='text-xs'>Step {step + 1}/{titles.length}</span>
            </div>
            <ProgressBar />
            {step === 0 && <TicketSelection />}
            {step === 1 && <AttendeeDetails />}
            {step === 2 && <TicketDetails />}
        </div>
    )
}

export default TicketsContainer