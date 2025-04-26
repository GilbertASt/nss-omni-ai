// 🚀 NSS Omni AI 360 - Dashboard Page (dashboard.tsx)
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">User Dashboard</h1>
        <p className="mt-4 text-lg">Access your tools and track your progress.</p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">📊 Quick Access</h2>
          <div className="space-y-4">
            <Link href="/assessment">
              <span className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center cursor-pointer">
                Go to Assessment Tool
              </span>
            </Link>
            <Link href="/vsm-tool">
              <span className="block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-center cursor-pointer">
                Go to VSM Tool
              </span>
            </Link>
            <Link href="/reports">
              <span className="block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-center cursor-pointer">
                View My Reports
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
