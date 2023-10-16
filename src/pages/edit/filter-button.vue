<template>
    <view class="big-content">
        <text class="title-text">{{ title_text }}</text>
        <view class="box-card">
            <view class="button" :class="{ selected: selectedChoices.includes(choice) }"
                    v-for="choice in choice_list" :key="choice" @click="toggleSelection(choice)">
                <view class="button-text" :class="{ selected: selectedChoices.includes(choice) }">{{ choice }}</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "filter-button",
    props: {
        title_text: String,
        choice_list: Array
    },
    data() {
        return {
            selectedChoices: [],
        };
    },
    methods: {
        toggleSelection(choice) {
            // 清除所有选中项
            this.selectedChoices = [];
            // 选中当前项
            this.selectedChoices.push(choice);
        },
        resetSelection() {
            // 重置选中项
            if (this.choice_list.length > 0) {
                this.toggleSelection(this.choice_list[0]); // 将第一个 choice 选中
            }
        }
    },
    created() {
        if (this.choice_list.length > 0) {
            this.toggleSelection(this.choice_list[0]); // 将第一个 choice 选中
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
.title-text {
    font-size: 16px;
    margin: 5px;
}

.box-card {
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
}

.button {
    width: calc(25% - 10px);
    height: 24px;
    box-shadow: 0 0 0 1px #3D3D3D;
    display: flex;
    background: white;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: pointer;
}

.button.selected {
    box-shadow: 0 0 0 1px #3D3D3D;
    background: #00AA66;
}

.button-text {
    font-size: 12px;
    margin: 5px;
}

.button-text.selected {
    font-weight: bold;
    color: white;
}
</style>