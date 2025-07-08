
export type Product = {
    id: string,
    brandName: string,
    value: string,
    models?: string[]
}

const carBrands : Product[] = [
    {
        id: "1",
        brandName: "تويوتا (Toyota)",
        value: "Toyota",
        models:  [
            "يارس (Yaris)",
            "كورولا (Corolla)",
            "كامري (Camry)",
            "هايلكس (Hilux)",
            "فورتشنر (Fortuner)",
            "برادو (Prado)",
            "لاند كروزر (Land Cruiser)",
            "راف فور (RAV4)",
            "رايز (Raize)",
            "إنوفا (Innova)"
        ]
    },
    {
        id: "2",
        brandName: "نيسان (Nissan)",
        value: "Nissan",
        models: [
            "صني (Sunny)",
            "ألتيما (Altima)",
            "ماكسيما (Maxima)",
            "باترول (Patrol)",
            "إكس تريل (X-Trail)",
            "كيكس (Kicks)",
            "بيك أب نافارا (Navara)"
        ]
    },
    {
        id: "3",
        brandName: "هونداي (Hyundai)",
        value: "Hyundai",
        models: [
            "أكسنت (Accent)",
            "إلنترا (Elantra)",
            "سوناتا (Sonata)",
            "توسان (Tucson)",
            "سانتافي (Santa Fe)",
            "كريتا (Creta)",
            "باليسيد (Palisade)"
        ]
    },
    {
        id: "4",
        brandName: "كيا (Kia)",
        value: "Kia",
        models: [
            "بيكانتو (Picanto)",
            "ريو (Rio)",
            "سيراتو (Cerato)",
            "سورينتو (Sorento)",
            "سبورتاج (Sportage)",
            "كارنفال (Carnival)",
            "سونيت (Sonet)"
        ]
    },
    {
        id: "5",
        brandName: "فورد (Ford)",
        value: "Ford",
        models: [
            "سبارك (Spark)",
            "أفيو (Aveo)",
            "ماليبو (Malibu)",
            "تاهو (Tahoe)",
            "سوبربان (Suburban)",
            "سيلفرادو (Silverado)",
            "ترافيرس (Traverse)"
        ]
    },
    {
        id: "6",
        brandName: "جيلي (Geely)",
        value: "Geely",
        models: [
            "كول راي (Coolray)",
            "بين راي (Binray)",
            "توغيلا (Tugella)",
            "أزكارا (Azkarra)",
            "إيمجراند (Emgrand)"
        ]
    },
    {
        id: "7",
        brandName: "شانجان (Changan)",
        value: "Changan",
        models: [
            "يدو (Eado)",
            "ألسفن (Alsvin)",
            "CS35 Plus",
            "CS75 Plus",
            "CS85"
        ]
    },
    {
        id: "8",
        brandName: "إم جي (MG)",
        value: "MG",
        models: [
            "MG5",
            "MG6",
            "MG ZS",
            "MG HS",
            "RX5",
            "RX8"
        ]
    },
    {
        id: "9",
        brandName: "بيجو (Peugeot)",
        value: "Peugeot",
        models: [
            "208",
            "301", 
            "3008",
            "5008"
        ]
    },
    {
        id: "10",
        brandName: "مرسيدس (Mercedes-Benz)",
        value: "Mercedes-Benz",
        models: [
            "A-Class",
            "C-Class", 
            "E-Class",
            "S-Class",
            "GLE / GLS",
            "جي كلاس (G-Class)"
        ]
    },
    {
        id: "11",
        brandName: "بي إم دبليو (BMW)",
        value: "BMW",
        models: [
            "الفئة الثالثة (3 Series)",
            "الفئة الخامسة (5 Series)",
            "X1",
            "X3",
            "X5",
            "X6",
            "X7"
        ]
    },
    {
        id: "12",
        brandName: "أخرى",
        value: "other"
    }
]

export default carBrands;