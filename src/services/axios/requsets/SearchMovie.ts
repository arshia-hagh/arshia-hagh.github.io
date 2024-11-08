import { reqApi } from "../configs/Configs"

export async function getSearchMovie(q: string) {
    const {data} = await reqApi(`/search/movie?api_key=a0814a81d9e0ea8e164320078c18b3cb&query=${q}"`)
    return data
}