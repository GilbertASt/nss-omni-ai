// src/app/layout.tsx

import "./globals.css"; // Optional if using a global stylesheet

export const metadata = {
  title: "NSS Compass OS",
  description: "Your intelligent Lean transformation and strategy OS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

  