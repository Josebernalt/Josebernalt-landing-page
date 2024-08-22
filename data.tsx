import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jose-eliud-bernal-tambo-831441252",
    },
    {
        id: 2,
        logo: <Speech size={30} strokeWidth={1} />,
        src: "https://orcid.org/0009-0000-6565-0221",
    },
    {
        id: 3,
        logo: <CodeSquare size={30} strokeWidth={1} />,
        src: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001697397",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Full Stack Developer",
        subtitle: "Outlet del Llano",
        description: "Creation of a computer application for the management of expenses and income, sales, prepaid" + 
        " credit, product inventory and generation of reports in PDF format. Implementation of functionalities"+
        " on both the frontend and backend, ensuring a fluid and efficient user experience.",
        date: "Apr 2023",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        subtitle: "Outlet del Llano",
        description: "Development of Java skills, with knowledge of data structures and algorithms. Implementation "+
        "of functionalities to generate detailed reports in PDF format using the iText library, providing key information"+
        " for decision making.",
        date: "Nov 2023",
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 1,
        text: "satisfied customers",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 2,
        text: "finalized projects",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "Awards/Certificates",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Development of a strong and coherent brand identity, including logo design, colors and visual elements",
    },
    {
        icon: <Pencil />,
        title: "Web design",
        description: "Creative and professional design of intuitive and attractive web interfaces, focused on user experience",
    },
    {
        icon: <Computer />,
        title: "Web development",
        description: "Design and development of custom websites, adapted to your needs",
    },
    {
        icon: <Book />,
        title: "Desktop Application",
        description: "Creative and professional design of interfaces for intuitive and attractive computing applications",
    },
    {
        icon: <Rocket />,
        title: "Database",
        description: "Database management, including the creation, administration and optimization of database systems.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web development",
        image: "/Proyecto-2.png",
        urlGithub: "https://github.com/Josebernalt/Intecsis.git",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desktop development",
        image: "/Proyecto-4.png",
        urlGithub: "https://github.com/Josebernalt/Outlet.git",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Luz Marina Leguizamón",
        description:
            "Amazing platform! The testimonials here are genuine and have helped me make informed decisions. Highly recommended!",
        imageUrl: "/profile-1.jpg",
    }
];