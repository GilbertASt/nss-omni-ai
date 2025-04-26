// 🚀 NSS Omni AI 360 - Contact Page (contact.tsx)

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">Get in touch for support or inquiries.</p>
      </header>

      <main className="w-full max-w-4xl">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">📧 Contact Information</h2>
          <p>
            - **Email:** support@nssomni.com
            <br />
            - **Phone:** +1 (555) 123-4567
            <br />
            - **Business Hours:** Mon-Fri, 9 AM - 5 PM (EST)
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">💬 Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold">Your Name:</label>
              <input type="text" className="mt-2 w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-semibold">Your Email:</label>
              <input type="email" className="mt-2 w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-semibold">Message:</label>
              <textarea className="mt-2 w-full p-2 border rounded" rows={4}></textarea>
            </div>
            <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="w-full text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} NSS Omni AI 360. All Rights Reserved.
      </footer>
    </div>
  );
}
