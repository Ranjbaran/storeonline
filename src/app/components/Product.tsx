"use client"

import { useRouter } from "next/navigation";
import { IProduct } from "../store/page";

function Product(props: IProduct) {
  const router = useRouter();

  function showDetails(id: string) {
    router.push(`/store/${id}`);
  }

  return (
    <div className="bg-[#EBF5FF] p-4 rounded-xl shadow-md flex flex-col hover:shadow-lg transition">
      {/* تصویر */}
      <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={props.image}
          alt={props.name}
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="mt-3 flex flex-col flex-grow">
        <h2 className="font-bold text-lg md:text-xl line-clamp-1">{props.name}</h2>
        <p className="text-gray-600 text-sm md:text-base">{props.category}</p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4">
          <span className="text-gray-800 font-medium">
            قیمت: {props.price}
          </span>

          <button
            onClick={() => showDetails(props.id)}
            type="button"
            className="w-full sm:w-auto text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 
            dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
          >
            جزئیات
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
