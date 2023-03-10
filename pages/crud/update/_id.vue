<template>
    <div>
        updated user with id: {{ userId }}
    </div>
</template>

<script>
export default {
    name: 'Update',
    computed: {
        userId() {
            return this.$route.params.id
        }
    },
    mounted() {
        console.log('update ->', this.$route.params.id)
    }
}
</script>
