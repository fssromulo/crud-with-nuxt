<template>
  <div>
    <b-jumbotron header="Welcome!" lead="This is my NUXT C.R.U.D">
      <p>Check the code of this project on my github profile...</p>
      <b-button variant="primary" target="_blank" href="https://github.com/fssromulo/">See this on github</b-button>
      <nuxt-link to="/crud">
        <b-button variant="success">Go to CRUD feauture</b-button>
      </nuxt-link>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
