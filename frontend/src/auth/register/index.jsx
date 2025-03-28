import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const redirectLogin = () => {
    setTimeout(() => {
      navigate("/auth/onlyadmin/login-admin");
    }, 2500);
  };

  const matchPassword = () => {
    if (!email || !password || !confirmPassword) {
      toast.error("Please fill all the fields");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const registerMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/auth/onlyadmin/register-admin`,
        { email, password }
      );
      return response.data;
    },
    onSuccess: () => {
      redirectLogin();
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Register failed");
    },
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!matchPassword()) return;

    toast.promise(registerMutation.mutateAsync({ email, password }), {
      loading: "Please wait...",
      success: "Account registered successfully",
      error: "Register failed, please try again",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create an account so you can explore all the existing jobs
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
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleRegister}
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Register
          </button>
          <p className="text-center text-gray-600">
            Already have an account? {""}
            <button
              onClick={() => navigate("/auth/onlyadmin/login-admin")}
              className="text-blue-600 font-semibold cursor-pointer"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
