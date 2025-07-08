"use client"
// components/WhatsAppForm.js
import { useState } from 'react';
import styles from "./whatsapp-form.module.css"
import { useTranslations } from 'next-intl';
import carBrands from './carBrands';
export default function WhatsAppForm({
  lo
} : {
  lo: string
}) {

    const t = useTranslations("HomePage.Contact.form")

const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
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

const [selectedBrand, setSelectedBrand] = useState("")

return (
    <form className={lo === "ar" ? styles.whatsappForm + " " + styles.ar : styles.whatsappForm} onSubmit={handleSubmit} >
        <div className={styles.formHeading}>
            <h4>
                {
                    t("formHeading.h4")
                }
            </h4>
            <p>
                {
                    t("formHeading.p")
                }
            </p>
        </div>
        <div className={styles.parentDiv}>
            <div>
                <label htmlFor="name" >
                    {
                        t("name.label")
                    }
                </label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder={`${t("name.placeholder")}`}
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="phone">
                    {
                        t("phone.label")
                    }
                </label>
                <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={`${t("phone.placeholder")}`}
                value={formData.phone}
                onChange={handleChange}
                required
                />
            </div>
        </div>
        
        <div>
            <label htmlFor="email">
                    {
                        t("email.label")
                    }
            </label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder={`${t("email.placeholder")}`}
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>

        <div className={styles.parentDiv}>
            <div>
                <label htmlFor="date">
                        {/* {
                            t("date.label")
                        } */}
                        تاريخ الميلاد
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />
            </div>
                
            <div className={styles.yesNo}>
                <label htmlFor="">النوع</label>
                <div>
                    <div>
                        <input type="radio" required id="male" name="gender" value="male" />
                        <label htmlFor="male">ذكر</label> 
                    </div>
                    <div>
                        <input type="radio" required id="female" name="gender" value="female" />
                        <label htmlFor="female">أنثى</label> 
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.parentDiv}>
            <div>
                <label htmlFor="car-brand">
                    نوع السيارة
                </label>
                    <select onChange={(e) => {setSelectedBrand(e.target.value)}} required name="car-brand" id="car-brand">
                        <option value="">
                            اختر نوع السيارة
                        </option>
                        {
                            carBrands.map((brand) => {
                                return(
                                    <option key={brand.id} value={brand.value.toLowerCase()}>
                                        {brand.brandName}
                                    </option>
                                )
                            })
                        }
                    </select>
            </div>
            <div>
                <label htmlFor="car-model">
                    موديل السيارة
                </label>
                    <select style={{ filter: selectedBrand === "" ? "grayscale(100%)" : "grayscale(0%)", color: selectedBrand === "" ? "#aaa" : "#000",  }} required name="car-model" id="car-model" disabled={selectedBrand === "" ? true : false}>
                        <option value="">
                            {
                                selectedBrand !== "" ? "موديل السيارة" : "اختر موديل السيارة أولا"
                            }
                        </option>
                        {
                            selectedBrand ? 
                            carBrands.map((brand) => {
                                return(
                                    brand.value.toLowerCase() === selectedBrand ? 
                                    brand.models.map((model: string, index: number) => {
                                        return(
                                            <option key={index} value={brand.value}>
                                                {model}
                                            </option>
                                        )
                                    })
                                    : 
                                    null
                                )
                            })
                            :
                            null
                        }
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

        <div className={styles.yesNo}>
            <label htmlFor="">جهة العمل (جهة صاحب العمل)</label>
            <div>
                <div>
                    <input type="radio" required id="gov-work" name="work" value="gov-work"/>
                    <label htmlFor="gov-work">حكومي</label> 
                </div>
                <div>
                    <input type="radio" required id="private-work" name="work" value="private-work" />
                    <label htmlFor="private-work">خاص</label> 
                </div>
                <div>
                    <input type="radio" required id="other-work" name="work" value="other-work" />
                    <label htmlFor="other-work">آخر</label> 
                </div>
            </div>
        </div>
        <div className={styles.yesNo}>
            <label htmlFor="">هل أنت مسجل بالتأمينات الاجتماعية؟</label>
            <div>
                <div>
                    <input type="radio" required id="yes-insurence" name="insurence" value="yes-insurence"/>
                    <label htmlFor="yes-insurence">نعم</label> 
                </div>
                <div>
                    <input type="radio" required id="no--insurence" name="insurence" value="no--insurence" />
                    <label htmlFor="no--insurence">لا</label> 
                </div>
            </div>
        </div>
        
        <div className={styles.parentDiv}>
            <div className={styles.salarySrc}>
                <label htmlFor="car-brand">
                    جهة تحويل الراتب
                </label>
                <select required name="bank" id="bank">
                    <option value="">اختر البنك</option>
                    <option value="alrajhi">البنك الأهلي التجاري</option>
                    <option value="alrajhi">الراجحي</option>
                    <option value="samba">سامبا</option>
                    <option value="riyad">بنك الرياض</option>
                    <option value="albilad">البلاد</option>
                    <option value="alinma">الإنماء</option>
                    <option value="alfransi">الفرنسي</option>
                    <option value="saab">بنك السعودية البريطاني (ساب)</option>
                    <option value="aljazeera">بنك الجزيرة</option>
                    <option value="saudi_invest">بنك الاستثمار السعودي</option>
                    <option value="saudi_post">بنك التسليف والادخار</option>
                    <option value="bsf">البنك السعودي الفرنسي</option>
                    <option value="anb">البنك العربي الوطني</option>
                    <option value="mussafah">مصرف الراجحي</option>
                    <option value="alinsaat">بنك الإنشاء والتعمير</option>
                    <option value="saudi_hollandi">بنك السعودية الهولندي</option>
                    <option value="gulf">بنك الخليج الدولي</option>
                    <option value="emirates_nbd">بنك الإمارات دبي الوطني</option>
                    <option value="other">بنك آخر</option>
                </select>

            </div>
            <div className={styles.salary}>
                <label htmlFor="salary">
                        {/* {
                            t("salary.label")
                        } */}
                        صافي الراتب
                </label>
                <input
                type="salary"
                id="salary"
                name="number"
                // placeholder={`${t("email.placeholder")}`}
                placeholder='صافي الراتب بالريال السعودي'
                // value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
        </div>

        <div className={styles.parentDiv}>
            <div className={styles.yesNo}>
                <label htmlFor="">هل لديك تمويل عقاري؟</label>
                <div>
                    <div>
                        <input type="radio" required id="yes-finance" name="finance" value="yes-finance" />
                        <label htmlFor="yes-finance">نعم</label> 
                    </div>
                    <div>
                        <input type="radio" required id="no-finance" name="finance" value="no-finance" />
                        <label htmlFor="no-finance">لا</label> 
                    </div>
                </div>
            </div>
            
            <div className={styles.yesNo}>
                <label htmlFor="">هل لديك تعثر في سمة؟</label>
                <div>
                    <div>
                        <input type="radio" required id="yes-sema" name="sema" value="yes-sema" />
                        <label htmlFor="yes-sema">نعم</label> 
                    </div>
                    <div>
                        <input type="radio" required id="no-sema" name="sema" value="no-sema" />
                        <label htmlFor="no-sema">لا</label> 
                    </div>
                </div>
            </div>
        </div>
        <div>
            <label htmlFor="email">
                    {/* {
                        t("email.label")
                    } */}
                    إجمالي الالتزامات المالية الشهرية
            </label>
            <input
            type="number"
            id="obligations"
            name="obligations"
            // placeholder={`${t("obligations.placeholder")}`}
            placeholder='بالريال السعودي'
            // value={formData.email}
            onChange={handleChange}
            required
            />
        </div>


        <div>
            <label htmlFor="message">
                {
                    t("message.label")
                }
            </label>
            <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder={`${t("message.placeholder")}`}
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