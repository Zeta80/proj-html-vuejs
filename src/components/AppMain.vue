<script>
import SectionFaculty from './section-components/SectionFaculty.vue';
import SectionYear from './section-components/SectionYear.vue';
import SectionCourses from './section-components/SectionCourses.vue';
export default {
    name: "AppMain",
    components: {
        SectionFaculty,
        SectionYear,
        SectionCourses
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
    <SectionCourses />

</template>

<style lang="scss" scoped>

</style>