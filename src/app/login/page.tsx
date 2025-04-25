"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Placeholder logic — replace with real auth flow
    alert(`Login request sent for: ${email}`);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Login to NSS Compass OS</h1>
      <p className="mb-6 text-gray-600 max-w-xl">
        Welcome back. Sign in to access your tools, including VSM and other modules powered by ArminX.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        className="mb-4 px-4 py-2 border border-gray-300 rounded w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Sign In
      </button>
    </main>
  );
}
