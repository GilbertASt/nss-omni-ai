'use client'; // optional here if needed, or include inside Header/Cinematic

import Header from "@/components/Header";
import Cinematic from "@/components/Cinematic";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 max-w-7xl mx-auto">
      <Header />
      <Cinematic />
    </main>
  );
}
