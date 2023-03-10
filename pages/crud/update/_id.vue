<template>
    <b-container fluid>
        <Form :userId="userId"></Form>
    </b-container>
</template>

<script>
import Form from '~/components/Form.vue';
export default {
    name: "Update",
    components: { Form },
    computed: {
        userId() {
            return parseInt(this.$route.params.id);
        }
    },
}
</script>
