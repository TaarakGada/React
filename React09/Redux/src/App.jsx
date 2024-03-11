import AddTodo from './Components/AddTodo';
import SimpleTodo from './Components/SimpleTodo';

function App() {
    return (
        <>
            <h1 className="text-2xl bg-blue-200 text-center font-semibold">
                Learn more about Redux toolkit
            </h1>
            <AddTodo />
            <SimpleTodo />
        </>
    );
}

export default App;
