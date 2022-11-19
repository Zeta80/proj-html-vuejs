import { reactive } from "vue";

export const store = reactive({
    facultiesArray: [
        {
            img: "Gavel-v2.png",
            imgActive: "Gavel-Illustration-e1556884768193.png",
            title: "Law Faculty",
            text: "lorem lorem loore lomre lorem lorem",
            active: true,

        },
        {
            img: "Coins-tabs-v2.png",
            imgActive: "Economy.png",
            title: "Economy",
            text: "lorem lorem loore lomre lorem lorem",
            active: false,
        },
        {
            img: "Medicine-tabs-v2.png",
            imgActive: "Medicine.png",
            title: "Medicine",
            text: "lorem lorem loore lomre lorem lorem",
            active: false,
        },
        {
            img: "Computer-tabs-v2.png",
            imgActive: "Computer-Science.png",
            title: "Computer Science",
            text: "lorem lorem loore lomre lorem lorem",
            active: false,
        },
        {
            img: "Palette-tabs-v2.png",
            imgActive: "Graphic-Design.png",
            title: "Graphic Design",
            text: "lorem lorem loore lomre lorem lorem",
            active: false,
        },

    ],
    upcomingEvents: [
        {
            title: "Coaching Session",
            date: "20 May 21:30 PM",
            text: "lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "Coaching Session",
            date: "20 May 21:30 PM",
            text: "lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "Coaching Session",
            date: "20 May 21:30 PM",
            text: "lorem lorem lorem lorem lorem lorem"
        },
    ],
    coursesArray: [
        {
            img: "Decisions-icon.png",
            title: "Make Better Decision",
            teacher: "James Colins",
            price: "$21.00",

        },
        {
            img: "Speaker-icon.png",
            title: "How to be a speaker",
            teacher: "James Colins",
            price: "Free",

        },
        {
            img: "Network-icon.png",
            title: "Network Introduction",
            teacher: "James Colins",
            price: "Free",

        },
        {
            img: "Brand-icon.png",
            title: "Brand Management",
            teacher: "James Colins",
            price: "Free",

        },



    ],







})