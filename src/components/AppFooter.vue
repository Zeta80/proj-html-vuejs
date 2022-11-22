<script>
import { store } from "../store";
import SearchBar from "../components/sub-components/SearchBar.vue";
export default {
    name: "AppFooter",
    components: {
        SearchBar
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

    <div class="wrapper-background">
        <div class="container">
            <div class="wrapper d-flex">


                <!-- sezione logo e social link -->
                <div class="logo-social">
                    <div class="logo">
                        <img src="../assets/assets/edu/img/theme_eduprime_logo.png" alt="">
                    </div>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo accusamus
                            blanditiis at nostrum deserunt in soluta reprehenderit perferendis. Fugiat eligendi,
                            maiores
                            aperiam rem ea amet ipsum illum soluta saepe?</p>
                        <div class="social">
                            facebook twitter instagram
                        </div>
                    </div>
                </div>
                <!-- sezione link dinamici -->
                <div v-for="(item, index) in store.footerLink" :key="index" class="link-list">
                    <ul>{{ item.title }}
                        <li v-for="(link, index_2) in item.links" :key="index_2">
                            <a href="">{{ link }}</a>
                        </li>
                    </ul>
                </div>
                <!-- sezione search bar -->
                <!-- BARRA DI IRCEDRCA -->

                <div class="search-cat ">
                    <div class="wrapper-cat d-flex flex-column text-end">
                        <div class="search-bar">
                            <SearchBar />
                        </div>
                        <h5>Search categories</h5>
                        <div v-for="(cat, index) in store.footerCategory" :key="index" class="categories">
                            <button class=" btn  button-categories" v-for="(link, index) in cat">{{
                                    cat[index]
                            }}</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.wrapper {
    width: 90%;
    margin: 0 auto;
    padding-top: 100px;
    color: $text-color-white;



    .search-cat {
        width: 33%;

        .button-categories {
            color: $text-color-white;
            background-color: none;
            border-color: $fill-color-white;
            border-radius: 30px;
            margin-right: 3px;
            margin-bottom: 5px;
        }
    }

    .link-list {
        text-align: start;
        margin-right: 50px;

        ul {
            list-style: none;

            a {

                text-decoration: inherit;
                color: inherit;
            }
        }
    }

    .logo {
        width: 60%;
        min-height: 50px;

        &-social {
            width: 33%;
            padding-right: 30px;
        }
    }


    &-background {
        min-height: 400px;
        background-color: $fill-color-red;
    }
}
</style>