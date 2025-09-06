
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "کفش ورزشی مردانه",
      price: 750000,
      image: "/images/products/shoes1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "هدفون بی‌سیم",
      price: 2100000,
      image: "/images/products/headphone.jpg",
      quantity: 2,
    },
  ]);

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">🛒 سبد خرید شما</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">سبد خرید خالی است!</p>
        ) : (
          <div className="space-y-6">
           
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:justify-between border-b pb-4 gap-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />

                {/* اطلاعات */}
                <div className="flex-1 text-center sm:text-right">
                  <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-gray-500">تعداد: {item.quantity}</p>
                  <p className="text-blue-600 font-bold mt-1">
                    {(item.price * item.quantity).toLocaleString()} تومان
                  </p>
                            <div className="mt-3">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                +
              </button>
              <span className="mx-2">3</span>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                -
              </button>
            </div>
                </div>

                {/* دکمه حذف */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  حذف
                </button>
           
              </div>
            ))}

            {/* جمع کل */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t">
              <p className="text-xl font-bold text-gray-800">
                مجموع: {totalPrice.toLocaleString()} تومان
              </p>
              <Link
                href="/checkout"
                className="mt-4 sm:mt-0 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
              >
                ادامه خرید
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
