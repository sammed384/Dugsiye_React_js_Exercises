import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1 className={styles.title}>My Todo List</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input_button}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo..."
                className={styles.input}
              />
              <button type="submit" className={styles.addButton}>
                Add
              </button>
            </div>
          </form>

          <div className={styles.todoList}>
            {todos.map((todo) => (
              <div key={todo.id} className={styles.todoItem}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={`${styles.todoText} ${
                    todo.completed ? styles.completed : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {todos.length === 0 && (
            <p className={styles.empty}>No todos yet. Add some tasks above!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
