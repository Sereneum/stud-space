import axios from 'axios'
import {const_url} from "./consts";

const $host = axios.create({
    baseURL: const_url
})

const $authHost = axios.create({
    baseURL: const_url,
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})


const $authServerHost = axios.create({
    baseURL: const_url,
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

/**/

export {
    $host,
    $authHost,
    $authServerHost
}