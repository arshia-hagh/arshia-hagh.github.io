import { useEffect, useState } from "react";

export function useLocalStorage<T>(Key: string,InitialValue: T){
    const [value,setValue]  = useState<T>(() => {
        const local = localStorage.getItem(Key)
        if(local !== null){
            return JSON.parse(local)
        }
        else{
            return InitialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(Key,JSON.stringify(value))
    },[Key,value])
    return  [value,setValue] as [typeof value,typeof setValue]
}