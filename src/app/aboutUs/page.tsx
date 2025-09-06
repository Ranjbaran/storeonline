export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section className="max-w-3xl bg-white shadow-lg rounded-2xl p-10 text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">درباره ما</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          ما یک تیم پرانرژی و خلاق هستیم که با عشق به تکنولوژی و طراحی، تلاش
          می‌کنیم بهترین تجربه را برای کاربرانمان بسازیم. هدف ما ارائه‌ی
          راه‌حل‌های ساده، زیبا و کاربردی است تا زندگی دیجیتال همه آسان‌تر شود.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 pt-6">
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700">ماموریت ما</h3>
            <p className="text-gray-500 text-sm mt-2">
              خلق محصولات دیجیتال که زندگی را ساده‌تر و لذت‌بخش‌تر می‌کند.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700">ارزش‌های ما</h3>
            <p className="text-gray-500 text-sm mt-2">
              خلاقیت، صداقت و تعهد به کیفیت در همه‌ی پروژه‌ها.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700">چشم‌انداز ما</h3>
            <p className="text-gray-500 text-sm mt-2">
              تبدیل شدن به یکی از پیشگامان نوآوری در فضای دیجیتال.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
