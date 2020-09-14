import Vue from 'vue'
import App from './App.vue'
import Unauthorized from './components/Unauthorized'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8000'

let template = `
<div id="root">
  <Unauthorized v-if="authFailed" />
  <App v-else />
</div>
`

new Vue({
  el: '#app',
  router,
  components: { App, Unauthorized },
  template: template,
  data () {
    return {
      authFailed: false
    };
  },
})
