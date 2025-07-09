import { StaticImageData } from "next/image";

import bank0 from "../../../public/images/logos/Riyad-Bank-Logo.svg";
import bank1 from "../../../public/images/logos/Sabb-01.svg";
import bank2 from "../../../public/images/logos/Samba-01.svg";
import bank3 from "../../../public/images/logos/Saudi-Hollandi-Bank-01.svg";
import bank4 from "../../../public/images/logos/شعار-البنك-السعودي-للاستثمار – SVG.svg";
import bank5 from "../../../public/images/logos/شعار-البنك-العربي-الوطني-الجديد.svg";
import bank6 from "../../../public/images/logos/Gulf-International-Bank-2.svg";
import bank7 from "../../../public/images/logos/NBD-Emirate-01.svg";
import bank8 from "../../../public/images/logos/imgi_3_400_63a7e6f628e3d.png";
import bank9 from "../../../public/images/logos/imgi_4_400_63a7e758c710d.jpg";
import bank10 from "../../../public/images/logos/imgi_6_400_63a7e59628a09.png";
import bank11 from "../../../public/images/logos/imgi_7_400_63a7e5bd5836e.png";
import bank12 from "../../../public/images/logos/imgi_8_400_63a7e62d9e4de.png";
import bank13 from "../../../public/images/logos/imgi_9_400_filter_nobg_63a7e64c29e84.png";
import bank14 from "../../../public/images/logos/imgi_10_400_63a7e66de4d3d.png";
import bank15 from "../../../public/images/logos/imgi_53_بنك-التعمير-والإسكان.png";

export type Bank = {
    id: string;
    src: StaticImageData
}

const allBanks : Bank[] = [
     { 
        id: "0", 
        src: bank0
    },
    { 
        id: "1", 
        src: bank1
    },
    { 
        id: "2", 
        src: bank2
    },
    { 
        id: "3", 
        src: bank3
    },
    { 
        id: "4", 
        src: bank4
    },
    { 
        id: "5", 
        src: bank5
    },
    { 
        id: "6", 
        src: bank6
    },
    { 
        id: "7", 
        src: bank7
    },
    { 
        id: "8", 
        src: bank8
    },
    { 
        id: "9", 
        src: bank9
    },
    { 
        id: "10", 
        src: bank10
    },
    { 
        id: "11", 
        src: bank11
    },
    { 
        id: "12", 
        src: bank12
    },
    { 
        id: "13", 
        src: bank13
    },
    { 
        id: "14", 
        src: bank14
    },
    { 
        id: "15", 
        src: bank15
    } 
]

export default allBanks;