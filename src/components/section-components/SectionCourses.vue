<script>
import { store } from "../../store";
import ImageText from '../sub-components/ImageText.vue';
import GenericCard from "../sub-components/GenericCard.vue";
export default {
    name: "SectionCourses",
    components: {
        ImageText,
        GenericCard,

    },
    data() {
        return {
            store,
            description: [
                {
                    descriptionImg: 'Exam-Illustration.png',
                    descriptionTitle: 'The most efficent examination method',
                    descriptionText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam totam deserunt labore ipsa fugit nihil vitae ex tenetur rerum aspernatur voluptates autem sit quam animi fuga nemo maiores eveniet suscipit voluptatum atque sint excepturi, maxime aperiam. Assumenda tenetur dolorem accusamus officia? Quod excepturi laudantium consequatur nulla quo reprehenderit accusantium distinctio?',
                    descriptionButton: 'Discover the Method',
                    imgFirst: false,
                    imgSpan: 'Exam-icon.png'

                },
                {
                    descriptionImg: 'Girl-Illustration.png',
                    descriptionTitle: 'Variable fees for international students',
                    descriptionText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam totam deserunt labore ipsa fugit nihil vitae ex tenetur rerum aspernatur voluptates autem sit quam animi fuga nemo maiores eveniet suscipit voluptatum atque sint excepturi, maxime aperiam. Assumenda tenetur dolorem accusamus officia? Quod excepturi laudantium consequatur nulla quo reprehenderit accusantium distinctio?',
                    descriptionButton: 'List of Fees',
                    imgFirst: true,
                    imgSpan: 'Exam-icon-1.png'
                },
            ],

        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="container">

        <div class="wrapper">
            <div class="title">
                <h3>Latest Courses</h3>
            </div>
            <div class="row row-cols-2 row-cols-md-4 margin_bot">
                <div class="col" v-for="(item, index) in store.coursesArray" :key="index">
                    <GenericCard :item="item" :img="`../../assets/assets/edu/img/${{ item }} `" />

                </div>
            </div>



            <ImageText v-for="(item, index) in description" :key="index" :item="item" />

        </div>
    </div>


</template>

<style lang="scss" scoped>
.wrapper {
    width: 90%;
    margin: 0 auto;

    .title {
        margin: 5rem 0 3rem 0;

        h3 {
            font-weight: bold;
            font-size: 35px;
        }
    }
}

.margin_bot {
    margin-bottom: 3rem;
}
</style>