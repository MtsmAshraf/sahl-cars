"use client"
// components/WhatsAppForm.js
import { useState } from 'react';
import styles from "./whatsapp-form.module.css"
import { useTranslations } from 'next-intl';
import carBrands, { CarBrand } from './carBrands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Bank, banks } from './banks';
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
    otherCarBrand: '',
    work: '',
    insurence: '',
    salarySrc: '',
    salary: '',
    obligationsState: '',
    obligationsPersonal: '',
    obligationsOther: '',
    sema: '',
    totalObl: '',
    message: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: value
    }));
};

const [allFilled, setAllfilled] = useState(false)

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if(
        !formData.name ||
        !formData.phone ||
        !formData.email ||
        !formData.dateOfBirth ||
        !formData.gender ||
        !formData.carBrand ||
        !formData.carModel ||
        !formData.otherCarBrand ||
        !formData.work ||
        !formData.insurence ||
        !formData.salarySrc ||
        !formData.salary ||
        !formData.obligationsState ||
        !formData.obligationsState ||
        !formData.obligationsPersonal ||
        !formData.obligationsOther ||
        !formData.sema ||
        !formData.totalObl
    ){
        setAllfilled(true)
    }else(
        setAllfilled(false)
    )

    e.preventDefault();
    
    // Format the message
    const whatsappMessage = 
    lo === "ar" ? 
    `حجز جديد من موقع سهل كارز:%0A%0A` +
    `الاسم: ${formData.name}%0A` +
    `الجوال: ${formData.phone}%0A` +
    `البريد الإلكتروني: ${formData.email}%0A` +
    `تاريخ الميلاد: ${formData.dateOfBirth}%0A` +
    `الجنس: ${formData.gender === "male" ? "ذكر" : "أنثى"}%0A` +
    `${selectedBrand !== "other" ? `ماركة السيارة: ${formData.carBrand} %0A` : ""} `+
    `${selectedBrand !== "other" ? `موديل السيارة: ${formData.carModel} %0A` : ""} `+
    `${selectedBrand === "other" ? `موديل السيارة: ${formData.otherCarBrand} %0A` : ""} `+
    `جهة العمل: ${formData.work === "gov-work" ?  "حكومي" : formData.work === "private-work" ? "خاص" : "ليس حكوميا وليس خاصا"}%0A` +
    `التأمينات الإجتماعبة: ${formData.insurence === "yes-insurence" ? "مسجل" : "غير مسجل"}%0A` +
    `مصدر الراتب: ${formData.salarySrc} bank%0A` +
    `الراتب: ${formData.salary} ريال%0A` +
    `الالتزامات: ${formData.obligationsState !== "" && selectedStateObl ? "تمويل عقاري" : ""} ${formData.obligationsPersonal !== "" && selectedPersonalObl? "تمويل شخصي" : ""} ${formData.obligationsOther && selectedOtherObl ? formData.obligationsOther : ""}%0A` +
    `التعثر في سمة: ${formData.sema === "yes-sema" ? "يوجد" : "لا يوجد"}%0A` +
    `إجمالي الالتزامات الشهرية: ${formData.totalObl} ريال%0A` +
    `${formData.message !== "" ? `الرسالة: ${formData.message}` : ""}`
    :
    lo === "en" ?
    `New booking from Sahl Cars website:%0A%0A` +
    `Name: ${formData.name}%0A` +
    `Phone: ${formData.phone}%0A` +
    `Email: ${formData.email}%0A` +
    `Date of Birth: ${formData.dateOfBirth}%0A` +
    `Gender: ${formData.gender === "male" ? "Male" : "Female"}%0A` +
    `${selectedBrand !== "other" ? `Car Brand: ${formData.carBrand} %0A` : ""}` +
    `${selectedBrand !== "other" ? `Car Model: ${formData.carModel} %0A` : ""}` +
    `${selectedBrand === "other" ? `Car Model: ${formData.otherCarBrand} %0A` : ""}` +
    `Employer: ${formData.work === "gov-work" ? "Government" : formData.work === "private-work" ? "Private" : "Neither"}%0A` +
    `Social Insurance: ${formData.insurence === "yes-insurence" ? "Registered" : "Not Registered"}%0A` +
    `Salary Source: ${formData.salarySrc} bank%0A` +
    `Salary: ${formData.salary} SAR%0A` +
    `Obligations: ${formData.obligationsState !== "" && selectedStateObl ? "Mortgage" : ""} ${formData.obligationsPersonal !== "" && selectedPersonalObl? "Personal Loan" : ""} ${formData.obligationsOther && selectedOtherObl ? formData.obligationsOther : ""}%0A` +
    `Credit Issues: ${formData.sema === "yes-sema" ? "Yes" : "No"}%0A` +
    `Total Monthly Obligations: ${formData.totalObl} SAR%0A` +
    `${formData.message !== "" ? `Message: ${formData.message}` : ""}`
    :
    lo === "ur" ? 
    `سہل کارز ویب سائٹ سے نیا بکنگ:%0A%0A` +
    `نام: ${formData.name}%0A` +
    `فون: ${formData.phone}%0A` +
    `ای میل: ${formData.email}%0A` +
    `تاریخ پیدائش: ${formData.dateOfBirth}%0A` +
    `جنس: ${formData.gender === "male" ? "مرد" : "عورت"}%0A` +
    `${selectedBrand !== "other" ? `گاڑی کی برانڈ: ${formData.carBrand} %0A` : ""}` +
    `${selectedBrand !== "other" ? `گاڑی کا ماڈل: ${formData.carModel} %0A` : ""}` +
    `${selectedBrand === "other" ? `گاڑی کا ماڈل: ${formData.otherCarBrand} %0A` : ""}` +
    `کام کی جگہ: ${formData.work === "gov-work" ? "سرکاری" : formData.work === "private-work" ? "پرائیویٹ" : "نہ سرکاری نہ پرائیویٹ"}%0A` +
    `سوشل انشورنس: ${formData.insurence === "yes-insurence" ? "رجسٹرڈ" : "غیر رجسٹرڈ"}%0A` +
    `تنخواہ کا ذریعہ: ${formData.salarySrc} bank%0A` +
    `تنخواہ: ${formData.salary} ریال%0A` +
    `قرضے: ${formData.obligationsState !== "" && selectedStateObl ? "گھر کی فنانسنگ" : ""} ${formData.obligationsPersonal !== "" && selectedPersonalObl? "ذاتی قرضہ" : ""} ${formData.obligationsOther && selectedOtherObl ? formData.obligationsOther : ""}%0A` +
    `سمہ میں تعطل: ${formData.sema === "yes-sema" ? "ہاں" : "نہیں"}%0A` +
    `ماہانہ کل قرضے: ${formData.totalObl} ریال%0A` +
    `${formData.message !== "" ? `پیغام: ${formData.message}` : ""}`
    : 
    null;
    
    // Replace with your client's WhatsApp number (include country code, remove +, 0, or spaces)
    const phoneNumber = '+966550798046'; 

    // Open WhatsApp with the pre-filled message
    // console.log(whatsappMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
};

