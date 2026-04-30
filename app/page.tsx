export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">MyRelayApp</h1>
        <div className="space-x-4 text-sm">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="/api" className="bg-white text-black px-3 py-1 rounded-lg hover:bg-gray-200">
            Test API
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          Fast & Secure <br /> Relay + Web App
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          این پروژه ترکیبی از یک وب‌سایت مدرن با Next.js و یک سیستم Relay قدرتمند است
          که روی Vercel اجرا می‌شود.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/api"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
          >
            تست Relay
          </a>
          <a
            href="#features"
            className="border border-gray-500 px-6 py-3 rounded-xl hover:bg-gray-700"
          >
            مشاهده امکانات
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">⚡ High Performance</h4>
            <p className="text-gray-400">
              اجرا روی CDN جهانی Vercel با سرعت بالا و latency کم
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">🔁 Smart Relay</h4>
            <p className="text-gray-400">
              پروکسی درخواست‌ها به سرور مقصد با کنترل کامل روی headerها
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">🛡 Secure</h4>
            <p className="text-gray-400">
              دارای rate limit و فیلتر هدر برای افزایش امنیت
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">About This Project</h3>
        <p className="max-w-3xl mx-auto text-gray-400">
          این پروژه با استفاده از Next.js ساخته شده و شامل یک API Relay است
          که می‌تواند درخواست‌ها را به سرورهای دیگر منتقل کند. مناسب برای
          تست، پراکسی، و پروژه‌های پیشرفته‌تر.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-500 text-sm">
        ساخته شده با ❤️ با Next.js + Vercel
      </footer>
    </main>
  );
}
