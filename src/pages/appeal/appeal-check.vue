<template>
    <feedback-item-strip
            v-for="(item, index) in formData"
            :key="index"
            :item_title="item.title"
            :item_data="item.data"
    />
    <view class="blank"/>
    <complaint-materials-check/>
</template>
<script>
import AppealItemCard from "./appeal-item-card.vue";
import InquiryItem from "../inquiry/inquiry-item.vue";
import FeedbackItemStrip from "../feedback/feedback-item-strip.vue";
import ComplaintMaterialsCheck from "./complaint-materials-check.vue";

export default {
    name: "appeal-check",
    components: {ComplaintMaterialsCheck, FeedbackItemStrip, InquiryItem, AppealItemCard},
    data() {
        return {
            formData: [
                {title: '考勤类型', data: "课堂考勤"},
                {title: '考勤时间', data: "2023年10月19日 22：14：06"},
                {title: '课时时间', data: "1-2"},
                {title: '课时节次', data: 2},
                {title: '周次时间', data: "第5周"},
                {title: '星期时间', data: "星期三"},
                {title: '考勤状态', data: "旷课"},
                {title: '操作人员', data: "洪晨浩"}
            ]
        }
    }
}
</script>


<style scoped>
.blank{
    height: 5px;
}
</style>