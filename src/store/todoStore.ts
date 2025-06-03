import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state: any) => ({
      todos: [...state.todos, { text, completed: false, id: Date.now() }],
    })),
  removeTodo: (id: string) =>
    set((state: any) => ({
      todos: state.todos.filter((task: any) => task.id !== id),
    })),
  toggleTodo: (id: string) =>
    set((state: any) => ({
      todos: state.todos.map((task: any) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default useTodoStore;
