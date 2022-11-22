<script>

export default {
    name: "GenericCard",
    props: {
        item: Object,
        img: String
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        getImgUrl() {
            return new URL(`../../assets/assets/edu/img/${this.item.img}`, import.meta.url).href;
        },


    }
}
</script>

<template>
    <div class="wrapper-background">




        <div class="pudding">
            <div :class="!item.price ? `false-shadow` : `true-shadow`" class="my_card">
                <img :src="getImgUrl()" alt="">
                <h4>{{ item.title }}</h4>
                <p>{{ item.date }}</p>
                <p>{{ item.text }}</p>
                <p> <span><i class="fa-solid fa-user-large"></i></span> <span>Teacher:</span> {{ item.teacher }}</p>
                <p> <span><i class="fa-solid fa-money-bill"></i></span> <span>Price:</span> {{ item.price }}</p>
                <button v-if="item.teacher" class="btn btn-primary my_btn my_btn_course"> <span><i
                            class="fa-solid fa-eye"></i></span> {{ item.descriptionButton
                            }}</button>
                <button v-else class="btn btn-primary my_btn my_btn_course"> <span><i
                            class="fa-solid fa-plus"></i></span> {{ item.descriptionButton }}</button>
            </div>
        </div>

    </div>



</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.pudding {
    padding-bottom: 30px;
}

.my_card {
    position: relative;
    background-color: $fill-color-white;
    color: $text-color-mblack;
    text-align: center;
    padding: 2rem 0.8rem;
    border-radius: 25px;




    img {
        width: 30%;
        min-width: 50px;
    }

    &.true-shadow {
        box-shadow: 0px 0px 15px 1px rgb(220, 220, 220);



    }

    .my_btn_course {
        box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.279);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        padding: 0.8rem 1rem;

    }

}
</style>