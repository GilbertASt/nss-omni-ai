import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const priceMap: Record<string, string> = {
  monthly_base_usd: 'price_1RHV7lRsynW2GbUFzstlhABe',
  monthly_base_cad: 'price_1RHUorRsynW2GbUFDZaVuKqQ',
  annual_tier1_usd: 'price_1RHZDQRsynW2GbUF7IudsM5N', // 2–5 Seats
  annual_tier1_cad: 'price_1RHZFMRsynW2GbUFhTRvux0d',
  annual_tier2_usd: 'price_1RHZ95RsynW2GbUFGfZAuoQD', // 6–20 Seats
  annual_tier2_cad: 'price_1RHZBNRsynW2GbUFNEDUz6SY',
  founder_usd: 'price_1RHX7LRsynW2GbUFbDxlSBdZ',
  founder_cad: 'price_1RHXGZRsynW2GbUFvDIZ0Obz',
};

export async function POST(req: NextRequest) {
  try {
    const { plan, tier = 'tier1', currency = 'usd', quantity = 1, email } = await req.json();

    if (!plan || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const key = `${plan}_${tier}_${currency}`; // e.g. annual_tier1_usd
    const priceId = priceMap[key] || priceMap[`${plan}_${currency}`];

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid price key' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email,
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/subscribe`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Checkout error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
