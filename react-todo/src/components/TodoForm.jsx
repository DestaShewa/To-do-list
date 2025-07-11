import React from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task..."
        className="border rounded px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
