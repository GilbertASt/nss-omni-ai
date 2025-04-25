// src/app/vsm/page.tsx

import dynamic from "next/dynamic";

// Dynamically import the VSM tool (client-side only)
const VSMTool = dynamic(() => import("@/modules/vsm/vsmtool"), {
  ssr: false,
  loading: () => (
    <main className="flex items-center justify-center min-h-screen text-gray-600">
      <p className="text-lg">Loading VSM Tool...</p>
    </main>
  ),
});

export default function VSMPage() {
  return <VSMTool />;
}
