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
                <div class="row">
                    <div v-for="(fac, index ) in store.faculties" :key="index" class="col">
                        <img :src="getImgUrl(index)" alt="">
                        <p> {{ fac.title }} </p>
                    </div>

                </div>
            </div>
        </div>


    </div>



</template>

<style lang="scss" scoped>
.wrapper-border {
    width: 100%;
    border: 1px solid green;

    .wrapper-card {
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
}
</style>