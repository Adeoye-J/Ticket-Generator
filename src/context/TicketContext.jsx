import { createContext, useState } from "react";

export const TicketContext = createContext()

const TicketProvider = (props) => {

    const initialData = JSON.parse(localStorage.getItem("formData")) || {
        ticketType: {},
        numTickets: "",
        name: "",
        email: "",
        profilePhoto: "",
        specialRequest: ""
    };
    
    const [formData, setFormData] = useState(initialData);

    const updateFormData = (newData) => {
        setFormData((prev) => {
            const updatedData = { ...prev, ...newData };

            localStorage.setItem("formData", JSON.stringify(updatedData));
            
            return updatedData;
        });
    };

    const [avatar, setAvatar] = useState("");

    const titles = [
        "Ticket Selection",
        "Attendee Details",
        "Ready"
    ]

    const [step, setStep] = useState(0)

    const prevStep = () => {
        if (step > 0) {
            setStep((prevStep) => (prevStep - 1))
        } else {
            setStep(0)
        }
    }

    const nextStep = () => {
        if (step < titles.length - 1) {
            setStep((prevStep) => (prevStep + 1))
        } else {
            setStep(2)
        }
    }

    const value = {
        titles, step, setStep, prevStep, nextStep, avatar, setAvatar, formData, updateFormData
    }

    

    return(
        <TicketContext.Provider value={value}>
            {props.children}
        </TicketContext.Provider>
    )
}

export default TicketProvider
