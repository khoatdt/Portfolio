import {
    angularIcon, aspNetIcon, cIcon,
    daisyUiIcon, kotlinIcon, postgresSQLIcon,
    reactIcon,
    svelteIcon, tailwindIcon, typeScriptIcon
} from "@/components/icon/custom-icon";
import { Project } from "@/type/type";
import {
    LuBell, LuBookCopy, LuBookImage, LuBookOpenText,
    LuCircleUser, LuCoins, LuCopy, LuLayoutDashboard,
    LuReceipt, LuShare2, LuUsers, LuZapOff
} from "react-icons/lu";


export const listProjects: Project[] = [
    {
        id: 1,
        title: "Yomikaze - Comics Website and Android Apps",
        role: ["Frontend Developer", "Design UX/UI "],
        description:
            "Yomikaze is a graduation thesis project, a comic website and app that allows users to discover, follow, and read comics. It includes features like AI-powered translation from Japanese to English, commenting, rating, sharing, and a personalized account system for managing favorites and reading progress, with dark mode and offline reading support on mobile.",


        thumbnail: "/YomikazeComics/HomePage.png",
        features: [
            {
                name: "User Management",
                description: "Enable admins to upgrade permissions, lock violating accounts, and unlock accounts centrally.",
                icon: LuUsers,
            },
            {
                name: "Content Management",
                description: "Centralized content management with features like add, delete, edit, search, and approval, ensuring quality and boosting efficiency.",
                icon: LuBookCopy,
            },
            {
                name: "Comic Viewer",
                description: "Enhances reading experience with easy navigation, customizable viewing modes, and immersive effects, making comics engaging and enjoyable.",
                icon: LuBookOpenText,
            },
            {
                name: "Reading Experience & Interaction",
                description: "Enhances reading with comic rankings, user comments, and a reporting feature for quality and community engagement.",
                icon: LuBookImage,
            },
            {
                name: "The Freemium Model",
                description: "System offering basic content for free, while charging for premium content.",
                icon: LuReceipt,
            },
            {
                name: "Coin Transaction",
                description: "Offers online payments, recharge options, transaction history, and withdrawal requests for user convenience.",
                icon: LuCoins,
            },
            {
                name: "Dashboard",
                description: "Provides specialized features for system administrators for data statistics and system control",
                icon: LuLayoutDashboard,
            },
            {
                name: "Professional Translation Tools",
                description: "System provides with efficient AI tools, helping users easily translate comics into various languages",
                icon: LuCopy,
            },
            {
                name: "Notification",
                description: "Provides notification features for updates that users are interested in.",
                icon: LuBell,
            },
            {
                name: "Personalize User Account",
                description: "Designed to provide a rich and personalized reading experience with features such as reading history, Personal Library, Custom Favorites, edit profile",
                icon: LuCircleUser,
            },
            {
                name: "Offline reading mode",
                description: "User can download chapters in case they do not have internet to view online",
                icon: LuZapOff,
            },
            {
                name: "Revenue Sharing",
                description: "Earn income through contributions or translations with a fair revenue-sharing system. Includes tools for tracking and reporting revenue performance",
                icon: LuShare2,
            },
        ],
        technical: [
            {
                name: "SvelteKit",
                icon: svelteIcon,
            },
            {
                name: "TypeScript",
                icon: typeScriptIcon,
            },
            {
                name: "Tailwind CSS",
                icon: tailwindIcon,
            },
            {
                name: "Daisy UI",
                icon: daisyUiIcon,
            },
            {
                name: "PostgreSQL",
                icon: postgresSQLIcon,
            },
            {
                name: "ASP.NET Core",
                icon: aspNetIcon,
            },
            {
                name: "C#",
                icon: cIcon,
            },
            {
                name: "Kotlin",
                icon: kotlinIcon,
            },
        ],

        screenshots: [
            {
                src: "/YomikazeComics/HomePage.png",
                id: 1
            },
            {
                src: "/YomikazeComics/ComicDetail.png",
                id: 2
            },
            {
                src: "/YomikazeComics/AdvancedSearch.png",
                id: 3
            },
            {
                src: "/YomikazeComics/LibraryPage.png",
                id: 4
            },
            {
                src: "/YomikazeComics/LoginPage.png",
                id: 5
            },
            {
                src: "/YomikazeComics/ShoppingCoins.png",
                id: 6
            },
            {
                src: "/YomikazeComics/CreateComic.png",
                id: 7
            },
            {
                src: "/YomikazeComics/DashboardPage.png",
                id: 8
            },
            {
                src: "/YomikazeComics/ComicReportManagement.png",
                id: 9
            },
            {
                src: "/YomikazeComics/RoleRequests.png",
                id: 10
            }
            ,
            {
                src: "/YomikazeComics/UserManagement.png",
                id: 11
            }
        ],

        objective: "The primary objective of this project is to develop a website and mobile applications to provide an online comic reading platform. Our goal is to provide an optimal comic reading experience by ensuring a smooth, user-friendly interface and modern reading functions. This platform will be available on smart devices and the web through the Yomikaze Android app available on Google Play.",
    },

    {
        id: 2,
        title: "Learning Management System - Frontend ",
        role: ["Frontend Developer"],
        description:
            "FPT Software Internship Project designed to facilitate the management, delivery, and tracking of educational content and training programs. It provides tools for course creation, assessment, communication, and administration ",

        thumbnail: "/LearningManagementSystem/TrainningProgramList.png",
        technical: [
            {
                name: "Angular",
                icon: angularIcon,
            },
            {
                name: "Ng-Prime",
                icon: angularIcon,
            },
        ],
        features: [],
        objective: "",
        screenshots: [
            {
                src: "/LearningManagementSystem/TrainningProgramList.png",
                id: 1
            },
            {
                src: "/LearningManagementSystem/UserManagement.png",
                id: 2
            }
        ]
    },
    {
        id: 3,
        title: "Khoa Portfolio",
        description:
            "Personal website for learning NextJS Process, including my information, projects, and contact information. I am excited to work with you on your next project!",

        thumbnail: "/Portfolio/PortfolioScreen.png",
        features: [],
        role: ["Frontend Developer", "Product Owner"],
        objective: "",
        technical: [
            {
                name: "React",
                icon: reactIcon
            }
        ],
        screenshots: [
            {
                src: "/Portfolio/PortfolioScreen.png",
                id: 1
            }
        ]
    },
    {
        id: 4,
        title: "Khoa Portfolio",
        description:
            "Personal website for learning NextJS Process, including my information, projects, and contact information. I am excited to work with you on your next project!",

        thumbnail: "/Portfolio/PortfolioScreen.png",
        features: [],
        role: ["Frontend Developer", "Product Owner"],
        objective: "",
        technical: [],
    },
];