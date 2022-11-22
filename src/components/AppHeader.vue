<script>

export default {
    name: "AppHeader",
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
    <header>
        <div class="image-border">
            <img src="../assets/assets/edu/img/Wave-1.png" alt="">
        </div>

        <div class="wrapper-background">

            <div class="header-top d-flex ">


                <div class="header-logo">
                    <img src="../assets/assets/edu/img/theme_eduprime_logo.png" alt="eduprime_logo">
                </div>

                <div class="header-links d-flex">
                    <ul class="d-flex">
                        <li> <a href="">lorem</a> </li>
                        <li> <a href="">lorem</a> </li>
                        <li> <a href="">lorem</a> </li>
                        <li> <a href="">lorem</a> </li>
                        <li> <a href="">lorem</a> </li>
                        <li> <a href="">lorem</a> </li>
                        <li> <a href="">lorem</a> </li>
                    </ul>
                    <button class="btn btn-primary"> lorem </button>
                </div>


            </div>

            <div class="header-jumbo ">

                <!-- <img src="../assets/assets/edu/img/theme_slider2_bg-1.jpg" alt=""> -->
                <div class="jumbo-text d-flex justify-content-center">
                    <h1>Key to your succes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque similique deleniti magni quos!
                        Molestiae autem, temporibus beatae perferendis consequatur officia rerum culpa, voluptate
                        tempore nulla necessitatibus fuga! Quod, est! Dolorem?
                    </p>
                    <div class="buttons d-flex">
                        <button class="btn btn-primary my_btn my_btn-yellow">
                            <span><i class="fa-solid fa-magnifying-glass"></i></span> Search courses</button>
                        <button class="btn btn-primary my_btn my_btn-white">Apply for university</button>
                    </div>
                </div>
            </div>

        </div>

    </header>





</template>

<style lang="scss" scoped>
@use "../styles/partials//variables" as *;

header {
    background-color: $fill-color-red;
    position: relative;

    .image-border {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 998;
    }

    .wrapper-background {
        position: relative;


        padding: 2rem 0;


        &::before {
            content: "";
            background-image: url(../assets/assets/edu/img/theme_slider2_bg-1.jpg);
            background-repeat: no-repeat;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-size: cover;
            opacity: 0.2;
        }

    }


    //header con link e logo
    .header-top {
        position: relative;
        height: $header-heigts;
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;


        .header-logo {
            img {
                max-height: 100%;
            }
        }

        ul {
            opacity: 1;
            align-items: center;
            margin-bottom: 0;

            li {
                list-style-type: none;

                a {
                    text-decoration: inherit;
                    margin-right: 0.7rem;
                }
            }
        }
    }

    // header con banner slide
    .header-jumbo {
        position: relative;
        width: 100%;
        height: 500px;



        // img {
        //     opacity: 0.2;
        // }
        .jumbo-text {
            width: 50%;
            height: 100%;
            margin: 0 auto;
            text-align: center;
            flex-direction: column;
            align-items: center;
        }
    }

    .my_btn {
        margin-left: 10px;
        padding: 10px 25px;

        &-yellow {
            color: $text-color-white;
            background-color: $border-color-yellow;
        }

        &-white {
            color: $text-color-red;
            background-color: $fill-color-white;
        }
    }
}
</style>