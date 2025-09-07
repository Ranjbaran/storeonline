
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStorecontext } from "../context/StoreContext";
import axios from "axios";
import CartItem from "./CatrItem";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const{CartItems}=useStorecontext()

return (
  <main className="min-h-screen bg-gray-50 p-6">  
    <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">🛒 سبد خرید شما</h1 > 
      {CartItems.length===0 ? (
        <p className="text-gray-500 text-center">سبد خرید خالی است!</p>
      ):(
        <div className="space-y-6">
          {CartItems.map((item) => (
            <CartItem key={item.id} id={item.id.toString()} quantity={item.count} />
          ))} 
        </div>
      )}
    </section>             
  </main>
)}

 
