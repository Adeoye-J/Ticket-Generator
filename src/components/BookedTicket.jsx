import React, { useContext } from "react";
import { TicketContext } from "../context/TicketContext";
import barcode from "/barcode.svg"

const BookedTicket = () => {

    const {avatar} = useContext(TicketContext)

  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="relative w-full h-[110vh] bg-no-repeat bg-cover bg-center flex justify-center" 
            style={{ backgroundImage: `url('/card.svg')` }}
        >
            <div className="text-center border border-[#24A0B5] rounded-2xl px-4 mt-16 h-[490px]">
                {/* Event Title */}
                <div className="text-white text-4xl road-rage font-thin">
                    Techember Fest '25
                </div>

                {/* Location and Date */}
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
                            <p className="text-white text-sm">Avi Chukwu</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start border-b border-[#12464E] py-2 px-3">
                            <p className="text-sm text-gray-500">Enter your name</p>
                            <p className="text-white text-sm">Avi Chukwu</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start border-r border-[#12464E] py-2 px-3">
                            <p className="text-sm text-gray-500">Enter your name</p>
                            <p className="text-white text-sm">Avi Chukwu</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start py-2 px-3">
                            <p className="text-sm text-gray-500">Enter your name</p>
                            <p className="text-white text-sm">Avi Chukwu</p>
                        </div>
                    </div>
                    <div className="border-t border-[#12464E] flex flex-col gap-2 py-2 px-3 items-start">
                        <p className="text-sm text-gray-500">Enter your name</p>
                        <p className="text-white text-sm">Avi Chukwu</p>
                    </div>
                </div>
            </div>

            <div className="absolute top-[610px]">
                <img src={barcode} alt="" />
            </div>


            {/* <div className="relative"> */}
                {/* Event Title */}
                {/* <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-4xl road-rage font-thin">
                Techember Fest '25
                </div> */}

                {/* Location and Date */}
                {/* <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm text-center">
                📍 04 Rumens Road, Ikoyi, Lagos <br />
                📅 March 15, 2025 | 7:00 PM
                </div> */}
            {/* </div> */}

        {/* User Avatar */}
        {/* <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
          <img 
            src="https://your-image-url.com/avatar.png" 
            alt="User Avatar" 
            className="w-24 h-24 rounded-lg object-cover"
          />
        </div> */}

        {/* User Information */}
        {/* <div className="absolute top-52 w-full px-6 text-white">
          <div className="bg-gray-800 p-3 rounded-lg">
            <p className="text-sm text-gray-400">Enter your name</p>
            <p className="font-semibold">Avi Chukwu</p>
          </div> */}

          {/* <div className="bg-gray-800 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-400">Enter your email</p>
            <p className="font-semibold">User@email.com</p>
          </div> */}

          {/* Ticket Info */}
          {/* <div className="bg-gray-800 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-400">Ticket Type:</p>
            <p className="font-semibold">VIP</p>
          </div> */}

          {/* <div className="bg-gray-800 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-400">Ticket for:</p>
            <p className="font-semibold">1</p>
          </div> */}

          {/* Special Request */}
          {/* <div className="bg-gray-800 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-400">Special request?</p>
            <p className="text-sm">Nil? Or the user’s sad story they write in here...</p>
          </div>
        </div> */}

        {/* Barcode */}
        {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-40">
          <img src="https://your-barcode-url.com/barcode.png" alt="Barcode" />
        </div> */}
      </div>
    </div>
  );
};

export default BookedTicket;
