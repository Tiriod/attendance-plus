<template>
    <view class="box-card">
        <information-entry icon_url="./static/icon/icon_class.png" module_text="班级选择" :options="class_list" open_selector/>
        <student-card :students="students" />
    </view>

</template>
<script>
import InformationEntry from "./information-entry.vue";
import StudentCard from "./student-card.vue";

export default {
    name: "classes-form",
    components: {StudentCard, InformationEntry},
    data(){
        return{
            class_list:["电气2311", "人工智能2203", "人工智能2303"],
            students: [
                { student_id: 2021028301, student_name: "张三", student_gender: "男" },
                { student_id: 2021028302, student_name: "李四", student_gender: "女" },
                { student_id: 2021028303, student_name: "王五", student_gender: "男" },
                { student_id: 2021028304, student_name: "王五", student_gender: "男" },
                { student_id: 2021028305, student_name: "王五", student_gender: "男" },
                { student_id: 2021028306, student_name: "王五", student_gender: "男" },
                { student_id: 2021028307, student_name: "王五", student_gender: "男" },
                { student_id: 2021028308, student_name: "王五", student_gender: "男" },
                { student_id: 2021028309, student_name: "王五", student_gender: "男" },
                { student_id: 2021028310, student_name: "王五", student_gender: "男" },
                { student_id: 2021028311, student_name: "王五", student_gender: "男" },
            ],
        }
    }
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