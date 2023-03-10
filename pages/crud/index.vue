<template>
    <div>
        <h1>
            this is the crud index...
        </h1>

        <hr />
        <div>
            <b-table striped hover :busy="isLoading" :items="items" :fields="fields">
                <template #cell(active)="data">
                    <b :class="{ 'text-success': data.value, 'text-danger': !data.value }">{{ isActive(data.value) }}</b>
                </template>
                <template #cell(actions)="row">
                    <nuxt-link to="crud/save">
                        <b-button size="sm" variant="success"> <b-icon icon="save-fill" aria-label="Save"></b-icon>
                            Save
                        </b-button>
                    </nuxt-link>

                    <nuxt-link :to="`crud/update/${row.item.id}`">
                        <b-button size="sm" variant="warning"><b-icon icon="pencil-fill" aria-label="Update"></b-icon>
                            Edit</b-button>
                    </nuxt-link>

                    <nuxt-link :to="`crud/${row.item.id}`">
                        <b-button size="sm" variant="info"> <b-icon icon="person-badge-fill" aria-label="Delete"></b-icon>
                            Show
                        </b-button>
                    </nuxt-link>

                    <b-button size="sm" variant="danger"> <b-icon icon="trash-fill" aria-label="Delete"></b-icon>
                        Delete</b-button>
                </template>

                <template #table-busy>
                    <div class="text-center text-info my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        <strong>Loading...</strong>
                    </div>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import getAxios from '@/axios-config/index';
export default {
    data() {
        return {
            fields: ['id', 'name', 'active', 'actions'],
            items: [],
            isLoading: true,
        }
    },
    methods: {
        isActive(active) {
            return active ? 'Enabled' : 'Disabled'
        },
        async loadData() {
            this.isLoading = true;
            const responseToken = await getAxios().get('https://sys-dev.searchandstay.com/api/admin/house_rules');
            console.log('responseToken aaaa -->', responseToken);

            this.items = responseToken.data.data.entities;
            this.isLoading = false;
        }
    },
    async mounted() {
        await this.loadData();
    }
}
</script>