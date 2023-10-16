<template>
    <view class="box-card" @click="redirect_page">
        <view class="card-header">
            <text class="card-heard-text">{{ heard_text }}</text>
        </view>
        <view class="content">
            <view class="tip-card">
                <text class="tip-card-text">更新时间</text>
            </view>
            <text class="tip-card-text" style="margin-left: 10px">{{ update_time }}</text>
        </view>
        <view class="content">
            <view class="tip-card">
                <text class="tip-card-text">最新更新</text>
            </view>
            <text class="tip-card-text" style="margin-left: 10px">{{ latest_title }}</text>
        </view>
        <view class="content">
            <view class="tip-card">
                <text class="tip-card-text">公示总计</text>
            </view>
            <text class="tip-card-text" style="margin-left: 10px">{{ count }}</text>
        </view>
    </view>
</template>

<script>
export default {
    name: "information-post",
    props: {
        heard_text: String,
        page_route: String,
        update_time: String,
        latest_title: String,
        count: Number
    },
    methods: {
        redirect_page() {
            if (this.page_route) {
                uni.navigateTo({
                    url: this.page_route
                });
            }
        }
    }
}
</script>

<style scoped>
.box-card {
    min-height: 60px;
    border-radius: 5px;
    padding: 5px;
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
    border-radius: 5px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center; /* 居中水平和垂直 */
}

.card-heard-text {
    color: white;
    font-size: 16px;
    letter-spacing: .2rem;
}

.content {
    width: 100%;
    display: flex;
    padding: 5px 0;
    align-items: center;
    flex-direction: row;
}

.tip-card {
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EFEFEF;
    margin: 0 5px;
}

.tip-card-text {
    font-size: 14px;
    color: #3D3D3D;
}
</style>
