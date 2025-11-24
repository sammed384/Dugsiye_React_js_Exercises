import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { fetchTasks, addTask, updateTask, deleteTask } from "../lib/db";
import {
  FaTrash,
  FaCheck,
  FaPlus,
  FaEdit,
  FaTimes,
  FaSave,
} from "react-icons/fa";

const Tasks = () => {
  const { state, dispatch } = useApp();
  const { user, tasks } = state;
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Editing state
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Fetch tasks on mount
  useEffect(() => {
    if (user) {
      loadTasks();
    }
  }, [user]);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks(user.id);
      dispatch({ type: "SET_TASKS", payload: data });
    } catch (err) {
      console.error("Error loading tasks:", err);
      setError("Failed to load tasks.");
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const newTask = {
        user_id: user.id,
        title: newTaskTitle,
        is_completed: false,
      };
      const data = await addTask(newTask);
      dispatch({ type: "ADD_TASK", payload: data });
      setNewTaskTitle("");
    } catch (err) {
      console.error("Error adding task:", err);
      setError("Failed to add task.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleTask = async (task) => {
    try {
      const updates = { is_completed: !task.is_completed };
      const data = await updateTask(task.id, updates);
      dispatch({ type: "UPDATE_TASK", payload: data });
    } catch (err) {
      console.error("Error updating task:", err);
      setError("Failed to update task.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await deleteTask(taskId);
      dispatch({ type: "DELETE_TASK", payload: taskId });
    } catch (err) {
      console.error("Error deleting task:", err);
      setError("Failed to delete task.");
    }
  };

  // Start editing
  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTitle("");
  };

  // Save edited task
  const saveEditing = async (taskId) => {
    if (!editingTitle.trim()) return;

    try {
      const updates = { title: editingTitle };
      const data = await updateTask(taskId, updates);
      dispatch({ type: "UPDATE_TASK", payload: data });
      setEditingTaskId(null);
      setEditingTitle("");
    } catch (err) {
      console.error("Error updating task title:", err);
      setError("Failed to update task title.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Tasks</h1>

      {/* Add Task Form */}
      <div className="bg-white shadow sm:rounded-lg p-6 mb-8">
        <form onSubmit={handleAddTask} className="flex gap-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-4 py-2 border"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !newTaskTitle.trim()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-gray-400"
          >
            <FaPlus className="mr-2" /> Add Task
          </button>
        </form>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>

      {/* Task List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {tasks.length === 0 ? (
            <li className="px-6 py-4 text-center text-gray-500">
              No tasks yet. Add one above!
            </li>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center flex-1 min-w-0">
                  <button
                    onClick={() => handleToggleTask(task)}
                    className={`flex-shrink-0 h-5 w-5 rounded border ${
                      task.is_completed
                        ? "bg-orange-600 hover:bg-orange-700 border-orange-500 text-white"
                        : "border-gray-300 text-transparent"
                    } flex items-center justify-center mr-4 transition-colors duration-200`}
                  >
                    <FaCheck size={12} />
                  </button>

                  {/* Inline Editing */}
                  {editingTaskId === task.id ? (
                    <div className="flex-1 flex items-center gap-2">
                      <input
                        type="text"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm border px-2 py-1"
                        autoFocus
                      />
                      <button
                        onClick={() => saveEditing(task.id)}
                        className="text-green-600 hover:text-green-700 p-1"
                        title="Save"
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="text-gray-500 hover:text-gray-600 p-1"
                        title="Cancel"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ) : (
                    <span
                      className={`text-sm font-medium truncate flex-1 ${
                        task.is_completed
                          ? "text-gray-400 line-through"
                          : "text-gray-900"
                      }`}
                    >
                      {task.title}
                    </span>
                  )}
                </div>

                <div className="ml-4 flex-shrink-0 flex space-x-2">
                  {/* Edit Button (only show if not editing) */}
                  {editingTaskId !== task.id && (
                    <button
                      onClick={() => startEditing(task)}
                      className="text-blue-400 hover:text-blue-500 p-1"
                      title="Edit task"
                    >
                      <FaEdit />
                    </button>
                  )}

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-400 hover:text-red-500 p-1"
                    title="Delete task"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
