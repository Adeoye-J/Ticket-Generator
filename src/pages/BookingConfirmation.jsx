import React from "react";

const BookingConfirmation = ({ formData, prevStep }) => {
    return (
      <div>
        <h2>Booking Confirmed</h2>
        <p>Ticket Type: {formData.ticketType}</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <button onClick={prevStep}>Back</button>
      </div>
    );
  };
  
  export default BookingConfirmation;
  