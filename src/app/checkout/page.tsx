'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkout = async () => {
      const plan = searchParams.get('plan');
      const email = 'user@example.com'; // Replace with actual user email from session/context

      const priceIdMap: Record<string, string> = {
        monthly: 'price_123_MONTHLY',  // replace with real Stripe price IDs
        annual: 'price_456_ANNUAL',
      };

      const planId = priceIdMap[plan ?? ''];

      if (!planId) {
        console.error('Invalid plan');
        return;
      }

      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({
          planId,
          quantity: 1,
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error(data.error || 'Unexpected error');
      }
    };

    checkout();
  }, [searchParams]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600 text-lg">Redirecting to secure checkout...</p>
    </main>
  );
}
