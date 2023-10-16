<template>
    <view class="box-card">
        <view class="box-content">
            <image class="box-card-image" :style="{ backgroundImage: `url(./static/image/image_team.png)` }">
                <view class="image-legend">
                    <text class="legend-text">{{ public_type }}</text>
                    <text class="legend-text" style="margin-left: 20px">{{ public_time }}</text>
                </view>
            </image>
            <text class="title-text">{{ public_title }}</text>
            <view class="content">
                <view class="tip-card">
                    <text class="tip-card-text">发布</text>
                </view>
                <text class="tip-card-text" style="margin-left: 10px">{{ public_person }}</text>
            </view>
            <view class="content">
                <view class="tip-card">
                    <text class="tip-card-text">查看</text>
                </view>
                <text class="tip-card-text" style="margin-left: 10px">{{ public_review }}</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "public-card",
    props: {
        public_type: String,
        public_time: String,
        public_title: String,
        public_person: String,
        public_review: Number
    },
}
</script>

<style scoped>
.box-card {
    min-height: 50px;
    border-radius: 10px;
    margin: 10px;
    background: white;
    display: flex;
    align-items: center;
}

.box-content {
    position: relative;
    align-items: center;
    width: 100%;
    padding: 10px;
}

.box-card-image {
    width: 100%;
    border-radius: 10px;
    background-size: cover;
    position: relative;
    margin: 0 0 10px 0;
    box-shadow: 0 0 0 1px #3D3D3D;
}

.title-text {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: .1rem;
}

.image-legend {
    min-width: 160px;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 20px;
    border-radius: 20px;
    opacity: 0.9;
    margin: 10px;
    background: white;
    padding: 10px;
    text-align: center;
    align-items: center;
    display: flex;
}

.legend-text {
    color: #3D3D3D;
    font-size: 14px;
    font-weight: bold;
    margin: 5px;
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
}

.tip-card-text {
    font-size: 14px;
    color: #3D3D3D;
}
</style>
