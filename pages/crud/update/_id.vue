<template>
    <b-container fluid>

        <br />
        <BackButton />

        <b-card :title="`Editing data with id: ${userId}`" sub-title="See the data below"></b-card>
        <br />

        <div>
            <b-form>
                <b-row>
                    <b-col col sm="5">
                        <label class="sr-only" for="inline-form-input-name">Name</label>
                        <b-form-input :disabled="isLoading" v-model="user.name" id="inline-form-input-name"
                            class="mb-2 mr-sm-2 mb-sm-0" placeholder="Name"></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col col sm="5">

                        <b-form-checkbox :disabled="isLoading" v-model="user.active" name="check-button">
                            Active <b>(Checked: {{ user.active }})</b>
                        </b-form-checkbox>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col col sm="5">
                        <b-button :disabled="isLoading" type="button" @click="onSubmit" variant="primary">Save</b-button>
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
    data() {
        return {
            user: {},
            isLoading: true,
            teste: 1,
        }
    },
    computed: {
        userId() {
            return this.$route.params.id
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

                const responseToken = await getAxios().put(`/house_rules/${this.userId}`, { "house_rules": objBody });
                this.user = responseToken.data.data;
                this.$router.push('/crud');
                this.isLoading = false;
            } catch (error) {
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
        console.log('update ->', this.$route.params.id)
        await this.loadUser()
    }
}
</script>
