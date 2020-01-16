import Axios from 'axios'

const http = Axios.create()

http.interceptors.request.use(config => {
  return config
}, error => {
  return { data: { status: -9999, msg: error.message } }
})

http.interceptors.response.use(response => {
  return response
}, error => {
  return { data: { status: -9999, msg: error.message } }
})

export default http
