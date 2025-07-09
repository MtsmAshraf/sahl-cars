"use client"
// components/WhatsAppForm.js
import { useState } from 'react';
import styles from "./whatsapp-form.module.css"
import { useTranslations } from 'next-intl';
import carBrands from './carBrands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function WhatsAppForm({
  lo
} : {
  lo: string
}) {

    const t = useTranslations("HomePage.Contact.form")

const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    carBrand: '',
    carModel: '',
    work: '',
    insurence: '',
    salarySrc: '',
    salary: '',
    obligations: '',
    sema: '',
    totalObligationPerMonth: '',
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
    const whatsappMessage = 
    lo === "ar" ? 
    `رسالة جديدة من موقع سهل كارز:%0A%0A` +
    `الاسم: ${formData.name}%0A` +
    `الجوال: ${formData.phone}%0A` +
    `البريد الإلكتروني: ${formData.email}%0A` +
    `تاريخ الميلاد: ${formData.dateOfBirth}%0A` +
    `الجنس: ${formData.gender}%0A` +
    `ماركة السيارة: ${formData.carBrand}%0A` +
    `موديل السيارة: ${formData.carModel}%0A` +
    `العمل: ${formData.work}%0A` +
    `التأمين: ${formData.insurence}%0A` +
    `مصدر الراتب: ${formData.salarySrc}%0A` +
    `الراتب: ${formData.salary}%0A` +
    `الالتزامات: ${formData.obligations}%0A` +
    `السمة: ${formData.sema}%0A` +
    `إجمالي الالتزامات الشهرية: ${formData.totalObligationPerMonth} ريال%0A` +
    `الرسالة: ${formData.message}`
    :
    `New Contact Message from Sahl Cars Website:%0A%0A` +
    `Name: ${formData.name}%0A` +
    `Phone: ${formData.phone}%0A` +
    `Email: ${formData.email}%0A` +
    `Date Of Birth: ${formData.dateOfBirth}%0A` +
    `Gender: ${formData.gender}%0A` +
    `Car Brand: ${formData.carBrand}%0A` +
    `Car Model: ${formData.carModel}%0A` +
    `Work: ${formData.work}%0A` +
    `Insurence: ${formData.insurence}%0A` +
    `Salary Source: ${formData.salarySrc}%0A` +
    `Salary: ${formData.salary}%0A` +
    `Obligations: ${formData.obligations}%0A` +
    `Sema: ${formData.sema}%0A` +
    `Total Obligation Per Month: ${formData.totalObligationPerMonth} SAR %0A` +
    `Message: ${formData.message}`;
    
    // Replace with your client's WhatsApp number (include country code, remove +, 0, or spaces)
    const phoneNumber = '+201024994652'; 
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
};

