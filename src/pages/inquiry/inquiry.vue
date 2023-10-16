<template>
    <view>
        <select-card/>
        <inquiry-item
                v-for="(data, index) in formData"
                :key="index"
                :attendance_type="data.attendance_type"
                :attendance_time="data.attendance_time"
                :lesson_time="data.lesson_time"
                :lesson_hours="data.lesson_hours"
                :week_time="data.week_time"
                :week_day="data.week_day"
                :attendance_status="data.attendance_status"
                :operator="data.operator"
        />
    </view>
    <view class="blank"/>
</template>

<script>
import InquiryItem from "./inquiry-item.vue";
import SelectCard from "./select-card.vue";

export default {
    components: {SelectCard, InquiryItem},
    data() {
        return {
            formData: [
                {
                    attendance_type:"课堂考勤",
                    attendance_time:"2023年10月19日 22：14：06",
                    lesson_time: "1-2",
                    lesson_hours: 2,
                    week_time: "第5周",
                    week_day: "星期三",
                    attendance_status: "旷课",
                    operator: "洪晨浩",
                },
                {
                    attendance_type:"课堂考勤",
                    attendance_time:"2023年10月19日 22：14：06",
                    lesson_time: "3-4",
                    lesson_hours: 4,
                    week_time: "第6周",
                    week_day: "星期四",
                    attendance_status: "出勤",
                    operator: "洪晨浩",
                },
                {
                    attendance_type:"自习考勤",
                    attendance_time:"2023年10月19日 22：14：06",
                    lesson_time: "晚自习",
                    lesson_hours: 1,
                    week_time: "第6周",
                    week_day: "星期四",
                    attendance_status: "出勤",
                    operator: "洪晨浩",
                },
            ],
        };
    },
};
</script>


<style lang="scss">
.blank {
    height: 20px;
}
</style>
