import "./App.css";
import { useEffect, useState } from "react";
import { ToDoContextProvider } from "./Contexts";
import { ToDoForm, ToDoItem } from "./Components";

function App() {
    const [toDoList, setToDoList] = useState([]);
    const addToDo = (toDo) => {
        setToDoList((prev) => [...prev, { id: prev.length + 1, ...toDo }]);
    };
    const updateToDo = (id, title) => {
        setToDoList((prev) =>
            prev.map((toDo) =>
                toDo.id === id ? { ...toDo, title: title } : toDo
            )
        );
    };
    const deleteToDo = (id) => {
        setToDoList((prev) => prev.filter((toDo) => toDo.id !== id));
    };
    const toggleComplete = (id) => {
        setToDoList((prev) =>
            prev.map((toDo) =>
                toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
            )
        );
    };

    useEffect(() => {
        const toDos = JSON.parse(localStorage.getItem("toDoList"));
        if (toDos && toDos.length > 0) {
            setToDoList(toDos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }, [toDoList]);
    return (
        <ToDoContextProvider
            value={{
                toDoList,
                addToDo,
                updateToDo,
                deleteToDo,
                toggleComplete,
            }}
        >
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white backdrop-blur-sm bg-white/30 ">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2 underline underline-offset-4">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {toDoList.map((toDo) => (
                            <div key={toDo.id} className="w-full">
                                <ToDoItem todo={toDo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ToDoContextProvider>
    );
}

export default App;
