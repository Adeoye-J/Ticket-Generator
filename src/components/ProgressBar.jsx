import React, { useContext } from 'react'
import { TicketContext } from '../context/TicketContext'

const ProgressBar = () => {
    const { titles, step } = useContext(TicketContext)

    const interval = titles.length > 0 ? 100 / titles.length : 0;
    const progress = titles.length > 0 ? ((step + 1) * interval).toFixed(2) : 0;

    return (
        <div className='w-full h-1 bg-[#0E464F] rounded-full my-4'>
            <div 
                className='h-full bg-[#24A0B5] transition-all duration-300' 
                style={{ width: `${progress}%` }} 
            ></div>
        </div>
    )
}

export default ProgressBar
