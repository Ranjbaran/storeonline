'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
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

      {/* فضای خالی برای اسکرول */}
      <div style={{ height: '100vh' }}></div>

      {/* فوتر */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} فروشگاه آنلاین - تمامی حقوق محفوظ است.</p>
        <div className="mt-8">
          <Image
            src="data:image/png;base64,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" // URL عمومی برای تست
            width={500}
            height={300}
            alt="تصویر تست"
            className="rounded-lg shadow-lg mx-auto object-cover w-auto h-auto"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
          />
        </div>
      </footer>
    </main>
  );
}