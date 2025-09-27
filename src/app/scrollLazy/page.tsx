'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

// Lazy load کردن کامپوننت
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded animate-pulse">
      <p>کامپوننت در حال لود شدن است...</p>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // بعد از لود شدن، observer رو قطع می‌کنیم
        }
      },
      { threshold: 0.1 } // وقتی 10% از کامپوننت وارد ویوپورت شد
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <main className="p-8 min-h-[200vh]">
      <h1 className="text-2xl font-bold">تست Lazy Loading با اسکرول در Next.js 15</h1>
      <p className="mt-4">برای دیدن کامپوننت به پایین اسکرول کنید.</p>
      <div className="h-[100vh]" /> {/* فاصله برای اسکرول */}
      <div ref={targetRef}>
        {isVisible && <HeavyComponent />}
      </div>
    </main>
  );
}