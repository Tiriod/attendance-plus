<template>
    <filter-box/>
</template>
<script>


import FilterBox from "./filter-box.vue";
import ScrollableDataForm from "./scrollable-data-form.vue";
import FilterButton from "./filter-button.vue";
import UpdateStateCard from "./update-state-card.vue";

export default {
    components: {UpdateStateCard, FilterButton, ScrollableDataForm, FilterBox},
    data() {
        return {};
    }
}
</script>

<style lang="scss">

</style>
