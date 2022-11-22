<script>
import { store } from "../../store";


export default {
    name: "SectionPartners",
    components: {

    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getImgUrl(index) {
            return new URL(`../../assets/assets/edu/img/${this.store.partnersArray.img[index]}`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="wave-bg">

        <div class="container ">
            <div class="wrapper">

                <div class="text">
                    <h3>{{ store.partnersArray.title }}</h3>
                    <p>{{ store.partnersArray.text }}</p>
                </div>
                <div class="d-flex justify-content-around">
                    <div class=" my_partners " v-for="(partners, index) in store.partnersArray.img">
                        <div class="my_margin">
                            <img :src="getImgUrl(index)" alt="">
                        </div>
                    </div>
                </div>
                <div class="wave">
                    <img src="../../assets/assets/edu/img/background-wave3.png" alt="">
                </div>
            </div>

        </div>
    </div>


</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wave-bg {
    position: relative;

    .wave {
        transform: rotateY('90');
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;

        img {
            filter: invert(3%);
            transform: rotate(3.142rad);

        }

    }
}

.wrapper {
    width: 90%;
    margin: 0 auto;
    min-height: 500px;



}

.text {
    margin: 0 auto;
    text-align: center;
}

.my_partners {


    display: flex;
    align-items: center;

    .my_margin {
        margin-left: 13px;

        img {
            opacity: 0.3;
            cursor: pointer;

            &:hover {
                opacity: 1;

            }
        }
    }
}
</style>