import axios from 'axios'

const url = import.meta.env.VITE_API_API_URL

export const app = axios.create({
    baseURL: url
})