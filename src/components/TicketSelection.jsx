import React, { useContext, useState, useEffect } from 'react';
import { TicketContext } from '../context/TicketContext';

const TicketSelection = () => {
    const { prevStep, nextStep, formData, updateFormData } = useContext(TicketContext);
    
    const tickets = [
        { price: "Free", type: "REGULAR ACCESS", seats: "20/52" },
        { price: "$150", type: "VIP ACCESS", seats: "20/52" },
        { price: "$250", type: "VVIP ACCESS", seats: "20/52" }
    ];

    const [selectedTicket, setSelectedTicket] = useState(formData.ticketType?.type || "");
    const [error, setError] = useState("");

    useEffect(() => {
        if (formData.ticketType?.type) {
            setSelectedTicket(formData.ticketType.type);
        }
    }, [formData]);

    const handleSelect = (index) => {
        setSelectedTicket(tickets[index].type);
        updateFormData({ ticketType: tickets[index] });
        setError(""); // Clear error on selection
    };

    const handleNext = () => {
        if (!selectedTicket || !formData.numTickets) {
            setError("Please select a ticket type and specify the number of tickets.");
            return;
        }
        nextStep();
    };

    return (
        <div className='sm:border border-[#0E464F] my-6 sm:p-6 rounded-3xl'>
            <div className="border border-[#0E464F] rounded-3xl p-6 mb-6 flex flex-col gap-2 items-center text-center text-white">
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold road-rage'>Techember Fest '25</h1>
                <p className='w-[90%] md:w-[60%] mb-2 text-sm lg:text-base'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                <p className='flex flex-col sm:flex-row items-center gap-2 text-sm lg:text-base'><span>📍[Event Location]📍</span> <span className='hidden sm:block'>||</span> <span>March 15, 2025 | 7:00PM</span></p>
            </div>

            <hr className='mb-6 h-1 border border-[#0E464F] bg-[#0E464F]' />

            <div className="text-white mb-6">
                <h3 className='text-[16px] mb-4'>Select Ticket Type:</h3>

                <div className="border border-[#0E464F] rounded-3xl flex flex-col sm:flex-row gap-3 p-4">
                    {tickets.map((item, index) => (
                        <div key={index} 
                            onClick={() => handleSelect(index)} 
                            className={`flex-1 p-3 border-2 border-[#0E464F] flex flex-col items-start gap-1 rounded-2xl cursor-pointer sm:w-1/3 transition-all hover:bg-[#07373F] 
                            ${selectedTicket === item.type ? "border-[#24A0B5] bg-[#07373F]" : "border-[#0E464F]"}`}>
                            <p className='text-xl sm:text-2xl font-semibold'>{item.price}</p>
                            <p className='text-xs sm:text-sm'>{item.type}</p>
                            <p className='text-[12px] sm:text-xs mt-1 sm:mt-2'>{item.seats}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-white mb-6">
                <h3 className='text-[16px] mb-4'>Number of Tickets:</h3>
                <select className='w-full outline-none border border-[#0E464F] bg-transparent px-2 py-2 rounded-xl text-xl focus:border-2'
                    value={formData.numTickets || "1"} 
                    onChange={(e) => updateFormData({ numTickets: e.target.value })}>
                    {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num} className='py-3 px-3 bg-[#02191D]'>{num}</option>
                    ))}
                </select>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="flex flex-col sm:flex-row gap-2">
                <button onClick={prevStep} className='order-2 sm:order-1 flex-1 border border-[#24A0B5] rounded-xl py-3 text-base sm:text-sm md:text-lg text-[#24A0B5] hover:bg-red-700 hover:text-white transition-all ease-in-out duration-500'>Cancel</button>
                <button onClick={handleNext} className={`order-1 sm:order-2 flex-1 border border-[#24A0B5] rounded-xl py-3 text-base sm:text-sm md:text-lg text-[#24A0B5] transition-all ease-in-out duration-500 
                    ${(!selectedTicket || !formData.numTickets) ? "opacity-50 cursor-not-allowed" : "hover:bg-[#24A0B5] hover:text-white"}`} 
                    disabled={!selectedTicket || !formData.numTickets}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default TicketSelection;
