export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">NextFrontend</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-blue-500">Features</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-5xl font-bold mb-6">Modern Frontend with Next.js</h2>
        <p className="text-lg max-w-2xl">
          Lightning-fast, responsive, and production-ready frontend built with Next.js + TailwindCSS.
        </p>
        <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-10 grid md:grid-cols-3 gap-10">
        {[
          { title: "Fast", desc: "Optimized static and server-side rendering." },
          { title: "Beautiful", desc: "Styled with TailwindCSS, sleek and modern." },
          { title: "Responsive", desc: "Works perfectly on all devices." },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} NextFrontend. All rights reserved.
      </footer>
    </main>
  );
}
