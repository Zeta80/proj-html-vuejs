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
            return new URL(`../../assets/assets/edu/img/${this.store.faculties[index].img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="wrapper-border">
        <div class="container">
            <div class="wrapper-card">
                <div class="row row-cols-sd-2 row-cols-md-5">
                    <div :class="(fac.active == true ? `active` : `no-active`)" v-for="(fac, index ) in store.faculties"
                        :key="index" class="col my-card">
                        <img :src="getImgUrl(index)" alt="">
                        <p> {{ fac.title }} </p>
                    </div>

                </div>
            </div>
        </div>


    </div>



</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wrapper-border {
    width: 100%;
    border: 1px solid $border-color-grey;

    .wrapper-card {
        width: 90%;
        margin: 0 auto;
        text-align: center;

        .my-card {
            border-left: 1px solid $border-color-grey;
            cursor: pointer;

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