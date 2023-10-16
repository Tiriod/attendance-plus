<template>
    <view class="box-card">
        <!--欢迎信息-->
        <text class="welcome-text">{{ goodText }}</text>
        <view class="blank">
            <text class="tips-text">{{}}</text>
        </view>
        <!--账号输入-->
        <view class="data-bar">
            <image class="data-bar-icon" :src="'./static/icon/icon_mine.png'"/>
            <textarea v-model="username" class="data-edit data-edit-text" placeholder="学号/账号"></textarea>
        </view>
        <!--密码输入-->
        <view class="data-bar">
            <image class="data-bar-icon" :src="'./static/icon/icon_lock.png'"/>
            <input v-model="password" class="data-edit data-edit-text" :type="showPassword ? 'text' : 'password'"
                   placeholder="密码"/>
            <image class="data-bar-icon" style="background: unset"
                   :src="showPassword ? './static/icon/icon_eye_open.png' : './static/icon/icon_eye_close.png'"
                   @click="togglePasswordVisibility"/>
        </view>
        <!--记住密码-->
        <view class="remember-box">
            <checkbox class="remember-checkbox" :value="rememberPassword" @change="toggleRememberPassword"/>
            <text class="remember-text">记住密码</text>
        </view>
        <view class="blank"/>
        <view class="button" @click="login">
            <text class="button-text">登 录</text>
        </view>

    </view>
</template>

<script>
export default {
    name: "login-card",
    data() {
        return {
            showPassword: false,
            rememberPassword: false,
            goodText: '',
            daily_entry: '',
            username: '',
            password: ''
        }
    },
    methods: {
        // 密码可见
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        // 记住密码
        toggleRememberPassword() {
            this.rememberPassword = !this.rememberPassword;
        },
        // 更新欢迎信息
        updateGoodText() {
            const now = new Date();
            const hours = now.getHours();
            if (6 < hours && hours <= 9) {
                this.goodText = "早上好";
            } else if (9 < hours && hours <= 11) {
                this.goodText = "上午好";
            } else if (11 < hours && hours <= 13) {
                this.goodText = "中午好";
            } else if (13 < hours && hours <= 18) {
                this.goodText = "下午好";
            } else if (18 < hours && hours <= 24) {
                this.goodText = "晚上好";
            } else {
                this.goodText = "午夜好";
            }
        },
        login() {
            // 假设查询成功后，跳转到index页
            if (this.username === '2021028348' && this.password === '111111') {
                // 将登录状态设置为 true
                this.$store.dispatch('login', this.username);
                uni.switchTab({
                    url: '/pages/index/index'
                });
            } else {
                // 处理登录失败的情况，可以显示错误信息等
                this.$emit('login-failed', '账号密码错误');
            }
        }
    },
    created() {
        // 在页面创建时更新问候文本
        this.updateGoodText();
    }
}
</script>


<style scoped>
.box-card {
    width: 100%;
    background: white;
    border-radius: 20px 20px 0 0;
    padding: 20px 0;
}

.welcome-text {
    font-size: 28px;
    margin: 20px;
}

.tips-text {
    font-size: 14px;
    color: #9D9D9D;
}

.blank {
    min-height: 40px;
    margin: 10px 20px;
}

.data-bar {
    display: flex;
    height: 50px;
    background: #EFEFEF;
    border-radius: 5px;
    margin: 20px 20px;
    align-items: center; /* 垂直居中 */
}

.data-bar-icon {
    width: 24px;
    height: 24px;
    background: white;
    margin: 5px;
    border-radius: 5px;
    padding: 8px;
}

.data-edit {
    width: calc(100% - 100px);
    display: flex;
    height: 40px;
    margin: 5px;
    align-items: center; /* 垂直居中 */
}

.data-edit-text {
    line-height: 40px; /* 垂直居中 */
    font-size: 16px;
}

.button {
    display: flex;
    height: 50px;
    background: #115ff3;
    border-radius: 5px;
    margin: 10px 20px;
    justify-content: center;
    align-items: center; /* 垂直居中 */
}

.button-text {
    font-size: 20px;
    color: white;
}

.remember-box {
    display: flex;
    align-items: center;
    margin: 10px 20px;
}

.remember-checkbox {
    margin-right: 10px;
}

.remember-text {
    font-size: 16px;
    color: #555;
}
</style>