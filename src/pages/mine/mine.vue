<template>
    <view>
        <user-card user_name="洪晨浩" :user_id=user_id :class_name="'人工智能2103'" :identity="'超级管理员'"/>
        <function-card icon_url="./static/icon/icon_inquiry.png" :function_name="'考勤信息查询'"
                       page_route="/pages/inquiry/inquiry"/>
        <function-card icon_url="./static/icon/icon_edit.png" :function_name="'考勤信息修改'"
                       page_route="/pages/edit/edit"/>
        <function-card icon_url="./static/icon/icon_envelope.png" :function_name="'问题反馈记录'"
                       page_route="/pages/appeal/appeal"/>
        <data-card/>
        <view class="button" @click="sign_out">
            <text class="button-text">退出登录</text>
        </view>
    </view>
</template>
<script>
import UserCard from "./user-card.vue";
import FunctionCard from "./function-card.vue";
import DataCard from "./data-card.vue";
import {methods} from "uview-ui/libs/mixin/mixin";

export default {
    name: "mine",
    components: {DataCard, FunctionCard, UserCard},
    data() {
        return {
            user_id: ''
        }
    },
    created() {
        // 在组件创建时检查用户登录状态
        console.log('User is logged in:', this.$store.state.isLoggedIn);
        console.log('学生学号', this.$store.state.user);
        this.user_id = this.$store.state.user

        // 如果未登录，执行登出操作
        if (this.$store.state.isLoggedIn === false) {
            this.sign_out();
        }
    },
    methods: {
        sign_out() {
            if (this.$store.state.isLoggedIn === true) {
                // 从本地存储中删除令牌
                localStorage.removeItem('token');
                // 设置登录状态为 false
                this.$store.dispatch('logout');
            }
            uni.reLaunch({
                url: '/pages/login/login' // 根据实际路径配置
            });
        }
    },
}

</script>

<style scoped>
.button {
    width: 50%;
    height: 40px;
    border-radius: 5px;
    background: #00AA66;
    margin: 0 auto; /* 使用 auto 来水平居中 */
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}

.button-text {
    font-size: 16px;
    color: white;
    font-weight: bold;
}
</style>