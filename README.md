# Ticket Generator - React + Vite + Tailwind

## Overview
The **Ticket Generator** is a web application built with **React (Vite) and Tailwind CSS**, allowing users to select event tickets, enter their details, and generate a downloadable ticket. The project follows a **three-step booking process** with email validation to ensure authenticity before proceeding.

## Features
- **Event Ticket Selection**: Users can choose from different ticket types (Free, VIP, etc.).
- **Attendee Details Input**: Users enter their name, email, and upload a profile photo.
- **Email Validation**: The email must be validated before proceeding to ticket generation.
- **Ticket Generation**: A personalized ticket is generated with a barcode.
- **Download Ticket**: Users can download the ticket as an image or PDF.
- **Responsive UI**: The design is optimized for different screen sizes.
- **Dark Theme Aesthetic**: A modern, dark-themed UI built with Tailwind CSS.

## Tech Stack
- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Validation**: Custom email validation logic
- **File Handling**: Profile photo upload

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Adeoye-J/Ticket-Generator.git
   cd Ticket-Generator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure
```
/ticket-generator
├── src
│   ├── components  # Reusable components (TicketCard, Form, etc.)
│   ├── pages       # Pages (Home, Ticket Selection, Confirmation)
│   ├── styles      # Tailwind styles
│   ├── App.jsx     # Main application file
│   ├── main.jsx    # Entry point
├── public          # Static assets
├── package.json    # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
└── vite.config.js  # Vite configuration
```

## How It Works
1. **Step 1: Ticket Selection**
   - User selects an event ticket type (Free, VIP, etc.).
   - Proceeds to the next step.

2. **Step 2: Attendee Details**
   - User enters their name and email.
   - Uploads a profile picture.
   - Email is validated before proceeding.

3. **Step 3: Ticket Generation**
   - A personalized ticket is displayed.
   - User can download or receive it via email.

## Future Improvements
- Integration with a **backend API** for storing ticket data.
- Implementing **QR code scanning** for ticket verification.
- Adding **payment integration** for paid tickets.
- Enhancing email validation with OTP verification.

## License
This project is open-source and available under the **MIT License**.

## Author
Developed by **[Your Name]**. Reach out on **[Your LinkedIn/GitHub]** for collaboration or improvements.

---
Enjoy using the **Ticket Generator**! 🎟️🚀

