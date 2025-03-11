// 🚀 NSS Omni AI 360 - Next Step (next-step.tsx)
import Link from "next/link";

export default function NextStep() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-10">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-5xl font-bold">📌 Your Next Step in AI-Driven Optimization</h1>
        <p className="mt-6 text-xl leading-relaxed">
          You&rsquo;ve seen how AI can transform operations. Now, it&rsquo;s time to take action and experience the benefits firsthand.
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-10">
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">🚀 Experience AI-Driven Insights</h2>
          <p className="text-lg leading-relaxed">
            With <strong>ArminX</strong>, your business gets access to <strong>real-time insights</strong>, <strong>automated efficiency tracking</strong>, and <strong>strategic process optimization</strong>—all at your fingertips.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            🔹 <strong>Custom AI-powered assessment</strong> to pinpoint inefficiencies.  
            🔹 <strong>Live VSM mapping</strong> to provide a clear view of operations.  
            🔹 <strong>Personalized AI guidance</strong> to ensure every step is data-driven and effective.  
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">📊 Unlock Full Access</h2>
          <p className="text-lg leading-relaxed">
            Join our <strong>Founders Club</strong> and gain exclusive access to AI-powered business intelligence that&rsquo;s shaping the future.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            <strong>Subscription Options:</strong>  
            🔹 <strong>1-Month Trial</strong> – Get full access for <strong>$199</strong> with no commitment.  
            🔹 <strong>Monthly Plan</strong> – Continue with full access at <strong>$149/month</strong>.  
            🔹 <strong>Annual Plan</strong> – Unlock AI-powered optimization for <strong>$1,490/year</strong> (includes Founders Club benefits).  
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">💡 Ready to Take the Next Step?</h2>
          <p className="text-lg leading-relaxed">
            Your business deserves more than outdated methods. <strong>ArminX</strong> is ready to help you achieve optimized efficiency.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link href="/assessment">
              <span className="bg-blue-600 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-700 cursor-pointer">
                Start Trial
              </span>
            </Link>
            <Link href="/pricing">
              <span className="bg-green-600 text-white text-lg px-6 py-3 rounded-md hover:bg-green-700 cursor-pointer">
                View Pricing
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
