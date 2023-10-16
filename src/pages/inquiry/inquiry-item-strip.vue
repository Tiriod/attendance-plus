<template>
    <view>
        <view class="box-content">
            <view class="point"/>
            <text class="text">{{strip_name}}</text>
            <text class="text" :style="{ color: color_switch(strip_data) }">{{ strip_data }}</text>
        </view>
    </view>

</template>
<script>
export default {
    name: "inquiry-item-strip",
    props: {
        strip_name: String,
        strip_data: String
    },
    methods: {
        color_switch() {
            switch (this.strip_data) {
                case "出勤":
                    return "#00AA66";
                case "迟到":
                    return "#F1E024";
                case "旷课":
                    return "#E8303F";
                case "请假":
                    return "#309BE8";
                default:
                    return "#3D3D3D";
            }
        }
    },
}
</script>


<style scoped>
.box-content {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 10px 0;
}

.point {
    width: 30px;
    height: 30px;
    background: #00aa66;
    border-radius: 5px;
}

.text {
    font-size: 16px;
    color: #3D3D3D;
    margin: 0 10px;
}

</style>