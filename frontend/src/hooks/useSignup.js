import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    firstname,
    lastname,
    phone,
    email,
    password,
    confirmPassword,
  }) => {
    const sucess = handleInputErrors({
      firstname,
      lastname,
      phone,
      email,
      password,
      confirmPassword,
    });
    if (!sucess) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          phone,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("authUser", JSON.stringify(data));

      setAuthUser(data);
      localStorage.setItem("id", email);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  firstname,
  lastname,
  phone,
  email,
  password,
  confirmPassword,
}) {
  if (
    !firstname ||
    !lastname ||
    !phone ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  if (phone.length !== 10) {
    toast.error("Phone number must be 10 digits long");
    return false;
  }

  return true;
}
