import axios from 'axios'

function checkAuth(resp) {
  if (resp.status === 204) {
    this.$root.authFailed = true
  }
  return resp
}

export default {
  login () {
    return axios.get('api/login').then(res => res.data)
  },
  loginRedirect (code) {
    return axios.get('api/redirect', { params: { code } })
  },
  getUserPlaylists () {
    return axios.get('/api/playlists').then(resp => checkAuth.bind(this)(resp))
  },
}
