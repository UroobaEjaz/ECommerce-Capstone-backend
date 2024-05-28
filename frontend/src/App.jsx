import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import About from "./pages/About/About";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

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
        </Routes>

        <Toaster />
      </div>
    </>
  );
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/about", element: <About /> },
    { path: "/cart", element: <Cart /> },
    { path: "/:category", element: <Products /> },
    { path: "/:category/:id", element: <ProductDetails /> },
  ]);
}

export default App;
