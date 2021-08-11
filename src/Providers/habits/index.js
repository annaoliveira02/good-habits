import { createContext, useState } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({children}) => {

    const [habitsList, setHabitsList] = useState([]);
    const [habit, setHabit] = useState([]);

    const addHabit = () => {
         
    }

    const removeHabit = () => {

    }

    const editHabit = () => {

    }

    return (
        <HabitsContext.Provider value={{habitsList, habit, addHabit, removeHabit, editHabit}}>
            {children}
        </HabitsContext.Provider>
    )
}