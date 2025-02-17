import React from 'react'

const MyTickets = () => {
  return (
    <div>MyTickets</div>
  )
}

export default MyTickets;

// import React from 'react';

// const MyTickets = () => {
//   return (
//     <div className="relative bg-gradient-to-b from-[#003049] to-[#001A26] border border-[#006699] rounded-xl overflow-hidden w-64 h-96">
//       {/* Top rounded corners */}
//       <div className="absolute top-0 left-0 w-4 h-4 bg-transparent border-t-2 border-l-2 border-[#006699] rounded-tl-xl"></div>
//       <div className="absolute top-0 right-0 w-4 h-4 bg-transparent border-t-2 border-r-2 border-[#006699] rounded-tr-xl"></div>

//       {/* Bottom section with perforation line */}
//       <div className="absolute bottom-0 left-0 w-full h-20">
//         {/* Perforation line */}
//         <div className="relative top-[-10px] w-full h-0.5 flex justify-center items-center overflow-hidden">
//           <div className="w-full h-full bg-transparent relative">
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-evenly items-center">
//               {Array.from({ length: 20 }).map((_, index) => (
//                 <div
//                   key={index}
//                   className="w-1 h-1 rounded-full bg-[#006699]"
//                 ></div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom rounded corners and side cutouts */}
//         <div className="absolute bottom-0 left-0 w-4 h-4 bg-transparent border-b-2 border-l-2 border-[#006699] rounded-bl-xl"></div>
//         <div className="absolute bottom-0 right-0 w-4 h-4 bg-transparent border-b-2 border-r-2 border-[#006699] rounded-br-xl"></div>
//         <div className="absolute left-[-10px] bottom-8 w-4 h-4 rounded-full bg-[#001A26]"></div>
//         <div className="absolute right-[-10px] bottom-8 w-4 h-4 rounded-full bg-[#001A26]"></div>
//       </div>

//       {/* Vertical line effect */}
//       <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-[#006699]"></div>
//       <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-[#006699]"></div>
//     </div>
//   );
// };

// export default MyTickets;
