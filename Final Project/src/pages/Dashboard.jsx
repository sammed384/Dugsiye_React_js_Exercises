import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { fetchTasks } from "../lib/db";
import {
  FaTasks,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";

const Dashboard = () => {
  const { state, dispatch } = useApp();
  const { user, tasks } = state;

  // Fetch tasks if empty
  useEffect(() => {
    if (user && tasks.length === 0) {
      fetchTasks(user.id)
        .then((data) => dispatch({ type: "SET_TASKS", payload: data }))
        .catch((err) => console.error("Dashboard fetch error:", err));
    }
  }, [user, tasks.length, dispatch]);

  const completedTasks = tasks.filter((t) => t.is_completed).length;
  const pendingTasks = tasks.length - completedTasks;
  const completionRate =
    tasks.length > 0
      ? Math.round((completedTasks / tasks.length) * 100)
      : 0;

  // Display name logic
  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.username ||
    user?.email?.split("@")[0] ||
    "User";

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome back,{" "}
              <span className="text-orange-600">{displayName}</span>!
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Here's your productivity overview.
            </p>
          </div>

          <Link
            to="/tasks"
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
          >
            <FaTasks className="-ml-1 mr-2 h-5 w-5" />
            Manage Tasks
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">

          {/* Total Tasks */}
          <div className="bg-white shadow rounded-lg p-5">
            <div className="flex items-center">
              <div className="rounded-md bg-blue-500 p-3">
                <FaTasks className="h-6 w-6 text-white" />
              </div>
              <div className="ml-5">
                <div className="text-sm font-medium text-gray-500">
                  Total Tasks
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {tasks.length}
                </div>
              </div>
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="bg-white shadow rounded-lg p-5">
            <div className="flex items-center">
              <div className="rounded-md bg-orange-500 p-3">
                <FaClock className="h-6 w-6 text-white" />
              </div>
              <div className="ml-5">
                <div className="text-sm font-medium text-gray-500">
                  Pending Tasks
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {pendingTasks}
                </div>
              </div>
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="bg-white shadow rounded-lg p-5">
            <div className="flex items-center">
              <div className="rounded-md bg-green-500 p-3">
                <FaCheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="ml-5">
                <div className="text-sm font-medium text-gray-500">
                  Completed Tasks
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {completedTasks}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Completion Rate */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Completion Rate
              </h3>
              <p className="text-gray-500 text-sm">
                Percentage of tasks completed
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <FaChartLine className="text-orange-600 h-6 w-6" />
              <span className="text-2xl font-bold text-gray-900">
                {completionRate}%
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
