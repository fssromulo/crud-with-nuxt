<template>
    <b-container fluid>
        <br />
        <BackButton />
        <br />
        <b-card title="This is the CRUD index..." sub-title="Below you can see some user data:"></b-card>
        <br />

        <b-table striped hover :busy="isLoading" :items="items" :fields="fields">
            <template #cell(active)="data">
                <b :class="{ 'text-success': data.value, 'text-danger': !data.value }">
                    {{ isActive(data.value) }}
                </b>
            </template>
            <template #cell(actions)="row">
                <nuxt-link to="crud/save">
                    <b-button size="sm" variant="success"> <b-icon icon="save-fill" aria-label="Save"></b-icon>
                        Save
                    </b-button>
                </nuxt-link>

                <nuxt-link :to="`crud/update/${row.item.id}`">
                    <b-button size="sm" variant="warning">
                        <b-icon icon="pencil-fill" aria-label="Update"></b-icon>
                        Edit
                    </b-button>
                </nuxt-link>

                <b-button size="sm" variant="danger" @click="showMsgBoxOne(row.item.id)">
                    <b-icon icon="trash-fill" aria-label="Delete"></b-icon>
                    Delete
                </b-button>
            </template>

            <template #table-busy>
                <div class="text-center text-info my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
        </b-table>
    </b-container>
</template>

<script>
import getAxios from '@/axios-config/index';
import BackButton from '~/components/BackButton.vue';
export default {
    data() {
        return {
            fields: ["id", "name", "active", "actions"],
            items: [],
            isLoading: true,
        };
    },
    methods: {
        isActive(active) {
            return active ? "Enabled" : "Disabled";
        },
        async loadData() {
            this.isLoading = true;
            const responseToken = await getAxios().get("/house_rules");
            this.items = responseToken.data.data.entities;
            this.isLoading = false;
        },

        async deleteData() {
            try {
                this.isLoading = true;
                const idToDelete = localStorage.getItem('idToDelete');
                const responseToken = await getAxios().delete(`/houfse_rules/${idToDelete}`);

                if (responseToken.status >= 400 && responseToken.status < 600) {
                    throw Error('An error has been occurred on delete a data.');
                }

                localStorage.removeItem('idToDelete');
                this.isLoading = false;
            } catch (err) {
                console.error(err);
                localStorage.removeItem('idToDelete');
                this.isLoading = false;
            }

        },

        async showMsgBoxOne(id) {
            localStorage.setItem('idToDelete', id);
            this.boxOne = ''
            const value = await this.$bvModal.msgBoxConfirm('Do you really wanna to remove this data?');
            if (value) {
                await this.deleteData();
                this.boxOne = value;
                await this.loadData();
            }

        },
    },
    async mounted() {
        await this.loadData();
    },
    components: { BackButton }
}
</script>