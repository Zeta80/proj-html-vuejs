<script>

export default {
    name: "ImageText",
    props: {
        item: Object
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        getImgUrl() {
            return new URL(`../../assets/assets/edu/img/${this.item.descriptionImg}`, import.meta.url).href;
        },

    }
}
</script>

<template>
    <div v-if="!item.imgFirst" class="false-img-first">

        <div class="container">
            <div class="wrapper d-flex ">

                <div class="text">
                    <h2>{{ item.descriptionTitle }}</h2>
                    <p>{{ item.descriptionText }}</p>
                    <button class="btn btn-primary my_btn"> {{ item.descriptionButton }}</button>
                </div>
                <div class="img">
                    <img :src="getImgUrl()" alt="">
                </div>
            </div>

        </div>
    </div>
    <div v-else class="true-img-first">
        <div class="container">
            <div class="wrapper d-flex ">

                <div class="img">
                    <img :src="getImgUrl()" alt="">
                </div>
                <div class="text">
                    <h2>{{ item.descriptionTitle }}</h2>
                    <p>{{ item.descriptionText }}</p>
                    <button class="btn btn-primary my_btn"> {{ item.descriptionButton }}</button>
                </div>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    justify-content: space-around;
    padding: 3rem 0;
    position: relative;



    .text {
        width: 50%;
    }

    .img {
        width: 30%;
    }
}
</style>