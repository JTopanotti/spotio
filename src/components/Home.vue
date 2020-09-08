<template>
  <div class="home">
    <h3>Playlists</h3>
    <vue-horizontal-list :items="playlists" :options="{responsive: [{end: 576, size: 1}, {start: 576, end: 768, size: 2},{size: 10}]}">
      <template v-slot:default="{playlist}">
        <!-- <Card /> -->
        <p>{{playlist.id}}</p>
      </template>
    </vue-horizontal-list>
  </div>
  <!-- <router-link v-slot:default="{playlist}" class="card" :to="{ name: 'Playlist', params: { id: playlist.id }}">
    <Card />
  </router-link> -->
</template>

<script>
import apiService from '../services/api.service'
// import Card from './Card'
import VueHorizontalList from 'vue-horizontal-list'

export default {
  components: {
    // Card,
    VueHorizontalList
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
