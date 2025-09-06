// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          به فروشگاه ما خوش آمدید
        </h1>
        <p className="text-lg md:text-xl mb-6">
          تجربه‌ای متفاوت از خرید آنلاین با بهترین قیمت‌ها
        </p>
        <Link
          href="/store"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
        >
          مشاهده محصولات
        </Link>
      </section>

      {/* ویژگی‌ها */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-blue-600">ارسال سریع</h3>
            <p className="text-gray-500 mt-2">تحویل به موقع در سراسر کشور</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-600">پرداخت امن</h3>
            <p className="text-gray-500 mt-2">تضمین امنیت خرید آنلاین</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-600">پشتیبانی ۲۴/۷</h3>
            <p className="text-gray-500 mt-2">همیشه در دسترس شما هستیم</p>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} فروشگاه آنلاین - تمامی حقوق محفوظ است.</p>
      </footer>
    </main>
  );
}
