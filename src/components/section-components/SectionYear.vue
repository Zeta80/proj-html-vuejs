<script>
import { store } from "../../store";
import GenericCard from "../sub-components/GenericCard.vue";

export default {
    name: "SectionYear",
    components: {
        GenericCard
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
        <div class="title text-center">
            <h3>University Year</h3>
        </div>
        <div class="container">
            <div class="d-flex justify-content-end">

                <div class="demo_class card_year">
                    <h4>Demo classes</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil aspernatur molestias nobis
                        consequatur!</p>
                </div>
                <div class="graduation_day card_year ">
                    <h4>Graduation Day</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil aspernatur molestias nobis
                        consequatur!</p>
                </div>
            </div>
            <div class="uni_year">
                <img src="../../assets/assets/edu/img/Timeline-Item.png" alt="">
            </div>
            <div class="Orientation card_year">
                <h4>Demo classes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil aspernatur molestias nobis
                    consequatur!</p>
            </div>
            <div class="Evaluation card_year">
                <h4>Graduation Day</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil aspernatur molestias nobis
                    consequatur!</p>
            </div>
        </div>

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

    .uni_year {
        width: 90%;
        margin: 0.8rem auto;
        ;
    }

    .card_year {
        width: 40%;
        text-align: center;
        display: inline-block;
    }

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