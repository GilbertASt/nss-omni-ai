// 🚀 NSS Omni AI 360 - Assessment Tool Page (assessment.tsx)
import { useState } from "react";

export default function Assessment() {
  const [responses, setResponses] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResponses({ ...responses, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Responses:", responses);
    alert("Assessment submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">Organizational Assessment</h1>
        <p className="mt-4 text-lg">
          Identify inefficiencies and discover opportunities for improvement.
        </p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">📋 Assessment Questions</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">1. How do you track operational performance?</label>
              <input
                type="text"
                name="performance_tracking"
                onChange={handleChange}
                className="mt-2 w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold">2. What are your biggest process inefficiencies?</label>
              <input
                type="text"
                name="process_inefficiencies"
                onChange={handleChange}
                className="mt-2 w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit Assessment
            </button>
          </form>
        </section>
      </main>

      <footer className="w-full text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} NSS Omni AI 360. All Rights Reserved.
      </footer>
    </div>
  );
}
