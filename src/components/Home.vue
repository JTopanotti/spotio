<template>
  <div class="home">
    <h3>Playlists</h3>
    <Card />
  </div>
</template>

<script>
import apiService from '../services/api.service'
import Card from './Card'

export default {
  components: {
    Card
  },
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
    color: white;
    background-color: $primary;
  }
</style>
