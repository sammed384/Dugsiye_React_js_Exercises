import Footer from "./components/Footer";
import Header from "./components/Header";
import UnAuthenticatedRoute from "./components/UnAuthenticatedRoute";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Tasks from "./pages/Tasks";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AppProvider>
      <div className="">
        {/* header */}
        <Header />
        <main>
          {/* routes */}
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />*
            {/* unauthenticated routes (redirect to home if logged in) */}
            <Route
              path="/signin"
              element={
                <UnAuthenticatedRoute>
                  <SignInPage />
                </UnAuthenticatedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <UnAuthenticatedRoute>
                  <SignUpPage />
                </UnAuthenticatedRoute>
              }
            />
            {/* protected route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Tasks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        {/* footer */}
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
