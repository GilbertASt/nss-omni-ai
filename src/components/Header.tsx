import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
      <Link
        href="/"
        className="text-2xl font-bold text-blue-700 tracking-tight"
        aria-label="NSS Compass OS home"
      >
        NSS Compass OS
      </Link>
      <nav aria-label="Main navigation" className="space-x-6 text-sm font-medium">
        <Link href="/vsm" className="text-gray-700 hover:text-blue-600 transition">
          VSM Tool
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
          About
        </Link>
        <Link href="/login" className="text-gray-700 hover:text-blue-600 transition">
          Login
        </Link>
      </nav>
    </header>
  );
}
