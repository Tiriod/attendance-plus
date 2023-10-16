<template>
    <view class="head-bar">
        <view class="choice-bar">
            <text class="choice-text">考勤类型</text>
            <select class="custom-select data-column-text">
                <option class="data-column-text" v-for="option in attendance_state" :value="option">{{ option }}
                </option>
            </select>
        </view>
        <div class="separator"/> <!-- 分隔线 -->
        <view class="choice-bar">
            <text class="choice-text">签到状态</text>
            <select class="custom-select data-column-text">
                <option class="data-column-text" v-for="option in attendance_type" :value="option">{{ option }}</option>
            </select>
        </view>
    </view>
</template>
<script>
export default {
    name: "select-card",
    data() {
        return {
            attendance_state: ["未筛选", "自习考勤", "上课考勤", "社团考勤"],
            attendance_type: ["未筛选", "出勤", "迟到", "旷课", "请假"]

        }
    }
}
</script>
<style scoped>
.head-bar {
    background: white;
    border-radius: 0 0 10px 10px;
    height: 60px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}

.choice-bar {
    display: flex;
    flex-direction: column; /* 让内部组件纵向排列 */
    justify-content: center; /* 垂直居中 */
    align-items: center; /* 水平居中 */
    width: calc(50% - 10px);
    padding: 5px;
}

.choice-text {
    font-size: 16px;
    font-weight: bold;
    margin: 5px;
}

.separator {
    width: 1px; /* 分隔线的宽度 */
    background: #3D3D3D; /* 分隔线的颜色 */
    margin: 5px; /* 调整分隔线与内容的间距 */
}


.data-column {
    min-width: 100px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center; /* 居中对齐 */
    justify-content: center; /* 水平居中对齐 */
}

.custom-select {
    border: none; /* 移除边框 */
    background: none; /* 移除背景颜色 */
    font-size: 14px;
    text-align: center; /* 可选，如果需要居中对齐文本内容 */
    width: calc(50%); /* 让 select 元素占满父容器 */
    height: 30px;
    border-radius: 5px;
}

.data-column-text {
    font-size: 14px;
    text-align: center; /* 可选，如果需要居中对齐文本内容 */
}


</style>