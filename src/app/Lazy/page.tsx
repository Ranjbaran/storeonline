'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// Lazy load کردن کامپوننت
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded animate-pulse">
      <p>کامپوننت در حال لود شدن است...</p>
    </div>
  ), // پیام لودینگ جذاب‌تر
  ssr: false,
});

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">تست Lazy Loading در Next.js 15</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowComponent(true)}
      >
        نمایش کامپوننت سنگین
      </button>
      {showComponent && <HeavyComponent />}
    </main>
  );
}