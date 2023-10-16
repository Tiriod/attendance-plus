<template>
    <view class="box-card">
        <information-entry icon_url="./static/icon/icon_clock.png" module_text="考勤时间" open_column
                           :default_data="attendance_time"/>
        <information-entry icon_url="./static/icon/icon_calendar.png" module_text="本周周次" open_selector
                           :options="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]"/>
        <information-entry icon_url="./static/icon/icon_star.png" module_text="星期时间" open_selector
                           :options="['星期一', '星期二', '星期三', '星期三', '星期四', '星期五', '星期六', '星期日']"/>
        <information-entry icon_url="./static/icon/icon_pause.png" module_text="课时开始" open_selector
                           :options="[1,2,3,4,5,6,7,8,9,10,11]"/>
        <information-entry icon_url="./static/icon/icon_play.png" module_text="课时结束" open_selector
                           :options="[1,2,3,4,5,6,7,8,9,10,11]"/>
        <information-entry icon_url="./static/icon/icon_control.png" module_text="操作人员" open_column
                           :default_data="operator"/>
    </view>
</template>
<script>
import InformationEntry from "../self-study/information-entry.vue";

export default {
    name: "information-form",
    components: {InformationEntry},
    data() {
        return {
            attendance_time: this.get_time(),
            operator: "洪晨浩"
        }
    },
    created() {
        this.update_time(); // 更新时间
        this.timer = setInterval(this.update_time, 1000); // 每秒更新时间
    },
    beforeDestroy() {
        clearInterval(this.timer); // 清除定时器
    },
    methods: {
        get_time() {
            const time = new Date();
            const year = time.getFullYear();
            const month = ('0' + (time.getMonth() + 1)).slice(-2);
            const day = ('0' + time.getDate()).slice(-2);
            const hours = ('0' + time.getHours()).slice(-2);
            const minutes = ('0' + time.getMinutes()).slice(-2);
            const seconds = ('0' + time.getSeconds()).slice(-2);
            return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
        },
        update_time() {
            this.attendance_time = this.get_time();
        }
    },
}
</script>


<style scoped>
.box-card {
    min-height: 100px;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    background: white;
}


</style>