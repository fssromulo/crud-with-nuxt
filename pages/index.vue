<template>
  <b-container fluid>
    <Welcome v-if="!isLoading" />
    <h1 v-else>
      Wait while we started the application...
    </h1>
  </b-container>
</template>

<script>
import { getToken } from '@/axios-config/index';
export default {
  name: 'IndexPage',
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async loadToken() {
      this.isLoading = true;
      await getToken();
      this.isLoading = false;
    },
  },
  async created() {
    await this.loadToken();
  }
}
</script>
