import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";


const ProductsList: React.FC = () => {

  const {
    products
  } = useShoppingCart();

  return (
    <section className="container mx-auto mt-8">
      <div className="text-black  flex justify-center">
        <p className="text-xl md:text-3xl font-semibold ml-4">New Arrivals</p>
      </div>

      {/* </Link> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-4 my-4 md:my-8">
        {products?.map((product) => {

          return (
            <Link to={`/product/${product.id}`}>
              <div key={product.id} className="border p-4 rounded shadow  transition-transform transform hover:scale-105">
                <img src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-40 w-full object-contain mb-3"
                />

                <div className="px-3">
                  <h2 className="text-lg font-semibold text-black dark:text-black mb-2 truncate ">
                    {product.title}
                  </h2>

                  <div className="flex justify-between items-center mb-4 text-gray-900 dark:text-gray-900">
                    <p className="text-lg font-bold hover:text-pink-500">${product.price}</p>
                    <div className="flex items-center space-x-1">

                      <p className="text-yellow-500 font-semibold">
                        ⭐ {product.rating.rate} <span className="text-gray-500">({product.rating.count}) reviews</span>
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
