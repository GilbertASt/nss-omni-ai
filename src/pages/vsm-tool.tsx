// 🚀 NSS Omni AI 360 - VSM Tool Page (vsm-tool.tsx)
import { useState } from "react";

export default function VSMTool() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("VSM Data Submitted:", inputs);
    alert("VSM analysis submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">Value Stream Mapping Tool</h1>
        <p className="mt-4 text-lg">
          Map out your processes and optimize workflow efficiency using AI-powered insights.
        </p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">🛠 Enter Process Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">Process Name:</label>
              <input
                type="text"
                name="process_name"
                onChange={handleChange}
                className="mt-2 w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold">Cycle Time (seconds):</label>
              <input
                type="number"
                name="cycle_time"
                onChange={handleChange}
                className="mt-2 w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Submit VSM Data
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
