<template>
    <view class="box-card" @click="redirect_page">
        <view class="icon-background">
            <image class="icon-image" :src="icon_url"></image>
        </view>
        <view class="text">{{ function_name }}</view>
    </view>
</template>
<script>
export default {
    name: "function-card",
    props: {
        icon_url: String,
        function_name: String,
        page_route: String // 传递自定义路由的 prop
    },
    data() {
        return {}
    },
    methods: {
        redirect_page() {
            if (this.page_route) {
                uni.navigateTo({
                    url: this.page_route // 使用自定义的路由
                });
            }
        }
    },
}
</script>


<style scoped>
.box-card {
    height: 40px;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    background: white;
    display: flex;
}

.icon-background {
    background: #00AA66;
    width: 40px;
    height: 40px;
    border-radius: 5px;
}

.icon-image {
    width: 30px;
    height: 30px;
    margin: 5px;
    filter: invert(1); /* 反转颜色，使图标变为白色 */
}

.text {
    font-size: 16px;
    color: #3D3D3D;
    display: flex;
    align-items: center;
    margin: 10px;
    justify-content: center; /* 居中水平和垂直 */
}
</style>