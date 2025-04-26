// 🚀 NSS Omni AI 360 - Transformation Journey (transformation.tsx)
import Link from "next/link";

export default function Transformation() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-10">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-5xl font-bold">🌍 A Common Journey of Transformation</h1>
        <p className="mt-6 text-xl leading-relaxed">
          Every organization faces challenges. Some adapt, evolve, and thrive—while others struggle to keep pace.  
          This is a **common story** that many businesses, healthcare institutions, nonprofits, and educational organizations experience—**navigating inefficiencies, operational bottlenecks, and uncertainty in their transformation journey.**
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-10">
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">🚀 The Struggle for Efficiency</h2>
          <p className="text-lg leading-relaxed">
            A mid-sized organization—whether in **manufacturing, healthcare, or services**—is **thriving on the outside but struggling on the inside**.  
            They deal with **long processes, wasted time, miscommunication, and disconnected workflows**—all while trying to stay competitive.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Leadership **knows something must change**—but traditional methods take too long, and improvement efforts often stall.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">📊 Enter AI-Powered Optimization</h2>
          <p className="text-lg leading-relaxed">
            Instead of **guesswork**, this organization turned to **AI-driven insights** with **ArminX**, the intelligence behind NSS Omni AI 360.  
            In **weeks, not months**, they began to **identify waste, automate inefficiencies, and create a roadmap for sustained growth**.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            🔹 **Real-time bottleneck identification**—seeing issues before they impact performance.  
            🔹 **Data-driven decision-making**—removing opinion-based inefficiencies.  
            🔹 **Continuous improvement mindset**—ensuring change is sustainable.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">💡 The Turning Point</h2>
          <p className="text-lg leading-relaxed">
            With AI-driven **Value Stream Mapping (VSM)** and an intelligent **Assessment Tool**, the organization had **clarity, direction, and immediate action steps**.  
            They optimized their **workflow, reduced costs, and improved efficiency**—all without wasting **years** on trial-and-error improvements.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            **This transformation is not science fiction—it’s happening now.**  
            The question is: **Are you ready to begin your journey?**
          </p>
          <div className="mt-6">
            <Link href="/next-step">
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
