<template>
    <view class="box-card">
        <view class="choice-card-text"></view>
        <view class="card-header">
            <div class="choice-card" v-for="(item, index) in attendance_list" :key="index" @click="redirect_page(item)" :style="{ backgroundImage: `url(${background_url[index]})` }">
                <image class="choice-card-image" :src="image_url[index]"/>
                <text class="choice-card-text">{{ item }}</text>
            </div>
        </view>
    </view>
</template>

<script>
export default {
    name: "choice-plate",
    data() {
        return {
            attendance_list: ["自习考勤", "课堂考勤", "社团考勤"],
            page_route: ["/pages/self-study/self-study", "/pages/lesson/lesson", "/pages/society/society"],
            image_url: ["./static/image/image_halloween_cat.png", "./static/image/image_halloween_gengar.png", "./static/image/image_halloween_pumpkin.png"],
            background_url:["./static/image/image_background_4.png", "./static/image/image_background_2.png", "./static/image/image_background_3.png"]
        }
    },
    methods: {
        redirect_page(item) {
            // 索引对称
            const index = this.attendance_list.indexOf(item);
            if (index !== -1) {
                const route = this.page_route[index];
                uni.navigateTo({
                    url: route
                });
            }
        }
    },
};
</script>
<style scoped>
.box-card {
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    background: #FFFFFF;
}

.card-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.choice-card {
    display: flex;
    align-items: center;
    width: calc(50% - 10px);
    height: 60px;
    background: #EFEFEF;
    background-size: cover;
    border-radius: 5px;
    margin: 5px;
}

.choice-card-image {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 0 0 1px #3D3D3D;
}

.choice-card-text {
    flex: 1; /* 占据剩余空间 */
    display: flex; /* 启用 Flexbox 布局 */
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #3D3D3D;
    letter-spacing: .2rem;
    font-weight: bold;
}


</style>
