import useTodoStore from "../../store/todoStore";
import { motion } from "framer-motion";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <motion.li
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      className="flex items-center gap-2 p-3 border rounded-md shadow-sm bg-white hover:shadow-md transition-all"
    >
      <input
        id={`todo-${todo.id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="form-checkbox h-5 w-5 text-blue-600 transition-colors"
        aria-label={`Toggle todo: ${todo.text}`}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-1 ml-2 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {todo.text}
      </label>
      <button
        onClick={() => removeTodo(todo.id)}
        className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        aria-label={`Delete todo: ${todo.text}`}
      >
        Delete
      </button>
    </motion.li>
  );
};

export default TodoItem;
