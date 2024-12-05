import { useShoppingCart } from "../context/ShoppingCartContext";
type CartItemProp = {
  id: number
  quantity: number
}

const ShoppingCart = ({ id, quantity }: CartItemProp) => {
  const { products } = useShoppingCart()

  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart()

  const product = products?.find(item => item.id === id)
  if (product == null) return null
  return (
    <>
    <section className="">
      <div className=" shadow-lg border my-5 rounded-2xl mx-2">
        {/* image and title */}
        <div className="md:flex justify-between">
          <div className=" md:flex justify-center items-center">
            {/* image */}
            <div className=" flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-scale-down w-40 h-48 md:h-28 p-3 rounded-lg"
              />
            </div>

            <div className="my-2 mi:0 md:ml-4 px-4">
              <p className="py-2 mt-3 font-semibold text-lg">{product.title}</p>
              <div className="flex justify-between items-center mt-4 text-gray-900">
                <div>
                  $ {product.price}
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
            <p className="text-2xl font-bold p-9"> <span className="font-thin text-lg me-6"> Subtotal</span> $ {product.price * quantity}</p>
          </div>
        </div>


        {/* button */}
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => removeFromCart(product.id)}
            className="bg-red-200 hover:bg-red-600 text-black hover:text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out flex"
            aria-label="Remove item from cart"
          >
            <span className="mr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg></span>
            <span className="ml-2-4">Remove </span>
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
    </section>
      

    </>
  );
};

export default ShoppingCart;
