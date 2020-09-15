<template>
  <div id="unauthorized">
    <h1>User is not authenticated</h1>
  </div>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>

<style lang="scss">
#unauthorized {
  text-align: center;
  background-color: $background;
  color: white;
  min-height: 100vh;
}
</style>
