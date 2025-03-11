// 🚀 NSS Omni AI 360 - Home Page (index.tsx)
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-10">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-5xl font-bold">🌎 Welcome to the Future of Process Optimization</h1>
        <p className="mt-6 text-xl leading-relaxed">
          The world is entering a new era—an era where AI is revolutionizing how businesses operate. <strong>Are you ready to transform your organization, or will you be left behind?</strong>
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-10">
        <section className="bg-white shadow-md rounded-lg p-8">
          <p className="text-lg leading-relaxed">
            Every day, companies struggle with inefficiencies that cost time, money, and opportunity. Traditional improvement methods take months—sometimes years—to fully implement. 
            <strong>But what if AI could give you deep insights into your organization’s inefficiencies in minutes?</strong>
          </p>
          <p className="text-lg leading-relaxed mt-4">
            At <strong>NSS Omni AI 360</strong>, we believe that process optimization should be <strong>fast, intelligent, and effective</strong>. We’ve built an AI-powered system designed to uncover hidden bottlenecks, improve workflows, and accelerate decision-making.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">🚀 A Journey Through Transformation</h2>
          <p className="text-lg leading-relaxed">
            Your journey begins with our <strong>Assessment Tool</strong>. This first step provides a <strong>high-level AI-driven analysis</strong> of your organization’s strengths, weaknesses, and potential. It gives you a <strong>clear roadmap</strong> on where to focus your improvement efforts.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Next, you’ll unlock our <strong>Value Stream Mapping (VSM) Tool</strong>—an advanced AI-powered system that <strong>maps out your entire workflow</strong> and <strong>identifies inefficiencies</strong> in real-time.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            With these tools, you can <strong>analyze, optimize, and innovate faster</strong> than ever before.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">🌟 Why This Matters—And Why You Can’t Afford to Wait</h2>
          <p className="text-lg leading-relaxed">
            For years, companies have relied on <strong>trial-and-error methods</strong> to improve processes. The old way is slow, costly, and often ineffective. <strong>AI-driven process optimization is the future—and the future is here.</strong>
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg leading-relaxed">
            <li>🔹 Companies that embrace AI <strong>achieve faster improvements</strong> and stay ahead of competitors.</li>
            <li>🔹 Organizations that hesitate <strong>risk falling behind</strong> in efficiency, profitability, and growth.</li>
            <li>🔹 The longer inefficiencies remain in your system, the <strong>more money you lose</strong> every day.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            The question is: <strong>Will you be an early adopter of AI-driven optimization, or will you wait until your competitors are miles ahead?</strong>
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">📊 How It Works</h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed">
            <li>🔹 <strong>Assessment Tool</strong> – Evaluate your organization’s efficiency with AI-driven insights.</li>
            <li>🔹 <strong>VSM Tool</strong> – Identify process inefficiencies and uncover opportunities for improvement.</li>
            <li>🔹 <strong>ArminX AI Guide</strong> – Your personal AI-powered coach that helps you navigate improvements.</li>
            <li>🔹 <strong>Live Dashboard & Roadmap</strong> – Track progress and visualize results in real-time.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">📌 The Next Step</h2>
          <p className="text-lg leading-relaxed">
            Your business deserves more than guesswork. Let <strong>ArminX</strong> guide your transformation.
          </p>
          <div className="mt-6">
            <Link href="/trial">
              <span className="bg-blue-600 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-700 cursor-pointer">
                Start Your Journey
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
