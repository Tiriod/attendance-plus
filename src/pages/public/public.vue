<!-- public.vue -->
<template>
    <view>
        <public-card v-for="(item, index) in public_type" :key="index" :public_type="item"
                     :public_time="public_time[index]" :public_title="public_title[index]"
                     :public_person="public_person[index]" :public_review="public_review[index]"/>
        <view class="blank"/>
    </view>
</template>

<script>
import PublicCard from "./public-card.vue";

export default {
    name: "public",
    components: {PublicCard},
    data() {
        return {
            public_type: ["自习考勤", "上课考勤","上课考勤",],
            public_time: ["10/18" + " 周三 " + "22:15", "10/18" + " 周三 " + "22:15", "10/18" + " 周三 " + "22:15"],
            public_title: [
                "物联网技术学院第五周考勤公示",
                "物联网技术学院第六周考勤公示",
                "物联网技术学院第六周考勤公示",
            ],
            public_person: ["物联网技术学院权益部", "物联网技术学院权益部", "物联网技术学院权益部"],
            public_review: [114, 514,1103],
        };
    },
};
</script>
<style lang="scss">

</style>