"use client";
import Image from "next/image";
import { useStorecontext } from "../context/StoreContext";
import { useEffect, useState } from "react";
import axios from "axios";
import AddToCart from "../components/AddToCart";


type CartItemProps = {
  id: string;
  quantity: number;
};
type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};
export default function CartItem({ id, quantity }: CartItemProps) {
  const [product, setProduct] = useState<ProductType | null>(null);
  // پیدا کردن محصول از لیست محصولات
  useEffect(() => {
    axios.get(`http://localhost:3005/products/${id}`)
      .then(res => {
        const { data } = res;
        setProduct(data);
      })
      .catch(err => {
        console.error("Error fetching product data:", err);
        return null;
      });
  }, [id]);

  if (product === null) return null;

  return (

    <div className="flex flex-col justify-between item-center  border rounded-xl p-4 shadow-sm">
      {/* تصویر محصول */}
      <div className="sm:flex flex-col items-center md:flex flex-row items-center gap-5  lg:flex flex-row items-center gap-3   ">
        <img
          src={product.image}
          className="rounded-lg object-cover"
        />
        <div>

          <h2 className="text-lg font-semibold text-gray-800"> نام محصول:{product.name}</h2>
          <h2 className="text-lg font-semibold text-gray-800">{product.quantity}</h2>
          <p className="text-gray-600">{product?.price.toLocaleString()} ریال</p>
          <p className="text-sm text-gray-500">تعداد: {quantity}</p>
        </div>


      </div>
      <div className="mr-10">
        <AddToCart id={product.id.toString()} />

      </div>
    
    </div>

  );
}
