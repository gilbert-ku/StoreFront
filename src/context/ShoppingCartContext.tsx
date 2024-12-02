import { createContext, useContext, ReactNode, useState } from "react";

type useCartProviderProps = {
    children: ReactNode
}

type cartItems = {
    id: number
    quantity: number
}
// type shopping cart
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

// shopping context
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// getting the context
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

// provider function
export function ShoppingCartProvider({ children }: useCartProviderProps) {
    const [cartItems, setCartItems] = useState<cartItems[]>([])

    const getItemQuantity = () => {
        return cartItems.find(item => item.id)?.quantity || 0
    }

    //  add function
    const increaseCartQuantity = (id: number) => {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    // decrease quantity function
    const decreaseCartQuantity = (id: number) => {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    // remove function

    const removeFromCart = (id: number) => {
        setCartItems(currentItem => {
            return currentItem.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}