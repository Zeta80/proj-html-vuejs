<script>
import { store } from "../../store";


export default {
    name: "SectionSubscribe",
    components: {

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


            <div class="wrapper d-flex justify-content-between">
                <div class="text">
                    <h3>Subscibe Now to Our Newsletter !</h3>
                </div>

                <div class="input-email ">
                    <div class="my_container">
                        <div class="container__item">
                            <form class="form">
                                <input type="email" class="form__field" placeholder="Your E-Mail Address" />
                                <button type="button" class="btn btn_primary btn_inside uppercase">
                                    <i class="fa fa-telegram" style="font-size:24px"></i>
                                </button>
                            </form>
                        </div>
                    </div>
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

//** variables
$background: #f5f6fa;
$text: #9c9c9c;
$input-bg-color: #fff;
$input-text-color: #a3a3a3;

$button-text-color: #fff;

//** root
:root {
    background: $background;
    color: $text;
}

//** helper
.my_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.uppercase {
    text-transform: uppercase;
}

//** button
.btn {
    display: inline-block;
    background: transparent;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    transform: translateX(30px);
    cursor: pointer;

    &_primary {
        background: $border-color-yellow;
        color: $button-text-color;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
        border-radius: 30px;
        padding: 18px 15px;

        &:hover {
            background: darken($border-color-yellow, 4%);
        }

        &:active {
            background: $border-color-yellow;
            box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
        }
    }

    &_inside {
        margin-left: -96px;
    }
}



//** form
.form {
    &__field {
        width: 360px;
        background: #fff;
        color: $input-text-color;
        font: inherit;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .1);
        border: 0;
        outline: 0;
        padding: 13px 8px;
        border-radius: 30px;
    }
}
</style>