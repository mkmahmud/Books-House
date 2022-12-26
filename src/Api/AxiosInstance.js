import axios from "axios";


const baseURL = 'https://bookhouse-server-mkmahmud.vercel.app/';

const headers = {
    'content-type': 'application/json'
}

export const axiosInstance = axios.create({
    baseURL,
    headers

})