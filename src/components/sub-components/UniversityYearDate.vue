<script>
export default {
    name: "UniversityYearDate",
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
    <div class="my_title text-center ">

        <h3> <span>University Year</span> </h3>
    </div>
    <div class="container">
        <div class="d-flex justify-content-end">

            <div class="demo_class card_year">
                <h4>Demo classes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil aspernatur molestias nobis
                    consequatur!</p>
            </div>
            <div class="graduation_day card_year ">
                <h4>Graduation Day</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil aspernatur molestias nobis
                    consequatur!</p>
            </div>
        </div>
        <div class="uni_year">
            <img src="../../assets/assets/edu/img/Timeline-Item.png" alt="">
        </div>
        <div class="Orientation card_year">
            <h4>Demo classes</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil aspernatur molestias nobis
                consequatur!</p>
        </div>
        <div class="Evaluation card_year">
            <h4>Graduation Day</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil aspernatur molestias nobis
                consequatur!</p>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.my_title {
    h3 {
        span {
            background-color: #da292b;
        }
    }
}



.uni_year {
    width: 90%;
    margin: 0.8rem auto;
    ;
}

.card_year {
    width: 40%;
    text-align: center;
    display: inline-block;
}
</style>