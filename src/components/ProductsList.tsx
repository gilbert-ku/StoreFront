import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ProductsList: React.FC = () => {

  const {
    products
  } = useShoppingCart();

  return (
    <section className="container mx-auto mt-8">
      <div className="text-black  flex justify-between">
        <p className="text-xl md:text-3xl font-semibold ml-4">New Arrivals</p>
        <p className="text-xl font-thin mr-4 underline hidden md:inline">See all</p>
      </div>

      {/* </Link> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-4 my-4 md:my-8">
        {products?.map((product) => {

          return (
            <Link to={`/product/${product.id}`}>
              <div
                key={product.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 shadow-md transition-transform transform hover:scale-105"
              >
                <div className="relative h-64 w-full bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className=" placeholder-gray-200 h-full w-full object-scale-down rounded-t-lg p-3"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-300 dark:text-white mb-2 truncate ">
                    {product.title}
                  </h2>

                  <div className="flex justify-between items-center mb-4 text-gray-900 dark:text-gray-100">
                    <p className="text-lg font-bold hover:text-pink-500">${product.price}</p>
                    <div className="flex items-center space-x-1">
                      
                      <p className="text-yellow-400">
                        ⭐ {product.rating.rate} <span className="text-gray-300">({product.rating.count}) reviews</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
