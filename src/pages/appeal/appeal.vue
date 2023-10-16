<template>
    <view>
        <div v-for="item in items" :key="item.student_id">
            <appeal-item-card
                    :student_avatar="item.student_avatar"
                    :student_name="item.student_name"
                    :student_class="item.student_class"
                    :student_id="item.student_id"
                    :appeal_datetime="item.appeal_datetime"
            />
        </div>
    </view>
</template>

<script>
import AppealItemCard from "./appeal-item-card.vue";

export default {
    components: { AppealItemCard },
    data() {
        return {
            items: [
                {
                    student_avatar: "./static/avatar1.png",
                    student_name: "洪晨浩",
                    student_class: "人工智能2103",
                    student_id: 2021028348,
                    appeal_datetime: "2023-10-27 10:00 AM"
                },
                {
                    student_avatar: "./static/avatar1.png",
                    student_name: "杭科扛把子涛少",
                    student_class: "人工智能2103",
                    student_id: 2021028334,
                    appeal_datetime: "2023-10-27 10:00 AM"
                },
            ]
        };
    }
}
</script>

<style lang="scss">
</style>
