<template>
    <div>
        show user with id: {{ userId }}
    </div>
</template>

<script>
export default {
    name: 'ShowCrud',
    computed: {
        userId() {
            return this.$route.params.id
        }
    },
    mounted() {
    }
}
</script>
