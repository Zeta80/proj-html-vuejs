

<script>
import { store } from "../../store";
import ImageText from '../sub-components/ImageText.vue';
import CardsFaculties from '../sub-components/CardsFaculties.vue';
export default {
    name: "SectionFaculty",
    components: {
        ImageText,
        CardsFaculties
    },
    data() {
        return {
            store,
            description: {

                descriptionImg: 'Graduation-Illustration.png',
                descriptionTitle: 'Thousand of courses for any type of student',
                descriptionText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam totam deserunt labore ipsa fugit nihil vitae ex tenetur rerum aspernatur voluptates autem sit quam animi fuga nemo maiores eveniet suscipit voluptatum atque sint excepturi, maxime aperiam. Assumenda tenetur dolorem accusamus officia? Quod excepturi laudantium consequatur nulla quo reprehenderit accusantium distinctio?',
                descriptionButton: 'Browse through courses',
                imgFirst: false,
                buttonYellow: true,
                imgSpan: 'Books-icon.png'


            }
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="wrapper ">
        <div class="wave">
            <img src="../../assets/assets/edu/img/home-background.png" alt="">
        </div>
        <ImageText :item="description" />
        <div class="faculties">

            <h3>Faculties available at Eduprime</h3>
            <div class="text">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic facere dolor, possimus modi
                    voluptatum!</p>
            </div>

            <CardsFaculties />


        </div>

    </div>


</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wrapper {
    position: relative;

    .wave {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }

    .faculties {
        margin-top: 2em;
        text-align: center;

        .text {
            width: 40%;
            margin: 0 auto;
            margin-bottom: 2rem;

            p {
                font-size: 15px;
                color: $text-color-mgray;
            }
        }

        h3 {
            font-size: 45px;
            font-weight: bold;
            margin-bottom: 1rem;
        }
    }

}
</style>