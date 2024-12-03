import { useShoppingCart } from "../context/ShoppingCartContext";

const ProductsList: React.FC = () => {

  const { 
    getItemQuantity, 
    increaseCartQuantity, 
    decreaseCartQuantity, 
    removeFromCart,
    products 
  } = useShoppingCart();

  return (
    <section className="container mx-auto mt-8">
      <div className="text-black text-6xl flex justify-between">
        <p>New Arrivals</p>
        <p>See all</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {products?.map((product) => {
          const quantity = getItemQuantity(product.id); 

          return (
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

                <div className="flex justify-between items-center mb-4 text-gray-900 dark:text-gray-100">
                  <p className="text-lg font-bold">${product.price}</p>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span>{product.rating.rate}</span>
                  </div>
                </div>

                {/* Render conditionally based on quantity */}
                <div className="mt-auto">
                  {quantity === 0 ? (
                    <button
                      onClick={() => increaseCartQuantity(product.id)} 
                      className="bg-blue-600 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      + Add to Cart
                    </button>
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4 py-4 text-black">
                        <button
                          onClick={() => decreaseCartQuantity(product.id)} 
                          className="px-5 bg-pink-200 rounded-md hover:bg-purple-300 text-2xl"
                        >
                          -
                        </button>
                        <div className="text-center px-4 text-white font-semibold">
                          <span className="text-xl">{quantity}</span> in Cart
                        </div>
                        <button
                          onClick={() => increaseCartQuantity(product.id)} 
                          className="px-5 bg-pink-200 rounded-md hover:bg-purple-300 text-2xl"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(product.id)} 
                        className="bg-red-600 text-white w-full py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
