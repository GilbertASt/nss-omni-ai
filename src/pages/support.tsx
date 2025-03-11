// 🚀 NSS Omni AI 360 - Support Page (support.tsx)
import { useState } from "react";

export default function Support() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support Request Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">Contact Support</h1>
        <p className="mt-4 text-lg">Need help? Reach out to us below.</p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">📞 Get in Touch</h2>
          <p>
            - **Email:** support@nssomni.com
            <br />
            - **Phone:** +1 (555) 123-4567
            <br />
            - **Business Hours:** Mon-Fri, 9 AM - 5 PM (EST)
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">💬 Submit a Support Request</h2>
          {submitted ? (
            <p className="text-green-600 font-semibold">Thank you! Your request has been submitted.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold">Your Name:</label>
                <input type="text" name="name" onChange={handleChange} className="mt-2 w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block font-semibold">Your Email:</label>
                <input type="email" name="email" onChange={handleChange} className="mt-2 w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block font-semibold">Your Message:</label>
                <textarea name="message" onChange={handleChange} className="mt-2 w-full p-2 border rounded" rows={4}></textarea>
              </div>
              <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Submit Request
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="w-full text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} NSS Omni AI 360. All Rights Reserved.
      </footer>
    </div>
  );
}
