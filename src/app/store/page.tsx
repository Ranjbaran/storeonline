import Product from "../components/Product";

export interface IProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
  tags: string[];
}
async function Store() {
  const result = await fetch("http://localhost:3002/products");
  const data = (await result.json()) as IProduct[];
  return (
    <>
      <h1 className="text-blue-500 font-medium text-2xl mb-4 mt-4">
        محصولات
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {data.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Store;
