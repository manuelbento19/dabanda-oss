"use client"
import React, { ChangeEvent, createContext, useContext, useState } from "react";

type AppContextProps = {
    search: string,
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const APP_CONTEXT = createContext<AppContextProps>({
    search: "",
    onSearchChange: (_: React.ChangeEvent<HTMLInputElement>) => {}
})

export const AppContextProvider = ({children}:React.PropsWithChildren) => {
    
    const [search,setSearch] = useState(()=> {
        if(typeof window == "undefined") return ""
        const url = new URL( window.location.toString())
        return url.searchParams.get("search") ?? ""
    })
    
    const onSearchChange = (({target: {value}}:ChangeEvent<HTMLInputElement>)=>{
        const url = new URL(window.location.toString())
        url.searchParams.set("search",value)
        setSearch(value)
        window.history.pushState({},"",url)
    })

    return (
        <APP_CONTEXT.Provider value={{
            search,
            onSearchChange
        }}>
            {children}
        </APP_CONTEXT.Provider>
    )
}

export const useAppContext = () => useContext<AppContextProps>(APP_CONTEXT)