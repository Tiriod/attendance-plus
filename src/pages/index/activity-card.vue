<template>
    <view>
        <view class="box-card">
            <view class="card-header">
                <text class="card-heard-text">活动信息</text>
            </view>
            <view>

            </view>
        </view>
    </view>
</template>
<script>
export default {
    name: "activity-card",
    data() {

    }
}
</script>


<style scoped>
.box-card {
    min-height: 60px;
    border-radius: 5px;
    margin: 10px;
    background: white;
    display: flex;
    flex-direction: column; /* 纵向排列子元素 */
}

.card-header {
    width: 100%;
    background: #00AA66;
    color: white;
    font-size: 16px;
    text-align: center;
    border-radius: 5px 5px 0  0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center; /* 居中水平和垂直 */
}

.card-heard-text {
    color: white;
    font-size: 16px;
    letter-spacing: .2rem;
}
</style>