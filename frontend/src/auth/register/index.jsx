import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
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
            placeholder="Email"
            className="w-full px-4 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Sign up
          </button>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
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
