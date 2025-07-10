"use client"
// components/WhatsAppForm.js
import { useState } from 'react';
import styles from "./whatsapp-form.module.css"
import { useTranslations } from 'next-intl';
import carBrands, { CarBrand } from './carBrands';
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
    <form className={lo !== "en" ? styles.whatsappForm + " " + styles.ar : styles.whatsappForm} onSubmit={handleSubmit} >
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
                        {
                            t("dateOfBirth.label")
                        }
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
            <label htmlFor="">
                {
                    t("gender.label")
                }
            </label>
            <div>
                <div>
                    <input onChange={handleChange} type="radio" required id="male" name="gender" value="male" />
                    <label htmlFor="male">
                        {
                            t("gender.options.male")
                        }    
                    </label> 
                </div>
                <div>
                    <input onChange={handleChange} type="radio" required id="female" name="gender" value="female" />
                    <label htmlFor="female">
                        {
                            t("gender.options.female")
                        }    
                    </label> 
                </div>
            </div>
        </div>

        <div className={styles.parentDiv}>
            <div>
                <label htmlFor="car-brand">
                    {
                        t("carBrand.label")
                    }
                </label>
                    <select name="carBrand" onChange={(e) => {setSelectedBrand(e.target.value); handleChange(e)}} required id="car-brand">
                        <option value="">
                            {
                                t("carBrand.placeholder")
                            }
                        </option>
                        {
                            carBrands.map((brand: CarBrand) => {
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
                        {
                            t("carModel.label")
                        }
                </label>
                {
                    selectedBrand !== "" && selectedBrand !== "other" ? 
                    
                    <select name="carModel" onChange={handleChange} style={{ filter: selectedBrand === "" ? "grayscale(100%)" : "grayscale(0%)", color: selectedBrand === "" ? "#aaa" : "#000",  }} required id="car-model" disabled={selectedBrand === "" ? true : false}>
                        <option value="">
                            {
                                selectedBrand !== "" ? t("carModel.label") : t("carModel.disabledPlaceholder")
                            }
                        </option>
                        {
                            selectedBrand ? 
                            carBrands.map((brand: CarBrand) => {
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
                    <input name='carBrand' onChange={handleChange} type="text" placeholder={t("carModel.customPlaceholder")} />
                    :
                    selectedBrand === "" ?
                    <input value={""} name='other-brand' type="text" placeholder={t("carModel.disabledPlaceholder")} disabled style={{ backgroundColor: "#ccc" }}/> 
                    :
                    null
                }
            </div>
        </div>

        <div className={styles.yesNo}>
            <label htmlFor="">
                {
                    t("work.label")
                }
            </label>
            <div>
                <div>
                    <input onChange={handleChange} type="radio" required id="gov-work" name="work" value="gov-work"/>
                    <label htmlFor="gov-work">
                        {
                            t("work.options.gov")
                        }    
                    </label> 
                </div>
                <div>
                    <input onChange={handleChange} type="radio" required id="private-work" name="work" value="private-work" />
                    <label htmlFor="private-work">
                        {
                            t("work.options.private")
                        }    
                    </label> 
                </div>
                <div>
                    <input onChange={handleChange} type="radio" required id="other-work" name="work" value="other-work" />
                    <label htmlFor="other-work">
                        {
                            t("work.options.other")
                        }    
                    </label> 
                </div>
            </div>
        </div>
        <div className={styles.yesNo}>
            <label htmlFor="">
                {
                    t("insurence.label")
                }
            </label>
            <div>
                <div>
                    <input onChange={handleChange} type="radio" required id="yes-insurence" name="insurence" value="yes-insurence"/>
                    <label htmlFor="yes-insurence">
                        {
                            t("insurence.options.yes")
                        }    
                    </label> 
                </div>
                <div>
                    <input onChange={handleChange} type="radio" required id="no-insurence" name="insurence" value="no-insurence" />
                    <label htmlFor="no-insurence">
                        {
                            t("insurence.options.no")
                        }    
                    </label> 
                </div>
            </div>
        </div>
        
        <div className={styles.parentDiv}>
            <div className={styles.salarySrc}>
                <label htmlFor="bank">
                    {
                        t("salarySrc.label")
                    }
                </label>
                <select onChange={handleChange} required name="salarySrc" id="bank">
                    <option value="">
                        {
                            t("salarySrc.placeholder")
                        }
                    </option>
                    <option value="alrajhi">البنك الأهلي التجاري</option>
                    <option value="samba">سامبا</option>
                    <option value="riyad">بنك الرياض</option>
                    <option value="albilad">البلاد</option>
                    <option value="alinma">الإنماء</option>
                    <option value="alfransi">البنك العربي الفرنسي</option>
                    <option value="saab">بنك السعودية البريطاني (ساب)</option>
                    <option value="aljazeera">بنك الجزيرة</option>
                    <option value="saudi_invest">بنك الاستثمار السعودي</option>
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
                        {
                            t("salary.label")
                        }
                </label>
                <input
                type="number"
                id="salary"
                name="salary"
                placeholder={t("salary.placeholder")}
                onChange={handleChange}
                required
                />
            </div>
        </div>

        {/* <div className={styles.parentDiv}> */}
            <div className={styles.yesNo}>
                <label htmlFor="">
                    {
                        t("obligations.label")
                    }
                </label>
                <div>
                    <div>
                        <input onChange={(e) => {setSelectedObl(e.target.value); handleChange(e)}} type="radio" required id="state-obl" name="obligations" value="state-obl" />
                        <label htmlFor="state-obl">
                            {
                                t("obligations.options.state")
                            }    
                        </label> 
                    </div>
                    <div>
                        <input onChange={(e) => {setSelectedObl(e.target.value); handleChange(e)}} type="radio" required id="personal-obl" name="obligations" value="personal-obl" />
                        <label htmlFor="personal-obl">
                            {
                                t("obligations.options.personal")
                            }    
                        </label> 
                    </div>
                    <div>
                        <input onChange={(e) => {setSelectedObl(e.target.value); handleChange(e)}} type="radio" required id="other-obl" name="obligations" value="other-obl" />
                        <label htmlFor="other-obl">
                            {
                                t("obligations.options.other")
                            }    
                        </label> 
                    </div>
                </div>
            </div>
            {
                selectedObl === "other-obl" && 
                    
                <div>
                    <label htmlFor="other-obligations">
                            {
                                t("otherObligations.label")
                            }
                    </label>
                    <input
                        type="text"
                        id="other-obligations"
                        name="other-obligations"
                        placeholder={`${t("otherObligations.placeholder")}`}
                        onChange={handleChange}
                        required
                    />
                </div>
            }
            <div className={styles.yesNo}>
                <label htmlFor="">
                    {
                        t("sema.label")
                    }
                </label>
                <div>
                    <div>
                        <input onChange={handleChange} type="radio" required id="yes-sema" name="sema" value="yes-sema" />
                        <label htmlFor="yes-sema">
                            {
                                t("sema.options.yes")
                            }    
                        </label> 
                    </div>
                    <div>
                        <input onChange={handleChange} type="radio" required id="no-sema" name="sema" value="no-sema" />
                        <label htmlFor="no-sema">
                            {
                                t("sema.options.no")
                            }    
                        </label> 
                    </div>
                </div>
            </div>
        {/* </div> */}
        <div>
            <label htmlFor="totalObl">
                    {
                        t("totalObl.label")
                    }
            </label>
            <input
            type="number"
            id="totalObl"
            name="totalObl"
            placeholder={`${t("totalObl.placeholder")}`}
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
        <div className={styles.whatsappLink}>
            <p>
                {
                    t("whatsappLink.p")
                }
            </p>
            <a href="https://wa.me/+966505638988" target='_blank'>
                {
                    t("whatsappLink.a")
                }
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    </form>
);
}