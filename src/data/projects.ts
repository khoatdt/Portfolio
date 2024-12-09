import {
    angularIcon, aspNetIcon, cIcon,
    daisyUiIcon, kotlinIcon, postgresSQLIcon,
    svelteIcon, tailwindIcon, typeScriptIcon
} from "@/components/icon/custom-icon";
import { Project } from "@/type/type";


export const listProjects: Project[] = [
    {
        id: 1,
        title: "Yomikaze - Comics Website",
        role: ["Frontend Developer", "Design UX/UI "],
        description:
            "Yomikaze is a graduation thesis project, a comic website and app that allows users to discover, follow, and read comics. It includes features like AI-powered translation from Japanese to English, commenting, rating, sharing, and a personalized account system for managing favorites and reading progress, with dark mode and offline reading support on mobile.",


        thumbnail: "/YomikazeComics/S2- Comic Detail.png",
        features: [
            {
                name: "User Management",
                description: "Provide system administrators with the ability to upgrade permissions for another account. The system can promptly manage and handle the locking of violating accounts centrally , unlocking an account. ",
                icon: "",
            },
            {
                name: "Content Management",
                description: "An effective, centralized, and convenient content management solution through a website with powerful features such as adding, deleting, editing, and easily searching for content. It stands out with flexible management features, smart search, and content approval process. This product ensures content quality and saves time, enhancing work efficiency.",
                icon: "",
            },
            {
                name: "Comic Viewer",
                description: "Enhances reading experience with easy navigation, customizable viewing modes, and immersive effects, making comics engaging and enjoyable.",
                icon: "",
            },
            {
                name: "Reading Experience & Interaction",
                description: "Enhances reading with comic rankings, user comments, and a reporting feature for quality and community engagement.",
                icon: "",
            },
            {
                name: "The Freemium Model",
                description: "System offering basic content for free, while charging for premium content.",
                icon: "",
            },
            {
                name: "Coin Transaction",
                description: "Offers online payments, recharge options, transaction history, and withdrawal requests for user convenience.",
                icon: "",
            },
            {
                name: "Dashboard",
                description: "Provides specialized features for system administrators for data statistics and system control",
                icon: "",
            },
            {
                name: "Professional Translation Tools",
                description: "System provides with efficient AI tools, helping users easily translate comics into various languages",
                icon: "",
            },
            {
                name: "Notification",
                description: "Provides notification features for updates that users are interested in.",
                icon: "",
            },
            {
                name: "Personalize User Account",
                description: "Designed to provide a rich and personalized reading experience with features such as reading history, Personal Library, Custom Favorites, edit profile",
                icon: "",
            },
            {
                name: "Offline reading mode",
                description: "User can download chapters in case they do not have internet to view online",
                icon: "",
            },
            {
                name: "Revenue Sharing",
                description: "Earn income through contributions or translations with a fair revenue-sharing system. Includes tools for tracking and reporting revenue performance",
                icon: "",
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

        objective: "",
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
    },
    {
        id: 3,
        title: "Khoa Portfolio",
        description:
            "Personal website for learning NextJS Process, including my information, projects, and contact information. I am excited to work with you on your next project!",

        thumbnail: "/Portfolio/PortfolioScreen.png",
        features: [],
        role: ["Frontend Developer, Product Owner"],
        objective: "",
        technical: [],
    },
];