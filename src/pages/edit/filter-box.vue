<template>
    <view class="box-card">
        <filter-button ref="timeFilterButton"
                       :title_text="'时间'"
                       :choice_list="['本周']"/>
        <filter-button ref="classFilterButton" :title_text="'班级'"
                       :choice_list="['不限','人工智能1','人工智能2','人工智能3','人工智能4','人工智能5']"/>
        <filter-button ref="typeFilterButton" :title_text="'类型'"
                       :choice_list="['不限','自习考勤','上课考勤','社团考勤']"/>
        <filter-button ref="stateFilterButton" :title_text="'考勤状态'"
                       :choice_list="['不限','出勤','迟到','旷课','请假']"/>
        <search ref="search"/>
        <confirm-button :confirm_list="['重置', '确认']" @confirm-click="handleReset"/>
    </view>
    <scrollable-data-form ref="scrollableDataForm"/>
</template>
<script>
import FilterButton from "./filter-button.vue";
import ConfirmButton from "./confirm-button.vue";
import Search from "./search.vue";
import ScrollableDataForm from "./scrollable-data-form.vue";

export default {
    name: "filter-box",
    components: {ScrollableDataForm, Search, ConfirmButton, FilterButton},
    data() {
        return {
            filters: {
                time: null, // 保存时间筛选条件
                class: null, // 保存班级筛选条件
                type: null, // 保存类型筛选条件
                state: null, // 保存考勤状态筛选条件
            }
        }
    },
    methods: {
        handleReset(confirm) {
            if (confirm === "重置") {
                // 逐个清空 filter-button 组件的选项
                this.$refs.timeFilterButton.resetSelection();
                this.$refs.classFilterButton.resetSelection();
                this.$refs.typeFilterButton.resetSelection();
                this.$refs.stateFilterButton.resetSelection();
                // 清除输入框
                this.$refs.search.clearInput();
                // 添加其他 filter-button 组件的清空操作
            } else if (confirm === "确认") {
                // 调用 searchData 方法并传递筛选条件
                this.$refs.scrollableDataForm.searchData();
            }
        }
    }
}
</script>
<style scoped>
.box-card {
    border-radius: 5px;
    margin: 10px;
    background: white;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
}
</style>