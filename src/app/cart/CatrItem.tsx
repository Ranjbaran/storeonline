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
  const { CartItems:products} = useStorecontext();
const [product, setProduct] = useState<ProductType | null>(null);
  // پیدا کردن محصول از لیست محصولات
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
          const{data}=res;
          setProduct(data);
          
        })
        .catch(err => {
          console.error("Error fetching product data:", err);
          return null;
        });
    }, [id]);     

  const { handelIncreaseProduct:increaseQty,handelDecreaseProduct:decreaseQty,removeItem:removeFromCart} = useStorecontext();
  if (!product) return null;

  return (
    <div className="flex items-center justify-between border rounded-xl p-4 shadow-sm">
      {/* تصویر محصول */}
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{product.quantity}</h2>
          <p className="text-gray-600">{product.price.toLocaleString()} تومان</p>
          <p className="text-sm text-gray-500">تعداد: {quantity}</p>
        </div>
      </div>
      <AddToCart id={product.id.toString()}/>

    </div>
  );
}
