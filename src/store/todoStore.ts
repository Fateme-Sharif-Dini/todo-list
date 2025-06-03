import { create } from "zustand";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { text, completed: false, id: Date.now() }],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((task) => task.id !== id),
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default useTodoStore;
