import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartItems, products } = useShoppingCart()

  // function to calculate total
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products?.find((item) => item.id === cartItem.id);
    return product ? total + product.price * cartItem.quantity : total;
  }, 0);

  return (
    <section className="container mx-auto">
      <p className="text-center mt-5 font-bold text-2xl">My Cart</p>

      <div className="flex">
        <div className=" w-3/4">
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="w-1/4 border mx-2 mt-5 rounded-2xl h-64 shadow-lg bg-white">
          <p className="font-semibold text-lg my-4 text-center text-gray-800 tracking-wide">
            CART SUMMARY
          </p>
          <hr className="border-t border-gray-200" />
          <div className="flex justify-between px-4 py-3 border-b">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold text-gray-900">KSH {totalPrice.toFixed(2)}</p>
          </div>
          <div className="px-4 py-4">
            <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-medium text-sm">
              Mtaa Mall Express
            </p>
            <p className="text-gray-700 text-sm mt-2">
              We deliver! Items are eligible for free delivery.
            </p>
          </div>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 w-11/12 mx-auto block rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            CHECK OUT KSH {totalPrice.toFixed(2)}
          </button>
        </div>

      </div>
    </section>
  );
};

export default ShoppingCart;
