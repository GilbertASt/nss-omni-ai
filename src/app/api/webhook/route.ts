import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Supabase Admin Client
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const rawBody = await req.text();
  const sig = req.headers.get('stripe-signature')!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err: any) {
    console.error('❌ Invalid Stripe signature:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // 🔄 Handle completed Stripe Checkout
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const stripeCustomerId = session.customer as string;
    const stripeSubscriptionId = session.subscription as string;
    const email = session.customer_email;

    if (!email) {
      console.error('⚠️ No email in session');
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    // Step 1: Find user by email
    const { data: user, error: userError } = await supabaseAdmin
      .from('users') // or 'profiles' if you're using that
      .select('id')
      .eq('email', email)
      .single();

    if (userError || !user) {
      console.error('❌ Supabase user not found:', userError);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Step 2: Insert or update subscription info
    const { error: upsertError } = await supabaseAdmin
      .from('user_subscriptions')
      .upsert({
        user_id: user.id,
        stripe_customer_id: stripeCustomerId,
        stripe_subscription_id: stripeSubscriptionId,
        status: 'active',
        plan: session.metadata?.plan ?? 'unknown',
        current_period_end: session.expires_at
          ? new Date(session.expires_at * 1000)
          : null,
      });

    if (upsertError) {
      console.error('❌ Subscription upsert failed:', upsertError);
      return NextResponse.json({ error: 'Failed to sync subscription' }, { status: 500 });
    }

    console.log(`✅ Synced subscription for ${email}`);
  }

  return NextResponse.json({ received: true });
}
