<template>
    <div class="background-image-container">
        <image class="background-image" :src="'./static/image/image_forest.jpg'">
        </image>
        <div class="container">
            <view class="text-bar">
                <text class="title-text">物联网考勤助手</text>
            </view>
            <login-card/>
        </div>
    </div>
</template>

<script>
import LoginCard from "./login-card.vue";

export default {
    components: { LoginCard },
    data() {
        return {};
    },
};
</script>

<style scoped>
.background-image-container {
    position: relative; /* 设置容器为相对定位 */
    width: 100%;
    height: 100vh;
}

.background-image {
    position: absolute; /* 设置图片为绝对定位 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1; /* 将图片的层级设置为 1，位于 login-card 下方 */
}

.text-bar{
    width: 100%;
    margin-bottom: 300px;
}

.title-text {
    font-size: 24px;
    color: white;
    letter-spacing: 0.2rem;
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}


.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    position: relative; /* 设置容器为相对定位，确保 login-card 的 z-index 生效 */
    z-index: 2; /* 设置 login-card 的层级比图片更高 */
}
</style>
