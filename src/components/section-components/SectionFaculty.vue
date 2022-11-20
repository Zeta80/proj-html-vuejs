

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

                descriptionImg: 'Exam-Illustration.png',
                descriptionTitle: 'The most efficent examination method',
                descriptionText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam totam deserunt labore ipsa fugit nihil vitae ex tenetur rerum aspernatur voluptates autem sit quam animi fuga nemo maiores eveniet suscipit voluptatum atque sint excepturi, maxime aperiam. Assumenda tenetur dolorem accusamus officia? Quod excepturi laudantium consequatur nulla quo reprehenderit accusantium distinctio?',
                descriptionButton: 'Discover the Method',
                imgFirst: false

            }
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="wrapper">
        <ImageText :item="description" />
        <div class="faculties">

            <h3>Faculties available at Eduprime</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic facere dolor, possimus modi
                voluptatum!</p>

            <CardsFaculties />


        </div>

    </div>


</template>

<style lang="scss" scoped>

</style>