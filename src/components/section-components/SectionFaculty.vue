

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
            store
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="wrapper">
        <ImageText />
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