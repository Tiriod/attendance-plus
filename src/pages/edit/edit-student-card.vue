<template>
    <view class="box-card" @click="openEditDialog">
        <view class="card-header">
            <view class="choice-card">班级</view>
            <view class="choice-card">学号</view>
            <view class="choice-card">姓名</view>
            <view class="choice-card" style="">考勤状态</view>
        </view>
        <view class="card-content">
            <text class="information-text">{{ classes_name }}</text>
            <text class="information-text">{{ student_id }}</text>
            <text class="information-text">{{ student_name }}</text>
            <text class="information-text">{{ attendance_state }}</text>
        </view>
        <view class="divider"/>
        <text class="information-text" style="width: 100%;color: #9b9b9b;">{{ record_time }}</text>
    </view>
    <update-state-card @update-attendance-state="update_attendance_state" v-if="showUpdateStateCard" />
</template>
<script>
import UpdateStateCard from "./update-state-card.vue";

export default {
    name: "edit-student-card",
    components: {UpdateStateCard},
    props: {
        classes_name: String,
        student_id: Number,
        student_name: String,
        attendance_state: String,
        record_time: String
    },
    data() {
        return {
            showUpdateStateCard: false, // 控制"update-state-card"的显示状态
        }
    },
    methods: {
        openEditDialog() {
            this.showUpdateStateCard = !this.showUpdateStateCard;
        },
        update_attendance_state(choice) {
            // 更新考勤状态数据
            this.attendance_state = choice;
        },
    },
}
</script>


<style scoped>
.box-card {
    border-radius: 5px;
    box-shadow: 0 0 0 1px #d5d5d5;
    margin: 10px;
    transition: filter 0.5s; /* 添加一个渐变效果 */
}


.card-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0 0 0 1px #41aee8;
    border-radius: 5px 5px 0 0;
    position: relative;
    background: #41aee8;
}

.choice-card {
    width: calc(100% / 4 - 10px);
    height: 24px;
    display: flex;
    align-items: center;
    margin: 5px;
    justify-content: center;
    color: white;
    position: relative;
    font-size: 14px;
}

.choice-card::after {
    content: "";
    width: 1px; /* 线的宽度 */
    height: 60%; /* 线的高度，根据需要调整 */
    background: white; /* 线的颜色 */
    position: absolute;
    right: -5px; /* 将线放在右侧 */
    top: 20%; /* 根据需要垂直居中 */
}

/* 最后一个组件的伪元素不需要竖线 */
.choice-card:last-child::after {
    content: none;
}

.card-content {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 5px;
}

.information-text {
    width: calc(100% / 4 - 10px);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 14px;
    text-align: center; /* 将文本水平居中对齐 */
}

.divider {
    width: 90%;
    height: 2px; /* 设置分割线的高度 */
    border-radius: 2px;
    background-color: #3D3D3D; /* 设置分割线的颜色 */
    margin: 5px auto; /* 控制分割线与内容之间的距离，auto使其水平居中 */
}

</style>