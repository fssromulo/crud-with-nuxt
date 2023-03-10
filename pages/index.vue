<template>
  <b-container fluid>
    <b-overlay :show="isLoading" rounded="sm">
      <Welcome />

      <template #overlay>
        <div class="text-center">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Please wait...</p>

        </div>
      </template>
    </b-overlay>
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