const [selectedBrand, setSelectedBrand] = useState("")
// const [selectedObl, setSelectedObl] = useState("")
const [selectedStateObl, setSelectedStateObl] = useState(false)
const [selectedPersonalObl, setSelectedPersonalObl] = useState(false)
const [selectedOtherObl, setSelectedOtherObl] = useState(false)

// console.log(selectedObl)
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
                                            <option key={index} value={model}>
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
                    <input name="otherCarBrand" onChange={handleChange} type="text" placeholder={t("carModel.customPlaceholder")} required/>
                    :
                    selectedBrand === "" ?
                    <p style={{ border: "1px solid var(--text-color)", padding: "2px 20px", borderRadius: "10px", color: "#888", backgroundColor: "#eee" }}>اختر نوع السيارة أولا</p>
                    // <input name='other-brand' type="text" placeholder={t("carModel.disabledPlaceholder")} disabled style={{ backgroundColor: "#ccc" }}/> 
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
                    {
                        banks.map((bank: Bank) => {
                            return(
                                <option value={bank.value} key={bank.id}>
                                    {bank.name}
                                </option>
                            )
                        })
                    }
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
                        <input onChange={(e) => {setSelectedStateObl(!selectedStateObl); console.log(selectedStateObl); handleChange(e)}} type="checkbox" id="state-obl" name="obligationsState" value="state-obl" />
                        <label htmlFor="state-obl">
                            {
                                t("obligations.options.state")
                            }    
                        </label> 
                    </div>
                    <div>
                        <input onChange={(e) => {setSelectedPersonalObl(!selectedPersonalObl); console.log(selectedPersonalObl); handleChange(e)}} type="checkbox" id="personal-obl" name="obligationsPersonal" value="personal-obl" />
                        <label htmlFor="personal-obl">
                            {
                                t("obligations.options.personal")
                            }    
                        </label> 
                    </div>
                    <div>
                        <input onChange={(e) => {setSelectedOtherObl(!selectedOtherObl); handleChange(e)}} type="checkbox" id="other-obl" name="obligations" value="other-obl" />
                        <label htmlFor="other-obl">
                            {
                                t("obligations.options.other")
                            }    
                        </label> 
                    </div>
                </div>
            </div>
            {
                selectedOtherObl && 
                    
                <div>
                    <label htmlFor="other-obligations">
                            {
                                t("otherObligations.label")
                            }
                    </label>
                    <input
                        type="text"
                        id="other-obligations"
                        name="obligationsOther"
                        placeholder={`${t("otherObligations.placeholder")}`}
                        onChange={handleChange}
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
        {
            allFilled === false && 
            <p style={{ color: "red", textAlign: "center", fontWeight: 'bold' }}>
                {
                    t("requiredMsg")
                }
            </p>
        }
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
            <a href="https://wa.me/+966550798046" target='_blank'>
                {
                    t("whatsappLink.a")
                }
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    </form>
);
}