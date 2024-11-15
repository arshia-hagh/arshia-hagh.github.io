import { configureStore } from "@reduxjs/toolkit";
import LoginSlice  from "./LoginSlice";

export const store = configureStore({
    reducer:{
        Login: LoginSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch