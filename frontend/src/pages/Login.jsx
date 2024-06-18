import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };
  return (
    <div className="flex flex-col gap-2 border rounded-md p-3">
      <div className="flex flex-col text-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="p-2">
              <span className="font-bold">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="p-2">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup" className="">
            {"Don't"} have an account
          </Link>
          <button type="submit" className="" disabled={loading}>
            {loading ? <span className=""></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
