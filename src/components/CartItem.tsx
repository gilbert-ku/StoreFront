import { useShoppingCart } from "../context/ShoppingCartContext";
type CartItemProp = {
  id: number
  quantity: number
}

const ShoppingCart = ({ id, quantity }: CartItemProp) => {
  const {products} = useShoppingCart()
  
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart()

  const product = products?.find(item => item.id === id)
  if (product == null) return null
  return (
    <>
      <div className=" shadow-lg w-full border my-5 rounded-2xl">
        <div className="flex justify-between">
          <div className="w-1/2 flex">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover h-28 p-3 rounded-lg"
            />
            <div className="my-2 ml-4">
              <p className="py-2 mt-3 font-semibold text-lg">{product.title}</p>
              <div className="flex justify-between items-center mt-4 text-gray-900">
                <div>
                  Ksh {product.price}
                  {quantity > 1 && (
                    <span className="mx-1 text-gray-600 text-sm">x{quantity}</span>
                  )}
                </div>

                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span>{product.rating.rate}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-2xl font-bold p-9">KSh {product.price * quantity}</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => removeFromCart(product.id)}
            className="bg-red-200 hover:bg-red-600 text-black hover:text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out"
            aria-label="Remove item from cart"
          >
            Remove
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => decreaseCartQuantity(product.id)}
              className="px-5 bg-pink-200 rounded-md hover:bg-purple-300 text-2xl transition duration-300"
              aria-label="Decrease quantity"
            >
              -
            </button>

            <div className="text-center text-black font-semibold text-xl">
              {quantity}
            </div>

            <button
              onClick={() => increaseCartQuantity(product.id)}
              className="px-5 bg-pink-200 rounded-md hover:bg-purple-300 text-2xl transition duration-300"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default ShoppingCart;
