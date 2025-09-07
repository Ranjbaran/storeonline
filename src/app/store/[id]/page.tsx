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
      <div className="grid grid-cols-2 max-h-60">
        <div className="felx justify-around flex-col items-center">
          <h1 className="text-blue-500 font-sans text-xl mb-4">
            جزئیات محصول <span className="text-black mr-1">{product.name}</span>
          </h1>

          <div>
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
              {product.price}
            </span>
          </div>

          <div>
            <p className="text-gray-800"> توضیحات:</p>
            <p className=" text-blue-800 text-md font-medium   rounded-sm">
              {product.description}
            </p>
          </div>
        </div>
        <div>
          <figure className="max-w-lg">
            <img
              className="h-auto max-w-full rounded-lg"
              src={product.image}
              alt="image description"
            />
            <AddToCart id={id} />
          </figure>
        </div>
      </div>
    </>
  );
}

export default DetailsProduct;
