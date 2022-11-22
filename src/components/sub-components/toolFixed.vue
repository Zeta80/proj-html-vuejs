<script>

export default {
    name: "toolFixed",

    components: {

    },
    data() {
        return {

        }
    },

}
</script>

<template>
    <div class="wrapper-fixed">
        <div class="wrapper-flex">
            <div class="tool d-flex">
                <span><i class="fa-solid fa-cart-shopping"></i></span>
            </div>
            <div class="tool d-flex">
                <span><i class="fa-solid fa-book-open"></i></span>
            </div>
            <div class="tool d-flex">
                <span><i class="fa-regular fa-futbol"></i></span>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.wrapper-fixed {
    position: fixed;
    z-index: 9999;
    top: 300px;
    left: 0;


    .wrapper-flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $border-color-yellow;
        border-radius: 0 10px 10px 0;

        .tool {
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            padding: 5px;
            color: $text-color-mwhite;
            cursor: pointer;
        }
    }
}
</style>