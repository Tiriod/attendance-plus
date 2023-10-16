<template>
    <view class="box-card">
        <information-form/>
        <classes-form/>
        <submit-button/>
        <view class="blank"/>
    </view>
</template>

<script>
import InformationEntry from "../self-study/information-entry.vue";
import InformationForm from "./lesson-information-form.vue";
import ClassesForm from "../self-study/classes-form.vue";
import SubmitButton from "../self-study/submit-button.vue";

export default {
    name: "lesson",
    components: {SubmitButton, ClassesForm, InformationForm, InformationEntry},
    data() {
        // 时间数据
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth() + 1; // 月份从0开始，需要加1
        const day = time.getDate();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return {
            attendance_time: year + "年" + month + "月" + day + "日" + " " + hours + ":" + minutes + ":" + seconds,
            attendance_week_times: time,
            attendance_week_day: time.getDay(),
        }
    }
}
</script>

<style lang="scss">
.blank{
    height: 20px;
}

</style>
