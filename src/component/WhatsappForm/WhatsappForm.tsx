"use client"
// components/WhatsAppForm.js
import { useState } from 'react';
import styles from "./whatsapp-form.module.css"
export default function WhatsAppForm({
  lo
} : {
  lo: string
}) {
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
    const whatsappMessage = `New Contact Message from Sahl Cars Website:%0A%0A` +
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
    <form className={lo === "ar" ? styles.whatsappForm + " " + styles.ar : styles.whatsappForm} onSubmit={handleSubmit} >
        <div className={styles.formHeading}>
            <h4>
                تواصل معنا الآن
            </h4>
            <p>
                املأ النموذج وسنتواصل معك خلال 24 ساعة
            </p>
        </div>
        <div className={styles.parentDiv}>
            <div>
                <label htmlFor="name" >الاسم بالكامل</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder='ادخل اسمك بالكامل'
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="phone">رقم الهاتف</label>
                <input
                type="tel"
                id="phone"
                name="phone"
                placeholder='+966xxxxxxxxx'
                value={formData.phone}
                onChange={handleChange}
                required
                />
            </div>
        </div>
        
        <div>
            <label htmlFor="email">الإيميل</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        
        <div className={styles.parentDiv}>
            <div>
                <label htmlFor="car-brand">
                    نوع السيارة
                </label>
                    <select required name="car-brand" id="car-brand">
                        <option value="">اختر نوع السيارة</option>
                        <option value="new-toyota">تويوتا جديدة</option>
                        <option value="used-toyota">تويوتا مستعملة</option> <option value="">تويوتا جديدة</option>
                        <option value="new-other">ماركات أخرى جديدة</option>
                        <option value="used-other">ماركات أخرى مستعملة</option>
                    </select>
            </div>
            <div>
                <label htmlFor="budget">
                    الميزانية التقريبية
                </label>
                    <select required name="budget" id="budget">
                        <option value="">اختر الميزانية التقريبية</option>
                        <option value="fifty-to-one-hundred">
                            50,000 - 100,000 ريال
                        </option>
                        <option value="one-hundred-to-two-hundred">
                            100,000 - 200,000 ريال
                        </option>
                        <option value="two-hundred-to-three-hundred">
                            200,000 - 300,000 ريال
                        </option>
                        <option value="more-than-three-hundred">
                            أكثر من 300,000 ريال
                        </option>
                    </select>
            </div>
        </div>

        <div className={styles.yesNo}>
            <label htmlFor="">هل لديك؟</label>
            <div>
                <div>
                    <input type="radio" required id="yes" name="boolean-input" value="yes"/>
                    <label htmlFor="yes">نعم</label> 
                </div>
                <div>
                    <input type="radio" required id="no" name="boolean-input" value="no" />
                    <label htmlFor="no">لا</label> 
                </div>
                <div>
                    <input type="radio" required id="maybe" name="boolean-input" value="maybe" />
                    <label htmlFor="maybe">ربما</label> 
                </div>
            </div>
        </div>

        <div>
            <label htmlFor="message">رسالة إضافية (اختياري)</label>
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