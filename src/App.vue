<template>
  <div id="app">
    <header>
      <h1><img src="https://iamketan.com.au/lab/spotify/spotify-icon-green.png" alt="Spotify" title="Spotify"> Spotio</h1>
      <p>A simple example of css grid in action.</p>
    </header>
    <div class="main">
      <SideMenu />
      <router-view />
    </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'

export default {
  name: 'App',
  components: {
    SideMenu
  },
  data () {
    return {
    };
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $background;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  color: white;
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
}

:root {
    --grid-gap: 30px;
    --grid-min: 160px;
    --grid-items: auto-fill;
}

* {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
}

.main {
  display: grid;
  grid-template-columns: 10% 90%;
}

header {
    display: flex;
    color: white;
    align-items: center;
    padding: 10px;
    background: $spotify-black;
    @media screen and (max-width:768px) {
        flex-flow: column;
    }
    h1, p {
        width: 50%;
        @media screen and (max-width:768px) {
            width: 100%;
        }
    }
    p {
        text-align: right;
        color: rgba(white, 0.65);
        @media screen and (max-width:768px) {
            text-align: left !important;
            margin-top: 10px;
            text-indent: 63px;
        }
    }
    img {
        width: 48px;
        height: 48px;
        vertical-align: middle;
        margin-right: 10px;
    }
}
</style>
