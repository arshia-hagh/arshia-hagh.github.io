import axios from "axios";
import { reqApi } from "../configs/Configs";

export async function getMovie() {
    const {data} = await reqApi.get(`/discover/movie?sort_by=popularity.desc&api_key=a0814a81d9e0ea8e164320078c18b3cb&page=1`)
    return data
}