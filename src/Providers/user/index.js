import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState([]);

    const logUser = () => {
         
    }

    const createUser = () => {

    }

    return (
        <UserContext.Provider value={{user, logUser, createUser}}>
            {children}
        </UserContext.Provider>
    )
}