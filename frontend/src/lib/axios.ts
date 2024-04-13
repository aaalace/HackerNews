import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const app = axios.create({
    baseURL: url
})