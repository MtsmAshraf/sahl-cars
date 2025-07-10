import { StaticImageData } from "next/image";

import car0 from "../../../public/images/imgi_14_800_677fd5ca4e432.png";
import car1 from "../../../public/images/imgi_38_1170x395-gle-front-blackk-removebg-preview.png";
import car2 from "../../../public/images/imgi_40_black-1170x395.png";
import car3 from "../../../public/images/imgi_6_Black.png";
import car4 from "../../../public/images/imgi_79_thumbnail-up_caf7818161887621de661f25068031f8.png";

export type Car = {
    id: string;
    name: string;
    src: StaticImageData
}

const allCars : Car[] = [
    { 
        id: "0", 
        name: "Hyundai Elantra 2025",
        src: car0
    },
    { 
        id: "1", 
        name: "Toyota Camry 2025",
        src: car1
    },
    { 
        id: "2", 
        name: "Toyota Corolla 2025",
        src: car2
    },
    { 
        id: "3", 
        name: "Toyota Yaris 2024",
        src: car3
    },
    { 
        id: "4", 
        name: "Nissan Sunny 2025",
        src: car4
    }
]

export default allCars;