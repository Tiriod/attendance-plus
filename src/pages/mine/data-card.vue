<template>
    <view class="box-card">
        <view class="point-card">
            <view class="point" style="background: #309BE8"></view>
            <view class="text">考勤次数</view>
            <view class="text" style="color: #309BE8">{{ count_attendance }}</view>
        </view>
        <view class="point-card">
            <view class="point" style="background: #00AA66"></view>
            <view class="text">签到次数</view>
            <view class="text" style="color: #00AA66">{{ count_attend }}</view>
        </view>
        <view class="point-card">
            <view class="point" style="background: #F1E024"></view>
            <view class="text">迟到次数</view>
            <view class="text" style="color: #F1E024">{{ count_late }}</view>
        </view>
        <view class="point-card">
            <view class="point" style="background: #E8303F"></view>
            <view class="text">旷课次数</view>
            <view class="text" style="color: #E8303F">{{ count_absent }}</view>
        </view>
    </view>
</template>
<script>
export default {
    name: "data-card",
    data() {
        return {
            count_attendance: 114514,
            count_attend: 110,
            count_late: 1500,
            count_absent: 113414
        }
    }
}
</script>


<style scoped>
.box-card {
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    background: white;
}

.point-card {
    display: flex;
}

.point {
    width: 20px;
    height: 20px;
    background: #309BE8;
    margin: 10px;
    border-radius: 5px;
    display: flex;

}

.text {
    font-size: 12px;
    font-weight: bold;
    color: #3D3D3D;
    display: flex;
    align-items: center;
    margin: 10px;
    justify-content: center; /* 居中水平和垂直 */
}
</style>