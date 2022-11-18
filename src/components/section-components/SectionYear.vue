<script>
import { store } from "../../store";
import GenericCard from "../sub-components/GenericCard.vue";
import UniversityYearDate from "../sub-components/UniversityYearDate.vue";

export default {
    name: "SectionYear",
    components: {
        GenericCard,
        UniversityYearDate
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
    <div class="wave wave-top">
        <img src="../../assets/assets/edu/svg/svg-0.svg" alt="">
    </div>
    <div class="wrapper-background">
        <UniversityYearDate />
        <GenericCard />
    </div>
    <div class="wave wave-bot">
        <img src="../../assets/assets/edu/svg/svg-1.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wrapper-background {
    background-color: $fill-color-red;
    color: $text-color-white;
    padding: 2rem;

    .wave {


        &-top {
            img {

                width: 100%;
            }

            transform: translateY(30px);

        }
    }

}
</style>