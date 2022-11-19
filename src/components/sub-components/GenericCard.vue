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
            <div>
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

.wrapper-background {

    .my-col {
        background-color: $fill-color-white;
        color: $text-color-mblack;
        border-radius: 30px;
    }
}
</style>