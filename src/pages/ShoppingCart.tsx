import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ShoppingCart = () => {
  const {cartItems} = useShoppingCart()
  return (
    <section className="container mx-auto">
      <p className="text-center mt-5 font-bold text-2xl">My Cart</p>

      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item}/>
        ))}
      </div>
    </section>
  );
};

export default ShoppingCart;
