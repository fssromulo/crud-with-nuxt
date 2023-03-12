<template>
    <b-container fluid>
        <b-row>
            <b-col col sm="12">
                <b-jumbotron bg-variant="dark" text-variant="white">
                    <template #header>My CRUD - Error Page</template>

                    <template #lead>
                        It was not possible load this page. Please come back to <nuxt-link to="/">home page</nuxt-link> and
                        try again.
                    </template>
                </b-jumbotron>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'DefaultError'
}
</script>
