//Created context for ToDoList. It is used to manage the state of the ToDoList and provide the state to the components globally.

import { createContext, useContext } from "react";
export const ToDoContext = createContext({
    toDoList: [
        {
            id: 1,
            title: "To Do 1",
            completed: false,
        },
    ],
    addToDo: (toDoList) => {},
    updateToDo: (id, title) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {},
});
export const useToDoContext = () => useContext(ToDoContext);
export const ToDoContextProvider = ToDoContext.Provider;
