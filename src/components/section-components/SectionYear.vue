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
    <div class="wrapper-background padding">

        <UniversityYearDate />

        <div class="container">
            <div class="title-events ">
                <span><img src="../../assets/assets/edu/img/upcoming-events-calendar-icon.png" alt=""></span>
                <h3 class="text-center">Upcoming Events </h3>
            </div>
            <div class="row">
                <div class="col" v-for="(item, index) in store.upcomingEvents" :key="index">
                    <GenericCard :item="item" />
                </div>
            </div>
        </div>

        <div class="buttons">
            <button class="btn btn-primary my_btn ">Lorem</button>
        </div>
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

    &.padding {
        padding: 7rem;
    }



    .title-events {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 100px 0 50px 0;

        h3 {

            font-size: 35px;
        }

        span {
            margin-bottom: 10px;

            img {
                width: 50px;
            }
        }




    }

    .buttons {
        display: flex;
        justify-content: center;

        .my_btn {
            background-color: $border-color-yellow ;
            padding: 0.9rem 2rem;

        }

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