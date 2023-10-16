<template>
    <view class="box-card">
        <view class="button" v-for="choice in choice_list" @click="select_choice(choice)">
            <text class="button-text">{{ choice }}</text>
        </view>
    </view>
</template>
<script>
import FilterButton from "./filter-button.vue";

export default {
    name: "update-state-card",
    components: {FilterButton},
    data() {
        return {
            choice_list: ['出勤', '迟到', '旷课', '请假'],
        }
    },
    methods: {
        select_choice(choice) {
            // 触发自定义事件，将选择的内容传递给父组件
            this.$emit('update-attendance-state', choice);
        }
    },
}
</script>


<style scoped>
.box-card {
    display: flex;
    flex-wrap: wrap;
    background: white;
    margin: 5px;
    border-radius: 5px;
    align-items: center;
}

.button {
    width: calc(25% - 10px);
    height: 30px;
    margin: 5px;
    background: #EFEFEF;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #3D3D3D;
    display: flex; /* 让按钮内容垂直居中 */
    align-items: center; /* 垂直居中 */
    justify-content: center;
}
.button:hover {
    /* 鼠标悬停时，减小不透明度 */
    filter: brightness(80%); /* 鼠标悬停时降低明亮度 20% */
}

.button-text {
    text-align: center; /* 水平居中对齐文本 */
    font-size: 14px;
}
.button-text {

}
</style>