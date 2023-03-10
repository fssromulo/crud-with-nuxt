<template>
    <div>
        <h1>
            this is the crud index...
        </h1>

        <hr />
        <div>
            <b-table striped hover :items="items" :fields="fields">
                <template #cell(active)="data">
                    <b :class="{ 'text-success': data.value, 'text-danger': !data.value }">{{ isActive(data.value) }}</b>
                </template>
                <template #cell(actions)="row">
                    <nuxt-link to="crud/save">
                        <b-button variant="success"> <b-icon icon="save-fill" aria-label="Save"></b-icon>
                            Save
                        </b-button>
                    </nuxt-link>

                    <nuxt-link :to="`crud/update/${row.item.id}`">
                        <b-button variant="warning"><b-icon icon="pencil-fill" aria-label="Update"></b-icon> Edit</b-button>
                    </nuxt-link>

                    <nuxt-link :to="`crud/${row.item.id}`">
                        <b-button variant="info"> <b-icon icon="person-badge-fill" aria-label="Delete"></b-icon> Show
                        </b-button>
                    </nuxt-link>

                    <b-button variant="danger"> <b-icon icon="trash-fill" aria-label="Delete"></b-icon> Delete</b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: ['id', 'name', 'active', 'actions'],
            items: [
                { active: true, id: 40, name: 'Dickerson' },
                { active: false, id: 21, name: 'Larsen' },
                { active: false, id: 89, name: 'Geneva' },
                { active: true, id: 38, name: 'Jami' }
            ]
        }
    },
    methods: {
        isActive(active) {
            return active ? 'Enabled' : 'Disabled'
        }
    }
}
</script>