import axios from "axios";

export const reqApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})