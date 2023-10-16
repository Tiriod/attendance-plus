<template>
    <view>
        <publish-card/>
        <view class="blank"/>
    </view>
</template>

<script>
import PublishCard from "./publish-card.vue";

export default {
    components: {PublishCard},
    data() {
        return {};
    }
}
</script>

<style lang="scss">
.blank {
    height: 20px;
}
</style>
