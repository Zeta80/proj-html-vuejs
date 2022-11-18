<script>
import { store } from "../../store";
export default {
    name: "GenericCard",
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
    <div class="wrapper-background">

        <div class="container">
            <div class="title-event text-center">
                <h3>Upcoming Events</h3>
            </div>
            <div class="row row-cols-3 g-4">
                <div v-for="item in store.upcomingEvents" class="col text-center my-col">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.date }}</p>
                    <p>{{ item.text }}</p>
                </div>
            </div>

        </div>


    </div>



</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wrapper-background {

    .my-col {
        background-color: $fill-color-white;
        color: $text-color-mblack;
        border-radius: 30px;
    }
}
</style>