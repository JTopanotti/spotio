import axios from 'axios'

export default {
  getUserPlaylists () {
    return axios.get('/api/playlists').then(res => res.data)
  },
}
