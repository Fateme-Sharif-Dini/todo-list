import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import useTodoStore from "../../store/todoStore";

const AddTodoForm = () => {
  const [text, setText] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between p-2">
      <input
        className="flex-1 p-2 border rounded"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add new todo"
      />
      <button
        type="submit"
        className="transition duration-200 ease-in-out transform hover:bg-blue-600 px-6 bg-blue-500 text-white ml-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
