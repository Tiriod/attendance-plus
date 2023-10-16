<template>
    <view class="big-content">
        <text class="title-text">学号搜索</text>
        <input v-model="searchValue" ref="inputElement" type="text" class="input-box" placeholder="输入学号">
    </view>
</template>
<script>
export default {
    name: "search",
    data(){
        return{
            searchValue: ""
        }
    },
    methods: {
        clearInput() {
            // 清除输入框的值
            this.searchValue = "";
        }
    },
}
</script>


<style scoped>
.big-content {
    display: flex;
    width: 100%;
    flex-direction: column;
}

.title-text {
    font-size: 16px;
    margin: 5px;
}

.input-box {
    width: calc(50% - 10px);
    height: 24px;
    box-shadow: 0 0 0 1px #3D3D3D;
    display: flex;
    background: white;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: pointer;
    text-align: center; /* 让占位符文字居中 */
}

.input-box::placeholder {
    color: #999;
    text-align: center; /* 让占位符文字居中 */
}

.input-box:focus {
    outline: none;
}
</style>