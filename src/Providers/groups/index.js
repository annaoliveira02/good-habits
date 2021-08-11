import { createContext, useState } from "react";

export const GroupsContext = createContext();

export const GroupsProvider = ({children}) => {

    const [groupsList, setGroupsList] = useState([]);
    const [group, setGroup] = useState([]);

    const addGroup = () => {
         
    }

    const removeGroup = () => {

    }

    const editGroup = () => {

    }

    return (
        <HabitsContext.Provider value={{groupsList, group, addGroup, removeGroup, editGroup}}>
            {children}
        </HabitsContext.Provider>
    )
}