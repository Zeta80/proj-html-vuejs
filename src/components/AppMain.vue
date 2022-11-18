<script>
import SectionFaculty from './section-components/SectionFaculty.vue';
import SectionYear from './section-components/SectionYear.vue';
export default {
    name: "AppMain",
    components: {
        SectionFaculty,
        SectionYear
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
    <SectionFaculty />
    <sectionYear />


</template>

<style lang="scss" scoped>

</style>