<template>
  <div class="home">
    <h2>Home</h2>
  </div>
</template>

<script>
import apiService from '../services/api.service'

export default {
  props: [],
  data () {
    return {
      playlists: []
    };
  },
  methods: {

  },
  mounted () {
    console.log("Mounted")
    apiService.getUserPlaylists().then(resp => console.log(resp))
  },
};
</script>

<style lang="scss">
  .home {
    background-color: $primary-background;
  }
</style>
