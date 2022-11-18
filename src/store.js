import { reactive } from "vue";

export const store = reactive({
    faculties: [
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

    ]






})