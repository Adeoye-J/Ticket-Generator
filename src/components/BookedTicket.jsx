import React, { useContext } from "react";
import { TicketContext } from "../context/TicketContext";
import barcode from "/barcode.svg"

const BookedTicket = ({targetRef}) => {

    const {avatar, formData} = useContext(TicketContext)

  return (
    <div className="flex justify-center items-center min-h-screen" ref={targetRef}>
        <div className="relative w-full h-[110vh] bg-no-repeat bg-cover bg-center flex justify-center" 
            style={{ backgroundImage: `url('/card.svg')` }}
        >
            <div className="text-center border border-[#24A0B5] rounded-2xl px-4 mt-16 h-[490px]">
                <div className="text-white text-4xl road-rage font-thin">
                    Techember Fest '25
                </div>

                <div className="text-gray-300 text-sm text-center">
                    📍 04 Rumens Road, Ikoyi, Lagos <br />
                    📅 March 15, 2025 | 7:00 PM
                </div>

                <div className="border-4 border-[#24A0B5] w-48 mt-6 rounded-2xl m-auto">
                    <img src={avatar} alt="" className="w-full h-full object-cover rounded-2xl" />
                </div>

                <div className="border border-[#12464E] rounded-2xl mt-6">
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex flex-col gap-2 items-start border-r border-b border-[#12464E] p-2">
                            <p className="text-sm text-gray-500">Enter your name</p>
                            <p className="text-white text-sm">{formData.name}</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start border-b border-[#12464E] py-2 px-3">
                            <p className="text-sm text-gray-500">Enter your email *</p>
                            <p className="text-white text-sm">{formData.email}</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start border-r border-[#12464E] py-2 px-3">
                            <p className="text-sm text-gray-500">Ticket Type:</p>
                            <p className="text-white text-sm">{formData.ticketType.type}</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start py-2 px-3">
                            <p className="text-sm text-gray-500">Ticket for:</p>
                            <p className="text-white text-sm">{formData.numTickets}</p>
                        </div>
                    </div>
                    <div className="border-t border-[#12464E] flex flex-col gap-2 py-2 px-3 items-start">
                        <p className="text-sm text-gray-500">Special request?</p>
                        <p className="text-white text-sm">{formData.specialRequest}</p>
                    </div>
                </div>
            </div>

            <div className="absolute top-[610px]">
                <img src={barcode} alt="" />
            </div>
      </div>
    </div>
  );
};

export default BookedTicket;
