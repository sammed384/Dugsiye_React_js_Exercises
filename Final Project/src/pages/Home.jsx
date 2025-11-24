import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const { state } = useApp();
  const isLoggedIn = !!state.user;

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-gradient-to-r from-orange-600 to-orange-400 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome to Our TaskFlow
              </h1>

              <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto mb-8">
                Organize your life, boost your productivity, and never miss a
                deadline again. TaskFlow is the simple, elegant way to manage
                your tasks.
              </p>

              <Link
                to="/tasks"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-orange-600 font-semibold hover:bg-orange-50 transition-colors duration-200"
              >
                Browse All Manage Tasks
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
