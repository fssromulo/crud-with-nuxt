<template>
  <div>
    <b-jumbotron header="Welcome!" lead="This is my NUXT C.R.U.D">
      <p>Check the code of this project on my github profile...</p>
      <b-button variant="primary" target="_blank" href="https://github.com/fssromulo/crud-with-nuxt">
        <b-icon icon="github" aria-label="refresh"></b-icon> See this on github</b-button>
      OR
      <nuxt-link to="/crud">
        <b-button variant="success">
          <b-icon icon="arrow-right" aria-label="refresh"></b-icon>
          Go to CRUD feature</b-button>
      </nuxt-link>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
