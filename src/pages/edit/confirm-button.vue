<template>
    <view class="big-content">
        <view class="box-card">
            <view class="button" v-for="confirm in confirm_list" :key="confirm" @click="handleConfirmClick(confirm)">
                <view class="button-text">{{ confirm }}</view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    name: "confirm-button",
    props: {
        confirm_list: Array
    },
    methods: {
        handleConfirmClick(confirm) {
            // Emit an event to the parent component
            this.$emit("confirm-click", confirm);
        }
    },
}
</script>


<style scoped>
.big-content {
    display: flex;
    width: 100%;
    flex-direction: column; /* 让内部组件垂直排列 */

}

.box-card {
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
}

.button {
    width: calc(50% - 10px);
    height: 30px;
    display: flex;
    box-shadow: 0 0 0 2px #EFEFEF;
    border-radius: 1px;
    background: #868686;
    margin: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.button-text {
    font-size: 16px;
    margin: 5px;
    color: white;
}
</style>