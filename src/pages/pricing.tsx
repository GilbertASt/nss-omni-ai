// 🚀 NSS Omni AI 360 - Pricing Page (pricing.tsx)
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">Subscription & Pricing</h1>
        <p className="mt-4 text-lg">Choose a plan that fits your needs and get started today.</p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">💳 Our Pricing Plans</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">🎯 1-Month Trial</h3>
              <p className="text-lg">$199 for full access to the Assessment & VSM Tools.</p>
              <Link href="/payment">
                <span className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
                  Start Trial
                </span>
              </Link>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">🚀 Monthly Subscription</h3>
              <p className="text-lg">$99/month with full access and future updates.</p>
              <Link href="/payment">
                <span className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 cursor-pointer">
                  Subscribe Now
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} NSS Omni AI 360. All Rights Reserved.
      </footer>
    </div>
  );
}
