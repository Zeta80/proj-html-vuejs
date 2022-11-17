<script>

export default {
    name: "ImageText",
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
    <div class="container">
        <div class="wrapper d-flex ">

            <div class="text">
                <h2>Thousands of courses for any type of student</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt laudantium ad recusandae
                    quae odio repellat illo ex blanditiis atque repudiandae necessitatibus quia deserunt, amet nulla,
                    neque quasi tenetur sed ullam eum. Ipsum explicabo ipsam doloribus quidem at aperiam maiores?</p>
                <button class="btn btn-primary"> Lorem</button>
            </div>
            <div class="img">
                <img src="../../assets/assets/edu/img/Graduation-Illustration.png" alt="">
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