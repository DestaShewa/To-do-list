import { useState } from "react";

function TodoItem({
  todo,
  toggleComplete,
  deleteTodo,
  startEditing,
  saveEdit,
  cancelEdit,
}) {
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    saveEdit(todo.id, editText);
  };

  return (
    <div
      className={`flex justify-between items-center p-2 border rounded mb-2 transition ${
        todo.completed
          ? "bg-green-100 line-through text-gray-500"
          : "bg-gray-50"
      }`}
    >
      {todo.editing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 border px-2 py-1 mr-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded"
          >
            Save
          </button>
          <button
            onClick={() => cancelEdit(todo.id)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-2 rounded"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="flex-1">{todo.text}</span>
          <div className="flex gap-2">
            <button
              onClick={() => toggleComplete(todo.id)}
              className="bg-green-500 hover:bg-green-600 text-white px-2 rounded"
            >
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => startEditing(todo.id)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-2 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
