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







})