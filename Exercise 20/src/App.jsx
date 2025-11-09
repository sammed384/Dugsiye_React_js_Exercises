import { useState } from "react";

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
    <div className="h-screen bg-[#dbeafe] p-16">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#1f2937]">
            My Todo List
          </h1>

          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-2 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#9b68ca] text-white font-semibold rounded-lg hover:bg-[#7e22ce] focus:outline-none focus:ring-2 focus:ring-purple-500 cursor:pointer"
              >
                Add
              </button>
            </div>
          </form>

          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-3 bg-[#f9fafb] rounded-lg hover:bg-[#f3f4f6] group"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-2 py-1 text-[#dc2626] hover:text-[#b91c1c] focus:outline-none"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {todos.length === 0 && (
            <p className="text-center text-[#6b7280] mt-6">
              No todos yet. Add some tasks above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
