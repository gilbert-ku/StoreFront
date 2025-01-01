import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import ErrorPage from "../components/ErrorPage";
import LoadingPage from "../components/LoadingPage";



type useCartProviderProps = {
  children: ReactNode
}

type CartItems = {
  id: number
  quantity: number
}


export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string
  category: string
  rating: {
    rate: number;
    count: number;
  };
};

// type shopping cart
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItems[]
  products: Product[]
  filteredProducts: Product[];
  categories: string[];
  selectedCategory: string;
  setCategory: (category: string) => void;
}

// shopping context
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// getting the context
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

// provider function
export function ShoppingCartProvider({ children }: useCartProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");


  // store the cart items in local storage 
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>(
    "shopping-cart",
    []
  )

  // function to fetch products
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

  // loading
  if (loading) return <LoadingPage />;

  // handle error
  if (error) return <ErrorPage />
    

  // function to calculate number of item in the cart
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  //Function to get the quantity of a specific item in the cart.
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (!currentItems.some((item) => item.id === id)) {
        // check if Item is not in the cart, add it with a quantity of 1
        return [...currentItems, { id, quantity: 1 }];
      }
      // Item is already in the cart, increase its quantity
      return currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      const targetItem = currentItems.find((item) => item.id === id);
      if (targetItem?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      }
      return currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  // Filtered Products
  const filteredProducts = selectedCategory === "See All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Categories List
  const categories = [" See All", ...new Set(products.map((product) => product.category))];

  // Set Category Function
  const setCategory = (category: string) => setSelectedCategory(category);

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        products,
        filteredProducts,
        categories,
        setCategory,
        selectedCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

