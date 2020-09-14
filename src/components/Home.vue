<template>
  <div id="home">
    <Playlists />
  </div>
</template>

<script>
import Playlists from './playlist/Playlists'

export default {
  components: {
    Playlists
  },
  props: [],
  data () {
    return {
    };
  },
  methods: {

  },
};
</script>

<style lang="scss">
  #home {
    color: white;
    background-color: $background;
  }
</style>
