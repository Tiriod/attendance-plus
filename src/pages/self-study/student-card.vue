<template>
    <view class="box-card" v-for="(student, index) in students" :key="index">
        <view class="card-header">
            <view class="choice-card">学号</view>
            <view class="choice-card">姓名</view>
            <view class="choice-card">性别</view>
        </view>
        <view class="card-content">
            <text class="information-text">{{ student.student_id }}</text>
            <text class="information-text">{{ student.student_name }}</text>
            <text class="information-text">{{ student.student_gender }}</text>
        </view>
        <view class="card-tail">
            <view class="static-button">
                <view class="point" style="background: #00AA66"></view>
                <view class="text" style="color: #00AA66">出勤</view>
            </view>
            <view class="static-button">
                <view class="point" style="background: #e7df3d"></view>
                <view class="text" style="color: #e7df3d">迟到</view>
            </view>
            <view class="static-button">
                <view class="point" style="background: #dc3d4a"></view>
                <view class="text" style="color: #dc3d4a">旷课</view>
            </view>
            <view class="static-button">
                <view class="point" style="background: #1d7dc5"></view>
                <view class="text" style="color: #1d7dc5">请假</view>
            </view>

        </view>

    </view>

</template>
<script>

export default {
    name: "student-card",
    props: {
        students: Array, // 学生信息数组

    },
    data() {
        return {}
    }
}

</script>

<style scoped>
.box-card {
    min-height: 100px;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #d5d5d5;
    margin: 10px 5px;
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

.card-content {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 5px;
}

.card-tail {
    display: flex;
    justify-content: space-between;
}

.choice-card {
    width: calc(100% / 3 - 10px);
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

.information-text {
    width: calc(100% / 3 - 10px);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
}

.point {
    width: 10px;
    height: 10px;
    background: white;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    border-radius: 5px;
    display: flex;

}

.text {
    font-size: 14px;
    font-weight: bold;
    color: white;
    align-items: center;
    margin-left: 10px;
    display: flex;
    letter-spacing: .2rem;

}

.static-button {
    width: calc(25% - 10px);
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    background: white;
}

.static-button:hover {
    filter: brightness(0.8);
}
</style>