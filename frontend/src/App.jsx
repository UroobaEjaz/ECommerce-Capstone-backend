import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
// Used ChatGPT to get the syntax for the Router and the Routes URL:https://chatgpt.com/c/eed16b61-cd05-4273-bf35-cdd64b66b642
// Watched Youtube videos as well url:https://www.youtube.com/watch?v=17l6AOc8s10&ab_channel=CodeComplete , https://www.youtube.com/watch?v=SLfhMt5OUPI&ab_channel=WebDevSimplified
export default function App() {
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
