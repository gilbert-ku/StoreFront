import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ProductDetails = () => {

    // Get the product ID from the route for dynamic routing
    const { id } = useParams<{ id: string }>();

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        products
    } = useShoppingCart();

    // Find the product by ID
    const product = products?.find((productItem) => (
        productItem.id === Number(id)
    ));

    if (!product) return <p>Product not found</p>;

    const quantity = getItemQuantity(product.id);

    return (

        <>
            <section className="container mx-auto">
                <div className=" p-6 my-8 shadow-lg border mx-2 md:mx-0">
                    <div className=" lg:flex lg:flex-row gap-6 mx-10">
                        {/* Product Image */}
                        <div className="h-auto p-3  md:h-[25rem] bg-white w-full md:w-full lg:w-1/2 ">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full  h-[25rem] object-contain object-center "

                            />
                        </div>


                        {/* Product Details */}
                        <div className=" w-full md:w-3/4 lg:w-1/2 flex-col">
                            <div className="my-8 md:mr-8">
                                <h1 className="text-2xl md:text-3xl text-purple-500 font-bold mb-4">{product.title}</h1>
                                <p className="text-sm md:text-lg mb-6">{product.description}</p>
                            </div>

                            <div className="flex justify-between items-center mt-6 md:mr-8">
                                <p className="text-2xl text-purple-500 font-semibold hover:text-pink-500">${product.price}</p>
                                <div className="flex items-center space-x-1">

                                    <p className="text-yellow-400">
                                        ⭐ {product.rating.rate} <span className="text-gray-400">({product.rating.count}) reviews</span>
                                    </p>
                                </div>
                            </div>

                            <div className="my-8 md:mr-8">
                                {quantity === 0 ? (
                                    <button
                                        onClick={() => increaseCartQuantity(product.id)}
                                        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-full py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-colors"
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
                                            <div className="text-center px-4 text-black font-semibold">
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
                                            className="bg-red-600 text-white w-full py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex justify-center"
                                        >
                                            <span className="mr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg></span>
                                            <span className="ml-2-4">Remove </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default ProductDetails;
