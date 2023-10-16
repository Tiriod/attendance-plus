<template>
    <view class="box-card">
        <view class="title-bar">
            <text class="title-text">{{ item_title }}</text>
        </view>
        <view class="data-bar">
            <text class="data-text">{{ item_data }}</text>
        </view>
    </view>

</template>
<script>
export default {
    name: "feedback-item-strip",
    props: {
        item_title: String,
        item_data: String
    },
    data() {

    }
}
</script>


<style scoped>
.box-card {
    display: flex;
    background: white;
    align-items: center; /* 垂直居中 */
}

.title-bar {
    width: 25%;
    height: 50px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;
}

.title-text {
    font-size: 16px;
    color: #3D3D3D;
}

.data-bar {
    width: 75%;
    height: 50px;
    display: flex;
    align-items: center; /* 垂直居中 */
    border-bottom: 1px solid #EFEFEF; /* 添加底部线条 */
}

.data-text {
    font-size: 14px;
    color: #3D3D3D;
}
</style>