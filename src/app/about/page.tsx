import Link from "next/link";

export default function About() {
  return (
    <main className="p-10 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">About NSS Compass OS</h1>
      <p className="mb-4">
        NSS Compass OS is a modular, AI-powered operating system designed to help organizations achieve clarity, alignment, and strategic execution across every domain — from continuous improvement and HR to leadership and transformation.
      </p>
      <p className="mb-4">
        Our first module, <strong>TruNorth Strategic Planning</strong>, uses the Sunflower System to help organizations define purpose, align leadership, and grow culture. It includes tools like the VSM (Value Stream Mapping) builder and is guided by our AI assistant, <strong>ArminX</strong>.
      </p>
      <p className="mb-4">
        New tools, like <strong>5S</strong> and <strong>A3 Thinking</strong>, are in development and will soon expand your capabilities.
      </p>
      <p className="mb-6">
        Start your journey with strategy. Grow with clarity. Lead with alignment. <br />
        <strong>This is NSS Compass OS.</strong>
      </p>

      <Link href="/vsm" className="inline-block text-blue-600 underline text-sm hover:text-blue-800 transition">
        → Try the VSM Tool now
      </Link>
    </main>
  );
}
