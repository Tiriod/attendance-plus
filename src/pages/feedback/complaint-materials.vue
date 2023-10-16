<template>
    <view class="box-card">
        <text class="title-text">申诉材料</text>
        <view class="image_bar">
            <image class="image" :src="'./static/image/image_add_photo.png'" @click="select_image()"/>
            <image class="image" v-for="(image, index) in image_list" :key="index" :src="image"/>
        </view>
        <view class="details-text-box">
            <textarea class="editable-text" v-model="editedText" placeholder="申诉材料具体"></textarea>
        </view>
        <view class="button">
            <text class="button-text">提交</text>
        </view>
    </view>
</template>
<script>
export default {
    name: "complaint-materials",
    data() {
        return {
            editedText: "",
            image_list: []
        };
    },
    methods: {
        select_image() {
            uni.chooseImage({
                count: 1, // 可以选择的图片数量
                sizeType: ["original", "compressed"], // 原图或压缩图
                sourceType: ["album", "camera"], // 相册或相机
                success: (res) => {
                    // 选择成功后，将图片加入到image_list中
                    this.image_list.push(res.tempFilePaths[0]);
                },
                fail: (error) => {
                    console.log("选择图片失败: " + JSON.stringify(error));
                },
            });
        }
    },
}
</script>


<style scoped>
.box-card {
    background: white;
    padding: 10px;
}

.title-text {
    font-size: 16px;
    margin: 10px;
}

.image_bar {
    overflow-x: auto; /* 使用scroll属性以便横向滚动 */
    overflow-y: hidden;
    white-space: nowrap;
    border-radius: 5px;
    margin: 5px;
}

.image {
    width: 80px;
    height: 80px;
    background: #EFEFEF;
    border-radius: 5px;
    margin: 0 5px;
    object-fit: cover;
}

.details-text-box {
    min-height: 60px;
    border: 2px solid #3D3D3D;
    border-radius: 5px;
    margin: 10px;
}

.editable-text {
    color: #3D3D3D; /* 设置文本颜色为黑色，或者其他对比度更高的颜色 */
    padding: 10px;
    border: none;
    resize: none;
}

.button {
    display: flex;
    margin: 10px;
    height: 40px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background: #00AA66;
}


.button-text {
    color: white;
    text-align: center;
}

</style>