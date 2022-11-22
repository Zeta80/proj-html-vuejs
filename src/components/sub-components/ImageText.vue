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
        getImgSpanUrl() {
            return new URL(`../../assets/assets/edu/img/${this.item.imgSpan}`, import.meta.url).href;
        },

    }
}
</script>

<template>
    <div v-if="!item.imgFirst" class="false-img-first">

        <div class="container">
            <div class="wrapper d-flex ">

                <div class="text">
                    <span class="img-span"><img :src="getImgSpanUrl()" alt=""></span>
                    <h2>{{ item.descriptionTitle }}</h2>
                    <p>{{ item.descriptionText }}</p>
                    <button :class="item.buttonYellow == true ? 'my_btn_yellow' : 'my_btn'" class="btn btn-primary "> {{
                            item.descriptionButton
                    }}</button>
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
                    <span class="img-span"><img :src="getImgSpanUrl()" alt=""></span>
                    <h2>{{ item.descriptionTitle }}</h2>
                    <p>{{ item.descriptionText }}</p>
                    <button class="btn btn-primary my_btn"> {{ item.descriptionButton }}</button>
                </div>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wrapper {
    width: 100%;
    justify-content: space-around;
    padding: 3rem 0;
    position: relative;

    .img-span {
        img {
            width: 50px;
        }
    }


    .text {
        width: 50%;
    }

    .img {
        width: 30%;
    }

    .my_btn {
        padding: 0.8rem 2rem;

        &:hover {
            background-color: $border-color-yellow;
        }
    }

    .my_btn_yellow {
        background-color: $border-color-yellow;
        border: none;
        border-radius: 30px;
        padding: 15px 30px;

        &:hover {
            background-color: #da292b;
        }
    }
}
</style>