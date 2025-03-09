import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome to NSS Omni AI 360</h1>
        <p className="mt-4 text-lg">
          Transforming organizations through AI-powered process optimization.
        </p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">🚀 AI-Powered Business Transformation</h2>
          <p>
            Discover how AI can help optimize your processes, reduce inefficiencies, 
            and accelerate growth with our **Value Stream Mapping (VSM) Tool** and **Organizational Assessment Tool**.
          </p>
          <div className="mt-4">
            <Link href="/assessment">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
                Take the Assessment
              </span>
            </Link>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">📊 Value Stream Mapping Tool</h2>
          <p>
            Use AI to map out your processes, identify bottlenecks, and generate 
            real-time improvement plans.
          </p>
          <div className="mt-4">
            <Link href="/vsm-tool">
              <span className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 cursor-pointer">
                Try the VSM Tool
              </span>
            </Link>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3">💳 Subscription & Pricing</h2>
          <p>
            Get started with a **$99 monthly plan** or explore our exclusive **Founders Club** 
            for early adopters.
          </p>
          <div className="mt-4">
            <Link href="/pricing">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 cursor-pointer">
                View Pricing
              </span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} NSS Omni AI 360. All Rights Reserved.
      </footer>
    </div>
  );
}
