import axios from 'axios'

export default {
  login () {
    return axios.get('api/login').then(res => res.data)
  },
  loginRedirect (code) {
    return axios.get('api/redirect', { params: { code } })
  },
  getUserPlaylists () {
    return axios.get('/api/playlists')
  },
}
