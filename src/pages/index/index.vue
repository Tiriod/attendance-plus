<template>
<!--  考勤项目选项  -->
    <choice-plate/>
    <information-post :heard_text="'考勤信息公示'" :page_route="'/pages/public/public'" :update_time="'10/18 周三 22:15'" :latest_title="'物联网技术学院第五周考勤公示'" :count="3"/>
    <information-post :heard_text="'处分信息公示'" :page_route="'/pages/punish/punish'"/>
    <activity-card/>
</template>

<script>
import ChoicePlate from "./choice-plate.vue";
import InformationPost from "./information-post.vue";
import ActivityCard from "./activity-card.vue";

export default {
    components: {ActivityCard, InformationPost, ChoicePlate},
}
</script>

<style>
</style>
