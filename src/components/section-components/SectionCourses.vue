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
            store
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="container">

        <div class="wrapper">
            <div class="row">
                <div class="col" v-for="(item, index) in store.coursesArray" :key="index">
                    <GenericCard :item="item" />
                </div>
            </div>



            <ImageText />

        </div>
    </div>


</template>

<style lang="scss" scoped>

</style>