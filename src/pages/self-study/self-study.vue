<template>
    <view>
        <information-form/>
        <classes-form/>
        <submit-button/>
        <view class="blank"/>
    </view>
</template>

<script>
import InformationForm from "./information-form.vue";
import ClassesForm from "./classes-form.vue";
import SubmitButton from "./submit-button.vue";
import SelfStudyInformationForm from "./information-form.vue";

export default {
    components: {SelfStudyInformationForm, SubmitButton, ClassesForm, InformationForm},
    data() {
        return {};
    }
}
</script>

<style lang="scss">
.blank{
    height: 20px;
}
</style>
