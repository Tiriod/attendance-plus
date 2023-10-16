<template>
    <view class="card-header">
        <view class="box-card box-card-text">保存</view>
        <view class="box-card box-card-text" style="background: #00AA66; color: white">提交</view>
    </view>

</template>
<script>
export default {
    name: "submit-button"
}

</script>

<style scoped>
.box-card {
    width: calc(50% - 10px);
    min-height: 40px;
    border-radius: 15px;
    margin: 5px;
    background: white;
    justify-content: center;
    align-items: center;
    display: flex;
}

.box-card:hover {
    filter: brightness(0.8);
}

.box-card-text {
    font-size: 16px;
    font-weight: bold;
    align-items: center;
    letter-spacing: .10rem;
    color: #00AA66;
}

.card-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 5px;
    padding-right: 5px;
}
</style>