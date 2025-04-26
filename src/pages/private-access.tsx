// 🚀 NSS Omni AI 360 - Private Access Page (private-access.tsx)
import Link from "next/link";

export default function PrivateAccess() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">Exclusive Private Access</h1>
        <p className="mt-4 text-lg">This page grants access to invited users for testing and preview purposes.</p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">🚀 Welcome to the Testing Zone</h2>
          <p>
            As a special invitee, you have temporary access to our tools without a subscription. 
            Select an option below to begin exploring.
          </p>
          <div className="space-y-4 mt-4">
            <Link href="/assessment">
              <span className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center cursor-pointer">
                Access Assessment Tool
              </span>
            </Link>
            <Link href="/vsm-tool">
              <span className="block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-center cursor-pointer">
                Access VSM Tool
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
