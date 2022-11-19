<script>
import { store } from "../../store";
export default {
    name: "CardsFaculties",
    components: {

    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImgUrl(index) {
            return new URL(`../../assets/assets/edu/img/${this.store.facultiesArray[index].img}`, import.meta.url).href;
        },
        getActiveImgUrl(index) {
            return new URL(`../../assets/assets/edu/img/${this.store.facultiesArray[index].imgActive}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="wrapper-border">
        <div class="container">
            <div class="wrapper-card">
                <div class="row row-cols-2 row-cols-md-5">
                    <div :class="(fac.active == true ? `active` : `no-active`)"
                        v-for="(fac, index ) in store.facultiesArray" :key="index" class="col d-flex my-card ">
                        <img :src="getImgUrl(index)" alt="">
                        <p> {{ fac.title }} </p>
                    </div>
                </div>
            </div>
        </div>



    </div>
    <div class="container">
        <div v-for="(facActive, index ) in store.facultiesArray">
            <div v-if="facActive.active">
                <img :src="getActiveImgUrl(index)" alt="">
                <h3>{{ facActive.title }}</h3>
                <p>{{ facActive.text }}</p>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wrapper-border {
    width: 100%;

    box-shadow: 0px 0px 40px 4px rgb(220, 220, 220);

    .wrapper-card {
        width: 90%;
        margin: 0 auto;
        text-align: center;

        .my-card {
            border-left: 1px solid $border-color-grey;
            padding: 1rem 1rem;
            cursor: pointer;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                margin-bottom: 0;
                margin-top: 1rem;
            }

            &:last-child {
                border-right: 1px solid $border-color-grey;
            }

            &.active {
                background-color: $fill-color-red;
                color: $text-color-mwhite;

                img {
                    filter: brightness(8);
                }
            }


            img {
                min-width: 90px;
                max-width: 90px;
            }
        }
    }
}
</style>