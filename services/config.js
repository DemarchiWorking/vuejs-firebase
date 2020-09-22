import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://infnet-bootcamp-api.herokuapp.com/api/'
})
