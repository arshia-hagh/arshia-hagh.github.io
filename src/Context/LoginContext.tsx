import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { getAuthentication } from "../services/axios/requsets/Authentication";
import { useNavigate } from "react-router-dom";

export interface TChildren{
    children: ReactNode
}
interface TLogin{
    login: boolean,
    handleLogin: (username: string,password: string)   => void,
    handleLogout : () => void
}
const LoginContext = createContext<TLogin>({} as TLogin)
export const useLoginContext = () => {
    return useContext(LoginContext)
}
export const LoginProvider = ({children} : TChildren) => {
    const [login,setLogin] = useState<boolean>(false)
    const [token,setToken] = useLocalStorage<string>('TOKEN','')
    const navigate = useNavigate()
    const handleLogin = (username:string,password:string) => {
        if(username && password){
            getAuthentication(username,password).finally(() => {
                setLogin(false)
                setToken('ASSDDDDQWEZXTQWKJROAI')
                navigate('/')
            })
        }
    }
    const handleLogout = () => {
        setLogin(false)
        setToken('')
    }
    useEffect(() => {
        if(token){
            setLogin(true)
        }
    },[token])
    return(
    <LoginContext.Provider value={{login,handleLogout,handleLogin}}>
        {children}
    </LoginContext.Provider>
    )
}