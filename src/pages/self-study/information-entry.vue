<template>
    <view>
        <view class="card-block">
            <image class="icon-image" :src="icon_url"></image>
            <text class="text">{{ module_text }}</text>
            <view class="data-column" v-if="open_column">
                <text class="data-column-text">{{ default_data }}</text>
            </view>
            <select class="data-column data-column-text" v-if="open_selector">
                <option class="data-column-text" v-for="option in options" :value="option">{{ option }}</option>
            </select>
        </view>
    </view>
</template>
<script>
export default {
    name: "information-entry",
    props: {
        icon_url: String,
        module_text: String,
        default_data: String,
        open_selector: Boolean, // 增加布尔属性来控制是否渲染选择器组件
        open_column: Boolean,
        options: Array,
    },
    data() {
        return {

        }
    },

};
</script>

<style scoped>
.icon-image {
    width: 24px;
    height: 24px;
    margin: 5px;
    border-radius: 5px;
}

.card-block {
    display: flex;
    align-items: center;
}

.text {
    font-size: 16px;
    font-weight: bold;
}

.data-column {
    min-width: 100px;
    height: 24px;
    border: #3D3D3D solid 1px;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center; /* 居中对齐 */
    justify-content: center; /* 水平居中对齐 */
    padding-left: 10px;
    padding-right: 10px;
    background: white;
}

.data-column-text {
    font-size: 14px;
    text-align: center; /* 可选，如果需要居中对齐文本内容 */
}
</style>
