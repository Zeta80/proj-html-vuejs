import { reactive } from "vue";

export const store = reactive({
    facultiesArray: [
        {
            img: "Gavel-v2.png",
            imgActive: "Gavel-Illustration-e1556884768193.png",
            title: "Law Faculty",
            text: "lorem lorem loore lomre lorem lorem",
            textButton: "Read More",
            active: true,

        },
        {
            img: "Coins-tabs-v2.png",
            imgActive: "Economy.png",
            title: "Economy",
            text: "lorem lorem loore lomre lorem lorem",
            textButton: "Read More",
            active: false,
        },
        {
            img: "Medicine-tabs-v2.png",
            imgActive: "Medicine.png",
            title: "Medicine",
            text: "lorem lorem loore lomre lorem lorem",
            textButton: "Read More",
            active: false,
        },
        {
            img: "Computer-tabs-v2.png",
            imgActive: "Computer-Science.png",
            title: "Computer Science",
            text: "lorem lorem loore lomre lorem lorem",
            textButton: "Read More",
            active: false,
        },
        {
            img: "Palette-tabs-v2.png",
            imgActive: "Graphic-Design.png",
            title: "Graphic Design",
            text: "lorem lorem loore lomre lorem lorem",
            textButton: "Read More",
            active: false,
        },

    ],
    upcomingEvents: [
        {
            title: "Coaching Session",
            date: "20 May 21:30 PM",
            text: "lorem lorem lorem lorem lorem lorem",
            descriptionButton: "Find More"
        },
        {
            title: "Coaching Session",
            date: "24 May 18.00 PM",
            text: "lorem lorem lorem lorem lorem lorem",
            descriptionButton: "Find More"
        },
        {
            title: "Coaching Session",
            date: "12 Feb 13.30 PM",
            text: "lorem lorem lorem lorem lorem lorem",
            descriptionButton: "Find More"
        },
    ],
    coursesArray: [
        {
            img: "Decisions-icon.png",
            title: "Make Better Decision",
            teacher: "James Colins",
            price: "$21.00",
            descriptionButton: "View Course"

        },
        {
            img: "Speaker-icon.png",
            title: "How to be a speaker",
            teacher: "James Colins",
            price: "Free",
            descriptionButton: "View Course"

        },
        {
            img: "Network-icon.png",
            title: "Network Introduction",
            teacher: "James Colins",
            price: "Free",
            descriptionButton: "View Course"

        },
        {
            img: "Brand-icon.png",
            title: "Brand Management",
            teacher: "James Colins",
            price: "Free",
            descriptionButton: "View Course"

        },



    ],

    partnersArray:
    {
        title: "Partners",
        text: "lorem lorem lorem lorem lorem lorem lorem",
        img: ["partner-1.png", "partner-2.png", "partner-3.png", "partner-4.png", "partner-5.png", "partner-6.png", "partner-7.png", "partner-8.png"]
    },

    footerLink: [
        {
            title: "Get Eduprime",
            links: [
                "request a website",
                "Browse Themes",
                "Payment options",
                "Support System",
                "Checkout",
                "Purchase Theme",
            ]
        },
        {
            title: "Networking",
            links: [
                "Purchase Theme",
                "Our Benefits",
                "Our Teams",
                "Our Services",
                "Other Products",
                "My account",
            ]
        },


    ],

    footerCategory: {

        categories: [
            "ECONOMY",
            "DESIGN",
            "CHOACHING",
            "BUSINESS",
            "MEDICINE",
            "LAW",
            "FITNESS",
        ],
    },

    navLink: [
        {
            title: "Home",
            links: [
                "lorem",
                "looreem",
                "lorrrem",

            ]
        },
        {
            title: "Courses",
            links: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",

            ]
        },
        {
            title: "About Us",

        },
        {
            title: "News",
            links: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",


            ]
        },
        {
            title: "Pages",
            links: [
                "lorem",
                "lorem",
                "lorem",

            ]
        },
        {
            title: "Contact",

        },
        {
            title: "Purchase",

        },


    ],








})