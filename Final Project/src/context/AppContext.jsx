import { createContext, useEffect, useReducer, useContext } from "react";
import { appReducer, initialState } from "../reducers/appReducer";
import { supabase } from "../lib/supabase";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      dispatch({ type: "SET_USER", payload: session?.user || null });
      // We might want to set loading to false here if it was true initially
      // But looking at the reducer, loading is false by default.
      // However, usually we want a loading state while checking auth.
      // For now, I will stick to the plan and just map the existing state.
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AppProvider");
  }
  const { state } = context;
  return {
    user: state.user,
    isLoggedIn: !!state.user,
    isLoading: state.loading,
  };
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
