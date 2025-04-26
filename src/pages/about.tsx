// 🚀 NSS Omni AI 360 - About Page (about.tsx)

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">About NSS Omni AI 360</h1>
        <p className="mt-4 text-lg">
          We are transforming businesses through AI-powered process optimization.
        </p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">📌 Our Mission</h2>
          <p>
            Our goal is to help businesses identify inefficiencies, streamline workflows,
            and accelerate digital transformation using AI-driven insights.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">🚀 What We Offer</h2>
          <p>
            - AI-powered **Organizational Assessment Tool** for efficiency insights.
            <br />
            - **Value Stream Mapping (VSM) Tool** to optimize workflows and eliminate waste.
            <br />
            - A **Founders Club** membership that grants early access and exclusive discounts.
          </p>
        </section>
      </main>

      <footer className="w-full text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} NSS Omni AI 360. All Rights Reserved.
      </footer>
    </div>
  );
}
