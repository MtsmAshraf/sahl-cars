import { StaticImageData } from "next/image";

import car0 from "../../../public/images/imgi_14_800_677fd5ca4e432.png";
import car1 from "../../../public/images/imgi_38_1170x395-gle-front-blackk-removebg-preview.png";
import car2 from "../../../public/images/imgi_40_black-1170x395.png";
import car3 from "../../../public/images/imgi_6_Black.png";
import car4 from "../../../public/images/imgi_79_thumbnail-up_caf7818161887621de661f25068031f8.png";

import toyotaLogo from "../../../public/images/imgi_10_5ec3e1ee58550c0004427739.png"
import hyundaiLogo from "../../../public/images/hyundailogo.png"
import nissanLogo from "../../../public/images/imgi_3_nissan-6-logo-svg-vector.svg"

export type Car = {
    id: string;
    name: string;
    carYear: string;
    price: string;
    src: StaticImageData,
    carLogo: StaticImageData,
}

const allCars : Car[] = [
    { 
        id: "0", 
        name: "Hyundai Elantra",
        carYear: "2025",
        price: "82,000",
        src: car0,
        carLogo: hyundaiLogo
    },
    { 
        id: "1", 
        name: "Toyota Camry",
        carYear: "2025",
        price: "105,340",
        src: car1,
        carLogo: toyotaLogo
    },
    { 
        id: "2", 
        name: "Toyota Corolla",
        carYear: "2025",
        price: "78,660",
        src: car2,
        carLogo: toyotaLogo
    },
    { 
        id: "3", 
        name: "Toyota Yaris",
        carYear: "2024",
        price: "63,135",
        src: car3,
        carLogo: toyotaLogo
    },
    { 
        id: "4", 
        name: "Nissan Sunny",
        carYear: "2025",
        price: "66,000",
        src: car4,
        carLogo: nissanLogo
    }
]

export default allCars;