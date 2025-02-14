import React from "react";

const AboutProject = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-6">About the Ticket Generator Project</h1>
        <p className="text-lg text-gray-300 mb-6">
          The <span className="text-teal-300 font-semibold">Ticket Generator</span> project is a user-friendly web application designed to streamline event ticket registration and generation. The platform enables users to easily enter their details, upload a profile photo, and receive a personalized event ticket.
        </p>
        
        <h2 className="text-2xl font-semibold text-teal-400 mb-4">Key Features:</h2>
        <ul className="text-gray-300 text-left list-disc list-inside space-y-3">
          <li>
            <span className="text-teal-300 font-semibold">Profile Photo Upload:</span> Users can upload their images via drag-and-drop or file selection, with secure storage via Cloudinary.
          </li>
          <li>
            <span className="text-teal-300 font-semibold">Form Validation:</span> Ensures users enter valid details, including email verification, before proceeding.
          </li>
          <li>
            <span className="text-teal-300 font-semibold">Step-by-Step Navigation:</span> A guided form process allows users to smoothly complete ticket registration.
          </li>
          <li>
            <span className="text-teal-300 font-semibold">Real-Time Error Handling:</span> Instant feedback is provided for missing or incorrect inputs.
          </li>
          <li>
            <span className="text-teal-300 font-semibold">Responsive Design:</span> The interface is designed for seamless access across devices.
          </li>
        </ul>
        
        <p className="text-lg text-gray-300 mt-6">
          This project simplifies the ticketing process, making it an efficient solution for events, conferences, and meetups. 🚀
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
