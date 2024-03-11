import React from "react";
import { useState } from "react";
import { useToDoContext } from "../Contexts/ToDoContext";

function ToDoForm() {
    const [toDoText, setToDoText] = useState();
    const { addToDo } = useToDoContext();
    const add = (e) => {
        e.preventDefault();
        if (!toDoText) return;
        addToDo({
            title: toDoText,
            completed: false,
        });
        setToDoText("");
    };
    return (
        <form
            className="flex border border-white/50 rounded-lg overflow-hidden w-full duration-150 "
            onSubmit={add}
        >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 font-semibold"
                value={toDoText}
                onChange={(e) => setToDoText(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 "
            >
                Add
            </button>
        </form>
    );
}
export default ToDoForm;
