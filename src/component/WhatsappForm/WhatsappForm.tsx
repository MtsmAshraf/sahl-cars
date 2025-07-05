"use client"
// components/WhatsAppForm.js
import { useState } from 'react';
import styles from "./whatsapp-form.module.css"
export default function WhatsAppForm() {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: value
    }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Format the message
    const whatsappMessage = `New Contact Form Submission:%0A%0A` +
    `Name: ${formData.name}%0A` +
    `Email: ${formData.email}%0A` +
    `Phone: ${formData.phone}%0A` +
    `Message: ${formData.message}`;
    
    // Replace with your client's WhatsApp number (include country code, remove +, 0, or spaces)
    const phoneNumber = '+201024994652'; 
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
};

return (
    <form className={styles.whatsappForm} onSubmit={handleSubmit} >
    <div>
        <label htmlFor="name" >Name</label>
        <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        />
    </div>
    
    <div>
        <label htmlFor="email">Email</label>
        <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />
    </div>
    
    <div>
        <label htmlFor="phone">Phone</label>
        <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        />
    </div>
    
    <div>
        <label htmlFor="message">Message</label>
        <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        // rows="4"
        ></textarea>
    </div>
    
    <button
        type="submit"
    >
        Send via WhatsApp
    </button>
    </form>
);
}