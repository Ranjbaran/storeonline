import  Link  from 'next/link';
export default function NotFound() {

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <section className="text-center space-y-6">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">صفحه پیدا نشد</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          متأسفیم! صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است جابه‌جا
          شده باشد.
        </p>
        <Link href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
          
      
          بازگشت به صفحه اصلی
        </Link>
      </section>
     
    </main>
  );
}