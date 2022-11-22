<script>
import SectionFaculty from './section-components/SectionFaculty.vue';
import SectionYear from './section-components/SectionYear.vue';
import SectionCourses from './section-components/SectionCourses.vue';
import SectionSubscribe from './section-components/SectionSubscribe.vue';
import SectionPartners from './section-components/SectionPartners.vue';
import toolFixed from '../components/sub-components/toolFixed.vue';
export default {
    name: "AppMain",
    components: {
        SectionFaculty,
        SectionYear,
        SectionCourses,
        SectionSubscribe,
        SectionPartners,
        toolFixed
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


    <toolFixed />
    <SectionFaculty />
    <sectionYear />
    <SectionCourses />
    <SectionSubscribe />
    <SectionPartners />

</template>

<style lang="scss" scoped>

</style>