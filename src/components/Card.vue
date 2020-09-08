<template>
  <div class="card">
    <img src="https://upload.wikimedia.org/wikipedia/en/d/d4/Get_to_Heaven_Everything_Everything.jpg"
         alt="Piriri"
         style="max-width: 130px; border-radius: 2px;"
         class="center-img"/>
    <div style="margin-left: 12px">
      <h4>Playlist</h4>
      <p style="color: #B3B3B3">Just a chillass playlist</p>
    </div>
  </div>
</template>

<script>
export default {
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
  .card {
    background-color: $secondary;
    // text-align: center;
    font-size: 12px;
    width: 160px;
    height: 230px;
    padding: 20px 5px 5px 5px;
    border-radius: 8px;
  }
</style>
