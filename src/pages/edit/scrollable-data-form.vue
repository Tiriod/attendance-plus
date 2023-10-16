<template>
    <view class="scrollable-container">
        <edit-student-card v-for="i in inquire_data.length" :key="i"
                           :classes_name="inquire_data[i-1].classes_name"
                           :student_id="inquire_data[i-1].student_id" :student_name="inquire_data[i-1].student_name"
                           :attendance_state="inquire_data[i-1].attendance_state"
                           :record_time="inquire_data[i-1].record_time"/>
        <view class="blank"/>
    </view>
</template>
<script>
import EditStudentCard from "./edit-student-card.vue";

export default {
    name: "scrollable-data-form",
    components: {EditStudentCard},
    data() {
        return {
            inquire_data: [
                {
                    classes_name: "人工智能2103",
                    student_id: 2021028348,
                    student_name: "洪晨浩",
                    attendance_state: "出勤",
                    record_time: "2023-10-25 09:00 AM"
                },
                {
                    classes_name: "计算机科学101",
                    student_id: 2021028350,
                    student_name: "张三",
                    attendance_state: "迟到",
                    record_time: "2023-10-25 09:30 AM"
                },
            ]
        }
    },
    methods: {
        searchData() {
            this.inquire_data = [
                {
                    classes_name: "新的班级",
                    student_id: 123456,
                    student_name: "新学生",
                    attendance_state: "出勤",
                    record_time: "2023-10-26 10:00 AM"
                }, {
                    classes_name: "新的班级",
                    student_id: 123456,
                    student_name: "新学生",
                    attendance_state: "出勤",
                    record_time: "2023-10-26 10:00 AM"
                }, {
                    classes_name: "新的班级",
                    student_id: 123456,
                    student_name: "新学生",
                    attendance_state: "出勤",
                    record_time: "2023-10-26 10:00 AM"
                }, {
                    classes_name: "新的班级",
                    student_id: 123456,
                    student_name: "新学生",
                    attendance_state: "出勤",
                    record_time: "2023-10-26 10:00 AM"
                }, {
                    classes_name: "新的班级",
                    student_id: 123456,
                    student_name: "新学生",
                    attendance_state: "出勤",
                    record_time: "2023-10-26 10:00 AM"
                }, {
                    classes_name: "新的班级",
                    student_id: 123456,
                    student_name: "新学生",
                    attendance_state: "出勤",
                    record_time: "2023-10-26 10:00 AM"
                }, {
                    classes_name: "新的班级",
                    student_id: 123456,
                    student_name: "新学生",
                    attendance_state: "出勤",
                    record_time: "2023-10-26 10:00 AM"
                },
            ];
        }
    }
}
</script>


<style scoped>
.scrollable-container {
    height: 100%;
    overflow: auto;
    background: white;
}

.blank {
    height: 20px;
}
</style>