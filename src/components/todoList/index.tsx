import useTodoStore from "../../store/todoStore";
import TodoItem from "../todoItem";
import { AnimatePresence, motion } from "framer-motion";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <section className="w-full max-w-md mx-auto mt-6">
      {todos.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500"
        >
          No todos yet. Add one!
        </motion.p>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </AnimatePresence>
        </ul>
      )}
    </section>
  );
};

export default TodoList;
