import React, { useContext } from 'react'
import BookedTicket from './BookedTicket'
import { Link, useNavigate } from 'react-router-dom'
import { TicketContext } from '../context/TicketContext'
import { usePDF } from 'react-to-pdf';

const TicketDetails = () => {

    const {nextStep, setStep} = useContext(TicketContext)
    const { toPDF, targetRef } = usePDF({filename: 'my-ticket.pdf'});

    const navigate = useNavigate()

    return (
        <div>
            <div className="text-center flex flex-col gap-2 text-white mt-8 mb-3">
                <h2 className='text-3xl font-semibold'>Your Ticket is Booked!</h2>
                <p>Check your email for a copy or you can <Link to={"/"}>download</Link></p>
            </div>
            <BookedTicket targetRef={targetRef} />
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button onClick={() => {setStep(0); navigate("/")}} className='order-2 sm:order-1 flex-1 border border-[#24A0B5] rounded-xl py-3 text-base sm:text-sm md:text-lg text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition-all ease-in-out duration-500'>Book Another Ticket</button>
                <button onClick={() => {toPDF(); nextStep}} className='order-1 sm:order-2 flex-1 border border-[#24A0B5] rounded-xl py-3 text-base sm:text-sm md:text-lg text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition-all ease-in-out duration-500'>Download Ticket</button>
            </div>
        </div>
    )
}

export default TicketDetails