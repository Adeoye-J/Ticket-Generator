import React, { useContext, useState } from "react";
import email_icon from "/email_icon.png";
import { TicketContext } from "../context/TicketContext";
import { Upload, Loader } from "lucide-react";

const AttendeeDetails = () => {
  const { prevStep, nextStep, avatar, setAvatar, formData, updateFormData } = useContext(TicketContext);

  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

    // Cloudinary Upload Function
    const uploadToCloudinary = async (file) => {
        setLoading(true); // Start loading
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ticketgenerator"); // Replace with your Cloudinary preset

        try {
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/drkknoddw/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await res.json();
            if (data.secure_url) {
                setAvatar(data.secure_url);
                setError("");
            } else {
                setError("Failed to upload image.");
            }
        } catch (err) {
            setError("Error uploading image.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Handle File Selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            uploadToCloudinary(file);
        } else {
            setError("Please upload a valid image.");
        }
    };

  // Handle Drag & Drop
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            uploadToCloudinary(file);
        } else {
            setError("Invalid file type.");
        }
    };

    // Form validation before proceeding
    const handleNextStep = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
        
            if (!avatar || !formData.name.trim() || !formData.email.trim()) {
                setFormError("Please fill in all required fields.");
                return;
            }
        
            if (!emailRegex.test(formData.email)) {
                setFormError("Please enter a valid email address.");
                return;
            }
        
            setFormError(""); // Clear errors if validation passes
            nextStep();
    };

  return (
    <div className="sm:border border-[#0E464F] my-6 sm:p-6 rounded-3xl">
      <div className="border border-[#0E464F] rounded-3xl p-6 mb-6 text-white bg-[#052228]">
        <label className="text-[16px] mb-8 block">Upload Profile Photo:</label>

        <div className="w-full h-36 flex items-center justify-center bg-[#041b20] mb-5">
          <div
            className="relative w-full sm:w-52 h-full sm:h-[120%] bg-[#0E464F] border-2 border-[#24A0B5] rounded-2xl flex flex-col items-center justify-center cursor-pointer text-center hover:bg-[#07373F] transition-all"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {loading ? (
              <Loader size={32} className="animate-spin text-white" />
            ) : avatar ? (
              <img
                src={avatar}
                alt="Avatar Preview"
                className="w-full h-full object-cover border rounded-2xl"
              />
            ) : (
              <>
                <Upload size={24} className="text-white" />
                <p className="mt-2 text-base">Drag & drop or click to upload</p>
              </>
            )}
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileChange}
              disabled={loading}
            />
          </div>
        </div>

        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </div>

      <hr className="mb-6 h-1 border border-[#0E464F] bg-[#0E464F]" />

      <div className="text-white mb-6">
        <h3 className="text-[16px] mb-4">Enter your name:</h3>
        <input
          type="text"
          className="w-full outline-none border border-[#0E464F] bg-transparent px-4 py-2 rounded-xl text-base focus:border-2"
          value={formData.name || ""}
          onChange={(e) => updateFormData({ name: e.target.value })}
          required
        />
      </div>

      <div className="text-white mb-6">
        <h3 className="text-[16px] mb-4">Enter your email: *</h3>
        <div className="w-full flex items-center gap-2 outline-none border border-[#0E464F] px-3 rounded-xl active:border-2 focus:border-2">
          <img src={email_icon} alt="" className="w-6" />
          <input
            type="email"
            className="w-full h-full outline-none bg-transparent px-2 py-3 text-base"
            value={formData.email || ""}
            onChange={(e) => updateFormData({ email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="text-white mb-6">
        <h3 className="text-[16px] mb-4">Special request?</h3>
        <textarea
          name=""
          id=""
          className="p-4 h-36 w-full outline-none bg-transparent border border-[#0E464F] rounded-xl text-base focus:border-2"
          value={formData.specialRequest || ""}
          onChange={(e) => updateFormData({ specialRequest: e.target.value })}
        ></textarea>
      </div>

      {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={prevStep}
          className="order-2 sm:order-1 flex-1 border border-[#24A0B5] rounded-xl py-3 text-base sm:text-sm md:text-lg text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition-all ease-in-out duration-500"
        >
          Back
        </button>
        <button
          onClick={handleNextStep}
          className="order-1 sm:order-2 flex-1 border border-[#24A0B5] rounded-xl py-3 text-base sm:text-sm md:text-lg text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition-all ease-in-out duration-500"
        >
          Get My Free Ticket
        </button>
      </div>
    </div>
  );
};

export default AttendeeDetails;
