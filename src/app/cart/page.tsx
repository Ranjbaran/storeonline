
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStorecontext } from "../context/StoreContext";
import axios from "axios";
import CartItem from "./CatrItem";
import { IProduct } from "../store/page";
import { formatPrice } from "../Utility/number";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const { CartItems } = useStorecontext()
  const [data, setData] = useState<IProduct[]>([])
  useEffect(() => {
    axios.get("http://localhost:3005/products")
      .then(res => {
        const { data } = res;
        setData(data);
      })
      .catch(err => {
        console.error("Error fetching product data:", err);
        return null;
      });
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">🛒 سبد خرید شما</h1 >
        {CartItems.length === 0 ? (
          <p className="text-gray-500 text-center">سبد خرید خالی است!</p>
        ) : (
          <div className="space-y-6">
            {CartItems.map((item) => (
              <CartItem key={item.id} id={item.id.toString()} quantity={item.count} />
            ))}
          </div>
        )}
        <div className="text-gray-900">
          {CartItems.length != 0 ? (
            <>
              <span>قیمت:</span>
              {

               formatPrice(CartItems.reduce((total, item) => {
                  let selectedPrice = data.find((p) => p.id == item.id.toString())?.price;
                  return total + (Number(selectedPrice) || 0) * item.count
                }, 0)) 
              }
            </>
          ) : ""
          }

        </div>
      </section>

    </main>
  )
}


