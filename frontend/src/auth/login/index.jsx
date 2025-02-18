import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = email && password;
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/auth/login-admin`,
        {
          email,
          password,
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      const { token } = data;
      Cookies.set("token", token, { expires: 1 });
      setTimeout(() => {
        navigate("/auth/onlyadmin/dashboard");
      }, 2500);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const handleLogin = () => {
    e.preventDefault();
    if (isValid) {
      toast.promise(loginMutation.mutateAsync({ email, password }), {
        loading: "Please wait",
        success: "Login successful",
        error: "Login failed, password or email is incorrect",
      });
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Login here
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome back you’ve been missed!
        </p>

        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-right text-blue-600 text-sm cursor-pointer">
            Forgot your password?
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
