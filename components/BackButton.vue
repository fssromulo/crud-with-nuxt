<template>
    <div>
        <span class="backButton" @click="backToWelcomePage"> <b-icon icon="arrow-left" aria-label="Update"></b-icon> Back
        </span>
    </div>
</template>

<script>
export default {
    name: 'BackButton',
    methods: {
        backToWelcomePage() {
            this.$router.go(-1);
        },
    }
}
</script>


<style scoped>
.backButton {
    cursor: pointer;
}
</style>