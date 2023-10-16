<template>
    <view class="box-card">
        <view class="title-card">
            <text class="type-text">{{attendance_type}}</text>
            <text class="time-text">{{attendance_time}}</text>
        </view>
        <div class="separator"/>
        <view>
            <inquiry-item-strip strip_name="课时时间" :strip_data="lesson_time"/>
            <inquiry-item-strip strip_name="课时节次" :strip_data="lesson_hours"/>
            <inquiry-item-strip strip_name="周次时间" :strip_data="week_time"/>
            <inquiry-item-strip strip_name="星期时间" :strip_data="week_day"/>
            <inquiry-item-strip strip_name="考勤状态" :strip_data="attendance_status"/>
            <inquiry-item-strip strip_name="操作人员" :strip_data="operator"/>
        </view>
        <div class="separator" style="margin-bottom: 10px"/>
        <view class="title-card">
            <view class="button-card button-card-text" @click="redirect_page()">问题反馈</view>
        </view>
    </view>
</template>

<script>
import InquiryItemStrip from "./inquiry-item-strip.vue";
import SubmitButton from "../self-study/submit-button.vue";

export default {
    name: "inquiry-item",
    components: {SubmitButton, InquiryItemStrip},
    props: {
        attendance_type:String,
        attendance_time:String,
        lesson_time: String,
        lesson_hours: Number,
        week_time: String,
        week_day: String,
        attendance_status: String,
        operator: String,
    },
    data() {

    },
    methods: {
        redirect_page() {
            uni.setStorageSync('feedbackData', {
                attendance_type:this.attendance_type,
                attendance_time:this.attendance_time,
                lesson_time: this.lesson_time,
                lesson_hours: this.lesson_hours,
                week_time: this.week_time,
                week_day: this.week_day,
                attendance_status: this.attendance_status,
                operator: this.operator,
            });
            // 使用uni.navigateTo跳转页面
            uni.navigateTo({
                url: '/pages/feedback/feedback',
            });
        }
    }
}
</script>


<style scoped>
.box-card {
    min-height: 50px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background: white;
}

.title-card {
    display: flex; /* 使用 Flex 布局 */
    align-items: center; /* 垂直居中 */
    justify-content: space-between; /* 左右对齐 */
    height: 40px;
}

.type-text {
    font-size: 20px;
    font-weight: bold;
}

.time-text {
    font-size: 14px;
}

.separator {
    width: 100%;
    height: 1px; /* 分割线高度 */
    background: #EFEFEF; /* 灰色背景颜色 */
}

.button-card {
    width: 100%;
    min-height: 40px;
    border-radius: 5px;
    background: #D3D3D3;
    justify-content: center;
    align-items: center;
    display: flex;
}

.button-card:hover {
    filter: brightness(0.8);
}
</style>