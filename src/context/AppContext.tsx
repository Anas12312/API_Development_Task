import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AppContextType {
    token: string | undefined
    setToken: Dispatch<SetStateAction<string | undefined>>
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string>()
    // const nav = useNavigate()
    return <AppContext.Provider value={{
        token,
        setToken
    }}>
        {
            children
        }      
    </AppContext.Provider>
}