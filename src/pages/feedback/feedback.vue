<template>
    <view>
        <feedback-item-strip
                v-for="(item, index) in feedbackData"
                :key="index"
                :item_title="item.title"
                :item_data="item.data"
        />
    </view>
    <view class="blank"/>
    <complaint-materials/>

</template>

<script>
import FeedbackItemStrip from "./feedback-item-strip.vue";
import ComplaintMaterials from "./complaint-materials.vue";

export default {
    components: {ComplaintMaterials, FeedbackItemStrip},
    data() {
        return {
            feedbackData: [] // 存储数据的数组
        };
    },
    onLoad() {
        // 在这里处理传递的参数
        // 获取存储的数据
        const feedbackData = uni.getStorageSync('feedbackData');
        if (feedbackData) {
            // 将数据存储在 feedbackData 数组中
            this.feedbackData = [
                { title: '考勤类型', data: feedbackData.attendance_type },
                { title: '考勤时间', data: feedbackData.attendance_time },
                { title: '课时时间', data: feedbackData.lesson_time },
                { title: '课时节次', data: feedbackData.lesson_hours },
                { title: '周次时间', data: feedbackData.week_time },
                { title: '星期时间', data: feedbackData.week_day },
                { title: '考勤状态', data: feedbackData.attendance_status },
                { title: '操作人员', data: feedbackData.operator }
            ];
        }
    },
}
</script>

<style lang="scss">
.blank{
    height: 5px;
}
</style>
