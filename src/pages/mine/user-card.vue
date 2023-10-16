<template>
    <view>
        <view class="box-card">
            <!-- 姓名学号 -->
            <div class="user-info">
                <image class="user-avatar" @click="edit_user_avatar"></image>
                <div class="user-details">
                    <div class="user-name">{{ user_name }}</div>
                    <div class="user-number">{{ user_id }}</div>
                </div>
            </div>
            <div class="other-card">
                <div class="item-card">
                    <div class="card-header">班级</div>
                    <div class="card-content">{{ class_name }}</div>
                </div>
                <div class="item-card">
                    <div class="card-header">身份</div>
                    <div class="card-content">{{ identity }}</div>
                </div>
            </div>
        </view>
    </view>
</template>

<script>
export default {
    name: "user-card",
    props: {
        user_name: String,
        user_id: Number,
        class_name: String,
        identity: String
    },
    data() {
        return {}
    },
    methods: {
        edit_user_avatar() {

        }
    },
};
</script>

<style scoped>
.box-card {
    min-height: 50px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background: white;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-avatar {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background: #EFEFEF;

}

.user-details {
    margin-left: 20px;
}

.user-name {
    font-weight: bold;
    font-size: 18px;
}

.user-number {
    color: #666;
    font-size: 14px;
    margin-top: 10px;
}

.other-card {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.item-card {
    width: calc(50% - 10px);
    border-radius: 5px;
}

.card-header {
    background: #00AA66;
    color: white;
    font-size: 16px;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center; /* 居中水平和垂直 */
}

.card-content {
    background: #EFEFEF;
    color: #3D3D3D;
    font-size: 14px;
    text-align: center;
    height: 40px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center; /* 居中水平和垂直 */
}
</style>
