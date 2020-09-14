<template>
  <div id="login">
  </div>
</template>

<script>
import apiService from '../../services/api.service'

export default {
  props: [],
  data () {
    return {
    };
  },
  methods: {

  },
  mounted () {
    console.log("Mounted");
    apiService.login().then(resp => console.log(resp))
  }
};
</script>

<style lang="scss">
</style>
