<script>

export default {
    name: "GenericCard",
    props: {
        item: Object,
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
    <div class="wrapper-background">

        <div>
            <div class="my_card">
                <h4>{{ item.title }}</h4>
                <p>{{ item.date }}</p>
                <p>{{ item.text }}</p>
                <p>{{ item.teacher }}</p>
                <p>{{ item.price }}</p>
            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.my_card {
    background-color: $fill-color-white;
    color: $text-color-mblack;
    text-align: center;
    padding: 2rem 0.8rem;
    border-radius: 25px;
}
</style>