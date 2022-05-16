import 'dotenv/config'
import axios from 'axios'


const api_url = process.env.REACT_APP_API

const api = axios.create({
    baseURL: api_url
})

export default api