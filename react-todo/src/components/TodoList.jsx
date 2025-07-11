import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleComplete,
  deleteTodo,
  startEditing,
  saveEdit,
  cancelEdit,
}) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            startEditing={startEditing}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
