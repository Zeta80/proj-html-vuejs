<script>
import { store } from "../store";
export default {
    name: "AppHeader",
    components: {

    },
    data() {
        return {
            store
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
                        <li class="dropdown" v-for="(link, index) in store.navLink" :key="index">
                            <a v-if="!link.links" href="">{{ link.title }}</a>
                            <a v-else href="">{{ link.title }} <span><i class="fa-solid fa-caret-down"></i></span></a>
                            <div class="dropdown-content">

                                <div v-for="(links, index) in link.links" :key="index">
                                    <a href="#">{{ links }}</a>

                                </div>
                            </div>
                        </li>
                    </ul>
                    <button class="btn btn-primary my_btn-yellow"> view courses </button>
                </div>


            </div>

            <div class="header-jumbo ">

                <!-- <img src="../assets/assets/edu/img/theme_slider2_bg-1.jpg" alt=""> -->
                <div class="jumbo-text d-flex justify-content-center">
                    <h1>Key to your succes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque similique deleniti magni quos!
                        Molestiae autem, temporibus beatae
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
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;


        .header-logo {
            img {
                max-height: 100%;
            }
        }

        .header-links {
            width: 80%;
            display: flex;
            justify-content: end;
            color: $text-color-white;

            .dropdown {
                position: relative;

                span {
                    display: inline-block;
                    font-size: 10px;
                }
            }

            .dropdown-content {
                display: none;
                position: absolute;
                height: 100%;
                //     background-color: #f9f9f9;
                //     min-width: 160px;
                //     box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                z-index: 1;
            }

            .dropdown-content a {
                margin-bottom: 3px;
                //     float: none;
                //     color: black;
                //     padding: 12px 16px;
                //     text-decoration: none;
                display: block;
                text-align: left;
            }

            .dropdown:hover .dropdown-content {
                display: block;
            }

            ul {
                opacity: 1;
                align-items: center;
                margin-bottom: 0;

                li {
                    list-style-type: none;

                    a {
                        text-decoration: inherit;
                        color: inherit;
                        margin-right: 0.7rem;
                        margin-left: 4px;
                    }
                }
            }
        }
    }

    // header con banner slide
    .header-jumbo {
        position: relative;
        width: 100%;
        height: 500px;

        .jumbo-text {
            width: 50%;
            height: 100%;
            margin: 0 auto;
            text-align: center;
            flex-direction: column;
            align-items: center;
            color: $text-color-white;

            h1 {
                margin-bottom: 2rem;
                font-size: 50px;
                font-weight: bold;
            }

        }
    }

    .my_btn {
        margin-left: 10px;
        padding: 10px 25px;

        &-yellow {
            color: $text-color-white;
            background-color: $border-color-yellow;
            border-radius: 30px;
            border: none;

            &:hover {
                background-color: #da292b;
            }
        }

        &-white {
            color: $text-color-red;
            background-color: $fill-color-white;

            &:hover {
                background-color: $fill-color-red;
                box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.211);
                color: $text-color-white;
            }
        }
    }
}
</style>