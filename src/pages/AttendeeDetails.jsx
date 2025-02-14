import React, { useState } from "react";

const AttendeeDetails = ({ nextStep, prevStep, updateFormData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = () => {
    updateFormData({ name, email });
    nextStep();
  };

  return (
    <div>
      <h2>Attendee Details</h2>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AttendeeDetails;
