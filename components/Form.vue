<template>
    <b-container fluid>

        <br />
        <BackButton />
        <b-card :title="title" sub-title="Fill the fields below"></b-card>
        <br />
        <div>
            <b-form @submit.prevent="onSubmit">
                <b-row>
                    <b-col col sm="5">
                        <label class="sr-only" for="inline-form-input-name">Name</label>
                        <b-form-input :disabled="isLoading" v-model="user.name" id="inline-form-input-name"
                            class="mb-2 mr-sm-2 mb-sm-0" placeholder="Name" required></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col col sm="5">
                        <b-form-checkbox :disabled="isLoading" v-model="user.active" name="check-button">
                            Active
                        </b-form-checkbox>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col col sm="5">
                        <b-button :disabled="isLoading" type="submit" variant="primary">Save</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </div>
    </b-container>
</template>

<script>
import getAxios from '@/axios-config/index';
export default {
    name: 'Update',
    props: {
        userId: {
            type: Number,
            default: 0,
            required: false
        },
    },
    data() {
        return {
            user: { name: '', active: true },
            isLoading: true,
        }
    },
    computed: {
        title() {
            return !!this.userId ? `Editing data with id: ${this.userId}` : 'Create a new data'
        }
    },
    methods: {

        async onSubmit() {
            try {
                this.isLoading = true;

                const objBody = {
                    "name": this.user.name,
                    "active": this.user.active ? 1 : 0
                }

                const shouldUpdateIfHasValidId = !!this.userId;
                if (shouldUpdateIfHasValidId) {
                    await getAxios().put(`/house_rules/${this.userId}`, { "house_rules": objBody });
                } else {
                    await getAxios().post(`/house_rules/`, { "house_rules": objBody });
                }

                this.$router.push('/crud');
                this.isLoading = false;
            } catch (error) {
                console.error(error)
                this.isLoading = false;
            }
        },

        async loadUser() {
            this.isLoading = true;
            const responseToken = await getAxios().get(`/house_rules/${this.userId}`);
            this.user = responseToken.data.data;
            this.user.active = this.user.active ? true : false;
            this.isLoading = false;
        }

    },
    async mounted() {
        if (!!this.userId) {
            await this.loadUser();
        } else {
            this.isLoading = false;
        }
    }
}
</script>
