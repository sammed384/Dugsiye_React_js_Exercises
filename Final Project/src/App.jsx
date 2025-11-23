import Footer from "./components/Footer";
import Header from "./components/Header";
import UnAuthenticatedRoute from "./components/UnAuthenticatedRoute";

import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

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
          </Routes>
        </main>
        {/* footer */}
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
