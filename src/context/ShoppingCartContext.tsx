import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import { BallTriangle } from 'react-loader-spinner'
import errorImg from "/images/error_img.jpg";



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
  // const [cartItems, setCartItems] = useState<cartItems[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");


  // store the cart items in local storage 
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>(
    "shopping-cart",
    []
  )

  //  handle reload when an error occurred
  const handleReload = () => {
    window.location.reload();
  };

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

  // if (loading) return <p>Loading...</p>;

  if (loading) {
    return <div className="flex justify-center items-center w-full h-screen">
      <div className="text-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#aa336a"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p>Loading...</p>
      </div>
    </div>

  }
  if (error) {
    // return <p>Error: {error}</p>;
    return <div className="flex justify-center items-center w-full h-screen">
      <div className="text-center">
        <img
          src={errorImg}
          alt="Error image"
          className="h-1/4 w-96 mx-auto"
        />
        <p className="font-semibold mt-4">
          Oops! Something went wrong while loading the data. Please try reloading
          the page or check your internet connection.
        </p>

        <button
          className="my-8 flex justify-center items-center mx-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          onClick={handleReload}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          <span className="ml-2">Reload</span>
        </button>
      </div>
    </div>

  }

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

