import { useState, useEffect } from "react"

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number; 
    count: number;
  };
};

const ProductsList: React.FC = () => {

  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <section className="container mx-auto mt-8">
      <div className="text-black text-6xl flex justify-between">
        <p>New Arrivals</p>
        <p>See all</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {products?.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105"
          >
            <div className="relative h-80 w-full bg-white">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-scale-down rounded-t-lg p-3"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 truncate">
                {product.title}
              </h2>
              {/* <p className="text-sm mb-4 font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
                {product.description}
              </p> */}
              <div className="flex justify-between items-center mb-4 text-gray-900 dark:text-gray-100">
                <p className="text-lg font-bold">${product.price}</p>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span>{product.rating.rate}</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}


export default ProductsList