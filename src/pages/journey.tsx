// 🚀 NSS Omni AI 360 - Journey Page (journey.tsx)
import Link from "next/link";

export default function Journey() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-10">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-5xl font-bold">🔹 The Path to Transformation</h1>
        <p className="mt-6 text-xl leading-relaxed">
          You’ve seen the future—now it’s time to take the first step. AI-driven process optimization is not just a trend; it’s the next evolution in business excellence.
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-10">
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">🚀 Why Businesses Struggle</h2>
          <p className="text-lg leading-relaxed">
            Many organizations face <strong>resistance to change, lack of data visibility, and outdated improvement methods</strong>. These challenges hold businesses back from reaching their full potential.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            <strong>But what if you had an AI-driven roadmap that guides you through every step of the transformation process?</strong> That’s exactly what NSS Omni AI 360 delivers.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">📊 AI-Powered Business Evolution</h2>
          <p className="text-lg leading-relaxed">
            <strong>AI doesn’t replace your team—it empowers them.</strong> OmniSensei, our AI-driven process expert, acts as your continuous improvement partner.
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg leading-relaxed">
            <li>🚀 <strong>Eliminate wasteful inefficiencies</strong>—quickly identify areas where resources are underutilized.</li>
            <li>📊 <strong>Make smarter decisions</strong>—leverage AI-powered insights to optimize operations.</li>
            <li>🔁 <strong>Sustain long-term improvements</strong>—ensure every process change leads to measurable results.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">🔹 Are You Ready for Change?</h2>
          <p className="text-lg leading-relaxed">
            The best companies <strong>don’t wait for change—they create it</strong>. AI-powered process transformation is happening now. <strong>Will you lead or lag behind?</strong>
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Your <strong>next step</strong> is unlocking the <strong>AI-driven assessment and VSM tool</strong> that will guide your journey.
          </p>
          <div className="mt-6">
            <Link href="/assessment">
              <span className="bg-blue-600 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-700 cursor-pointer">
                Take the Next Step
              </span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full text-center mt-16 text-lg text-gray-500">
        © {new Date().getFullYear()} NSS Omni AI 360. All Rights Reserved.
      </footer>
    </div>
  );
}
