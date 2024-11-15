import axios from "axios";

export async function getAuthentication(username:string,password: string) {
    await axios.post('/login',{
        username: username,
        password: password
    })
}