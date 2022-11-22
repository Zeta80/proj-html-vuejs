<script>
import { store } from "../../store";
import SearchBar from "../sub-components/SearchBar.vue";


export default {
    name: "SectionSubscribe",
    components: {
        SearchBar
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="wrapper-background">
        <div class="container">


            <div class="wrapper d-flex justify-content-between ">
                <div class="text">
                    <h3>Subscibe Now to Our Newsletter !</h3>
                </div>

                <div class="input-email ">
                    <SearchBar />
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wrapper {
    width: 90%;
    margin: 0 auto;
    align-items: center;
    padding: 2rem 0;

    &-background {
        background-color: $fill-color-red;
        margin-bottom: 3rem;
    }

    h3 {
        color: $text-color-white;
    }

}
</style>