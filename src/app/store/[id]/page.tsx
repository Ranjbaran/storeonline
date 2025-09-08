import AddToCart from "@/app/components/AddToCart";
import { IProduct } from "../page";

interface DetailsProductProps {
  params: Promise<{ id: string }>;
}
async function DetailsProduct(props: DetailsProductProps) {
  const { id } = await props.params;
  const result = await fetch(`http://localhost:3005/products/${id}`);
  const product = (await result.json()) as IProduct;
  return (
    <>
      <div className="grid grid-cols-2 max-h-max p-5">
        <div className="felx justify-around flex-col items-center p-5">
          <h1 className="text-blue-500 font-sans text-xl mb-4">
            جزئیات محصول <span className="text-black mr-1">{product.name}</span>
          </h1>

          <div className="max-h-max">
            <span className="text-gray-800">نام محصول:</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              {product.name}
            </span>
          </div>
          <div>
            <span className="text-gray-800"> دسته بندی:</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              {product.category}
            </span>
          </div>
          <div>
            <span className="text-gray-800"> قیمت:</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              {product.price} ریال
            </span>
          </div>

          <div>
            <p className="text-gray-800"> توضیحات:</p>
            <p className=" text-blue-800 text-md font-medium   rounded-sm">
              {product.description}
            </p>
          </div>
        </div>
        <div className="flex  justify-center flex-col items-center">
            <img
              className="max-h-50 max-w-full rounded-lg object-cover"
              src={product.image}
              alt="image description"
            />

          <div className=" mb-5">
            <AddToCart id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsProduct;
