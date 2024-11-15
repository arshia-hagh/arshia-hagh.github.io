import { createSlice } from "@reduxjs/toolkit"


interface LoginSlice {
    login : boolean,
    token: string
}
const initialState : LoginSlice = {
    login: false,
    token: ''
}
export const  LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers:{
        login: (state) => {
            state.login = true

        },
        logout: (state) => {
            state.login = false
            // state.token = ''
            // localStorage.setItem('Token',state.token)
            // nav('/Auth')
        }
    }

})
export const {login,logout} = LoginSlice.actions
export default LoginSlice.reducer