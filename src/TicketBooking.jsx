import { useState } from "react";
import TicketSelection from "./pages/TicketSelection";
import AttendeeDetails from "./pages/AttendeeDetails";
import BookingConfirmation from "./pages/BookingConfirmation";

const TicketBooking = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        ticketType: {},
        name: "",
        email: "",
        profilePhoto: "",
    });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const updateFormData = (data) => {
        setFormData({ ...formData, ...data });
    };

    return (
        <div className="">
            {step === 1 && <TicketSelection nextStep={nextStep} updateFormData={updateFormData} />}
            {step === 2 && <AttendeeDetails nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />}
            {step === 3 && <BookingConfirmation formData={formData} prevStep={prevStep} />}
        </div>
    );
};

export default TicketBooking;
