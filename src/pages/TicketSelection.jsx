import React from "react";

const TicketSelection = ({ nextStep, updateFormData }) => {
    const handleSelect = (type) => {
      updateFormData({ ticketType: type });
      nextStep();
    };

    
  
    return (
      <div className="">
        <h2>Ticket Selection</h2>
        <button onClick={() => handleSelect("Free")} className="">Free</button>
        <button onClick={() => handleSelect("VIP")}>$150 - VIP</button>
      </div>
    );
  };
  
  export default TicketSelection;
  