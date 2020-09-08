<template>
  <div class="home">
    <h3>Playlists</h3>
    <router-link class="card" v-for="pl in playlists" :key="pl.id" :to="{ name: 'Playlist', params: { id: pl.id }}">
      <Card />
    </router-link>
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
    apiService.getUserPlaylists().then(resp => {
      if (resp.items) {
        this.playlists = resp.items
        console.log(resp.items);
      }
    })
  },
};
</script>

<style lang="scss">
  .home {
    color: white;
    background-color: $primary;
  }
  .card {
    padding-left: 10px;
  }
</style>
