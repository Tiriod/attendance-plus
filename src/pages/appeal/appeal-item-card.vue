<template>
    <view class="box-card">
        <image class="image" :src="student_avatar"/>
        <view class="data-bar">
            <view class="data-bar-top">
                <view class="data-item">
                    <image class="icon-image" :src="'./static/icon/icon_mine.png'"/>
                    <text class="data-text">{{ student_name }}</text>
                </view>
                <view class="data-item">
                    <image class="icon-image" :src="'./static/icon/icon_classes.png'"/>
                    <text class="data-text">{{ student_class }}</text>
                </view>
                <view class="data-item">
                    <image class="icon-image" :src="'./static/icon/icon_studentID.png'"/>
                    <text class="data-text">{{ student_id }}</text>
                </view>

            </view>
            <view class="data-bar-bottom">
                <text class="datetime-text">{{ appeal_datetime }}</text>
            </view>
        </view>
        <view class="entry-bar" @click="navigateToAppealCheck">
            <image class="entry-image" :src="'./static/icon/icon_entry.png'"/>
        </view>
    </view>

</template>
<script>
export default {
    name: "appeal-item-card",
    props: {
        student_avatar: String,
        student_name: String,
        student_class: String,
        student_id: Number,
        appeal_datetime: String
    },
    data() {
        return {}
    },
    methods: {
        navigateToAppealCheck() {
            // 使用 uni.navigateTo 方法跳转到目标页面
            uni.navigateTo({
                url: '/pages/appeal/appeal-check' // 替换成你的目标页面路径
            });
        }
    }
}
</script>

<style scoped>
.box-card {
    height: 80px;
    background: white;
    margin: 10px;
    border-radius: 5px;
    display: flex;
}

.image {
    width: 60px;
    height: 60px;
    margin: 10px;
    background: #EFEFEF;
    border-radius: 5px;
}

.data-bar {
    margin: 10px 0;
    width: calc(100% - 120px);
}

.data-bar-top {
    height: 75%;
    display: flex;
    flex-wrap: wrap;

}

.data-item {
    display: flex;
    width: 50%;
    align-items: center;
}

.icon-image {
    width: 20px;
    height: 20px;
}

.data-text {
    font-size: 14px;
}

.data-bar-bottom {
    height: 25%;
    display: flex;
    justify-content: start;
}

.datetime-text {
    font-size: 12px;
    color: #9D9D9D;
}

.entry-bar {
    width: 40px;
    box-shadow: -1px 0 0 0 #EFEFEF;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}

.entry-image {
    width: 30px;
    height: 30px;
}

</style>