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
                    <button class="btn btn-primary"> {{ item.descriptionButton }}</button>
                </div>
                <div class="img">
                    <img src="../../assets/assets/edu/img/Graduation-Illustration.png" alt="">
                </div>
            </div>

        </div>
    </div>
    <div v-else class="true-img-first">
        <div class="container">
            <div class="wrapper d-flex ">

                <div class="img">
                    <img src="../../assets/assets/edu/img/Graduation-Illustration.png" alt="">
                </div>
                <div class="text">
                    <h2>{{ item.descriptionTitle }}</h2>
                    <p>{{ item.descriptionText }}</p>
                    <button class="btn btn-primary"> {{ item.descriptionButton }}</button>
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