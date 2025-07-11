import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load tasks
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      editing: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, editing: true } : todo))
    );
  };

  const saveEdit = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, editing: false } : todo
      )
    );
  };

  const cancelEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, editing: false } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all"
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow bg-white">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
        React To-Do App
      </h1>
      <TodoForm addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

export default App;
