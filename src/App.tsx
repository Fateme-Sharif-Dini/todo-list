import "./App.css";
import AddTodoForm from "./components/addTodoForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border rounded-lg shadow-lg p-6 flex flex-col gap-4">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            📝 Todo List
          </h1>
          <p className="text-sm text-gray-500">
            Stay organized. One task at a time.
          </p>
        </header>

        <AddTodoForm />

        <div className="flex-1 overflow-y-auto max-h-[60vh] pr-1">
          <TodoList />
        </div>
      </div>
    </main>
  );
}

export default App;
