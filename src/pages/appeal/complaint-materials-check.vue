<template>
    <view class="box-card">
        <text class="title-text">申诉材料</text>
        <view class="image_bar">
            <image class="image" v-for="(image, index) in image_list" :key="index" :src="image"/>
        </view>
        <view class="details-text-box">
            <text class="editable-text">
                提交文本信息
            </text>
        </view>
    </view>
</template>
<script>
export default {
    name: "complaint-materials-check",
    props: {
        image_list: Array
    },
    data() {
        return {
            image_list: ['./static/image/image_background_1.png', './static/image/image_background_2.png', './static/image/image_background_3.png',]
        }
    }
}
</script>


<style scoped>
.box-card {
    background: white;
    padding: 10px;
}

.title-text {
    font-size: 16px;
    margin: 10px;
}

.image_bar {
    overflow-x: auto; /* 使用scroll属性以便横向滚动 */
    overflow-y: hidden;
    white-space: nowrap;
    border-radius: 5px;
    margin: 5px;
}

.image {
    width: 80px;
    height: 80px;
    background: #EFEFEF;
    border-radius: 5px;
    margin: 0 5px;
    object-fit: cover;
}

.details-text-box {
    min-height: 160px;
    border: 2px solid #3D3D3D;
    border-radius: 5px;
    margin: 10px;
}

.editable-text {
    color: #3D3D3D; /* 设置文本颜色为黑色，或者其他对比度更高的颜色 */
    padding: 10px;
    border: none;
    resize: none;
}
</style>