const [selectedBrand, setSelectedBrand] = useState("")
const [selectedObl, setSelectedObl] = useState("")

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
        
        <div className={styles.parentDiv}>
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
                    name="dateOfBirth"
                    // value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>

        <div className={styles.yesNo}>
            <label htmlFor="">النوع</label>
            <div>
                <div>
                    <input onChange={handleChange} type="radio" required id="male" name="gender" value="male" />
                    <label htmlFor="male">ذكر</label> 
                </div>
                <div>
                    <input onChange={handleChange} type="radio" required id="female" name="gender" value="female" />
                    <label htmlFor="female">أنثى</label> 
                </div>
            </div>
        </div>

        <div className={styles.parentDiv}>
            <div>
                <label htmlFor="car-brand">
                    نوع السيارة
                </label>
                    <select name="carBrand" onChange={(e) => {setSelectedBrand(e.target.value); handleChange(e)}} required id="car-brand">
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
                {
                    selectedBrand !== "" && selectedBrand !== "other" ? 
                    
                    <select name="carModel" onChange={handleChange} style={{ filter: selectedBrand === "" ? "grayscale(100%)" : "grayscale(0%)", color: selectedBrand === "" ? "#aaa" : "#000",  }} required id="car-model" disabled={selectedBrand === "" ? true : false}>
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
                                    brand.models?.map((model: string, index: number) => {
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
                    </select> : 
                    selectedBrand === "other" ?
                    <input name='carBrand' onChange={handleChange} type="text" placeholder='أدخل ماركة وموديل السيارة' />
                    :
                    selectedBrand === "" ?
                    <input value={""} name='other-brand' type="text" placeholder='اختر ماركة السيارة أولا' disabled style={{ backgroundColor: "#ccc" }}/> 
                    :
                    null
                }
            </div>
        </div>

        <div className={styles.yesNo}>
            <label htmlFor="">جهة العمل (جهة صاحب العمل)</label>
            <div>
                <div>
                    <input onChange={handleChange} type="radio" required id="gov-work" name="work" value="gov-work"/>
                    <label htmlFor="gov-work">حكومي</label> 
                </div>
                <div>
                    <input onChange={handleChange} type="radio" required id="private-work" name="work" value="private-work" />
                    <label htmlFor="private-work">خاص</label> 
                </div>
                <div>
                    <input onChange={handleChange} type="radio" required id="other-work" name="work" value="other-work" />
                    <label htmlFor="other-work">آخر</label> 
                </div>
            </div>
        </div>
        <div className={styles.yesNo}>
            <label htmlFor="">هل أنت مسجل بالتأمينات الاجتماعية؟</label>
            <div>
                <div>
                    <input onChange={handleChange} type="radio" required id="yes-insurence" name="insurence" value="yes-insurence"/>
                    <label htmlFor="yes-insurence">نعم</label> 
                </div>
                <div>
                    <input onChange={handleChange} type="radio" required id="no--insurence" name="insurence" value="no--insurence" />
                    <label htmlFor="no--insurence">لا</label> 
                </div>
            </div>
        </div>
        
        <div className={styles.parentDiv}>
            <div className={styles.salarySrc}>
                <label htmlFor="car-brand">
                    جهة تحويل الراتب
                </label>
                <select onChange={handleChange} required name="salarySrc" id="bank">
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
                type="number"
                id="salary"
                name="salary"
                // placeholder={`${t("email.placeholder")}`}
                placeholder='صافي الراتب بالريال السعودي'
                // value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
        </div>

        {/* <div className={styles.parentDiv}> */}
            <div className={styles.yesNo}>
                <label htmlFor="">هل لديك التزامات؟</label>
                <div>
                    <div>
                        <input onChange={(e) => {setSelectedObl(e.target.value); handleChange(e)}} type="radio" required id="state-obl" name="obligations" value="state-obl" />
                        <label htmlFor="state-obl">تمويل عقاري</label> 
                    </div>
                    <div>
                        <input onChange={(e) => {setSelectedObl(e.target.value); handleChange(e)}} type="radio" required id="personal-obl" name="obligations" value="personal-obl" />
                        <label htmlFor="personal-obl">تمويل شخصي</label> 
                    </div>
                    <div>
                        <input onChange={(e) => {setSelectedObl(e.target.value); handleChange(e)}} type="radio" required id="other-obl" name="obligations" value="other-obl" />
                        <label htmlFor="other-obl">أخرى</label> 
                    </div>
                </div>
            </div>
            {
                selectedObl === "other-obl" && 
                    
                <div>
                    <label htmlFor="email">
                            {/* {
                                t("email.label")
                            } */}
                            الالتزامات الأخرى
                    </label>
                    <input
                        type="number"
                        id="obligations"
                        name="obligations"
                        // placeholder={`${t("obligations.placeholder")}`}
                        placeholder='ما هي التزاماتك؟'
                        // value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            }
            <div className={styles.yesNo}>
                <label htmlFor="">هل لديك تعثر في سمة؟</label>
                <div>
                    <div>
                        <input onChange={handleChange} type="radio" required id="yes-sema" name="sema" value="yes-sema" />
                        <label htmlFor="yes-sema">نعم</label> 
                    </div>
                    <div>
                        <input onChange={handleChange} type="radio" required id="no-sema" name="sema" value="no-sema" />
                        <label htmlFor="no-sema">لا</label> 
                    </div>
                </div>
            </div>
        {/* </div> */}
        <div>
            <label htmlFor="obligations">
                    {/* {
                        t("email.label")
                    } */}
                    إجمالي الالتزامات المالية الشهرية
            </label>
            <input
            type="number"
            id="obligations"
            name="totalObligationPerMonth"
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
            <span>
                {
                    t("submit")
                }
            </span>
            <FontAwesomeIcon icon={faWhatsapp} />
        </button>
    </form>
);
}