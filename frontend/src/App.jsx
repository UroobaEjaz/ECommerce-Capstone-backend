import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center bg-white">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/products"
            element={authUser ? <Products /> : <Navigate to="/" />}
          />
          <Route
            path="/About"
            element={authUser ? <About /> : <Navigate to="/" />}
          />
          <Route
            path="/Contact"
            element={authUser ? <Contact /> : <Navigate to="/" />}
          />
        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;
