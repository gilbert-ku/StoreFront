import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart()

  // function to calculate total
  
  return (
    <section className="container mx-auto">
      <p className="text-center mt-5 font-bold text-2xl">My Cart</p>

      <div className="flex">
        <div className=" w-3/4">
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="w-1/4 border mx-2 mt-5 rounded-2xl h-96 shadow">
          <p className="font-semibold my-4 text-center">CART SUMMARY</p>
          <hr />
          <div className="flex justify-between p-3">
            <p>Subtotal</p>
            <p className="font-semibold">KSH 1000</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
