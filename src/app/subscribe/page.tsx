'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SubscribePage() {
  const router = useRouter();

  const handleSubscribe = (
    plan: 'monthly' | 'annual' | 'founder',
    tier: 'tier1' | 'tier2' = 'tier1',
    currency: 'usd' | 'cad' = 'usd'
  ) => {
    router.push(`/checkout?plan=${plan}&tier=${tier}&currency=${currency}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Unlock Full Access to NSS Compass OS
      </h1>
      <p className="text-gray-600 max-w-2xl mb-6">
        Begin your transformation with the industry’s most intelligent process optimization platform. 
        Start with a free trial of the VSM Tool — then upgrade anytime.
      </p>

      <div className="w-full max-w-3xl grid gap-6 md:grid-cols-2 mt-6">
        {/* Monthly Plan */}
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Monthly Plan</h2>
          <p className="mb-4 text-gray-700">$99/month – Cancel anytime</p>
          <ul className="text-left list-disc list-inside text-sm text-gray-600 mb-4">
            <li>All tools included</li>
            <li>1-week free trial</li>
            <li>No price increases after sign-up</li>
          </ul>
          <button
            aria-label="Subscribe to monthly plan"
            onClick={() => handleSubscribe('monthly', 'tier1', 'usd')}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Subscribe Monthly
          </button>
        </div>

        {/* Annual Plan */}
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Annual Plan</h2>
          <p className="mb-4 text-gray-700">$999/year – Includes Founder Perks</p>
          <ul className="text-left list-disc list-inside text-sm text-gray-600 mb-4">
            <li>All tools included</li>
            <li>10% Founder Discount (limited offer)</li>
            <li>Priority access to all future tools (5S, A3, etc.)</li>
          </ul>
          <button
            aria-label="Subscribe to annual plan"
            onClick={() => handleSubscribe('annual', 'tier2', 'cad')}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Subscribe Annually
          </button>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Need help?{' '}
        <Link href="/contact" className="underline text-blue-600">
          Contact us
        </Link>
      </p>
    </main>
  );
}
