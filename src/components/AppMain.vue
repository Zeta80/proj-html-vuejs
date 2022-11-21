<script>
import SectionFaculty from './section-components/SectionFaculty.vue';
import SectionYear from './section-components/SectionYear.vue';
import SectionCourses from './section-components/SectionCourses.vue';
import SectionSubscribe from './section-components/SectionSubscribe.vue';
export default {
    name: "AppMain",
    components: {
        SectionFaculty,
        SectionYear,
        SectionCourses,
        SectionSubscribe
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
    <SectionSubscribe />

</template>

<style lang="scss" scoped>

</style>