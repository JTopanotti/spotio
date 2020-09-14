<template>
  <div id="playlists">
    <section>
      <h3>Playlists</h3>
    </section>
    <transition-group tag="main" name="card" class="grid" v-if="this.playlists">
      <router-link tag="ul" v-for="(pl, index) in playlists" :key="index" :to="{ name: 'Playlist', params: { id: pl.id }}">
        <Card :name="pl.name" :description="pl.description" :image="pl.images[0].url" />
      </router-link>
    </transition-group>
  </div>
</template>

<script>
import apiService from '../../services/api.service'
import Card from '../Card'

export default {
  props: [],
  components: {
    Card
  },
  data () {
    return {
      playlists: []
    };
  },
  methods: {
  },
  mounted () {
    apiService.getUserPlaylists().then(resp => {
      console.log(resp);
      if (resp.status === 204) {
        this.$root.authFailed = true
      }
      if (resp.items) {
        this.playlists = resp.items
      }
    })
  },
};
</script>

<style lang="scss">
  #playlists {
    padding-left: 30px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-items), minmax(var(--grid-min), 1fr));
    grid-gap: var(--grid-gap);
    counter-reset: rank;
    padding: 10px;
  }
</style>
