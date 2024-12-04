import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>(); // Get the product ID from the route for dynamic routing
    const { products, increaseCartQuantity } = useShoppingCart(); 

    // Find the product by ID
    const product = products?.find((productItem) => (
        productItem.id === Number(id)
    ));

    if (!product) return <p>Product not found</p>; 

    return (
        <div className="container mx-auto p-6 h-[25rem]">
            <div className=" md:flex lg:flex-row gap-6">
                {/* Product Image */}
                <div className=" md:h-[22rem] w-[22rem">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full object-cover rounded-lg  h-[18] "
                    />
                </div>

                {/* Product Details */}
                <div className="">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-lg mb-6">{product.description}</p>
                    <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
                    <p className="text-yellow-400">
                        ⭐ {product.rating.rate} ({product.rating.count} reviews)
                    </p>

                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-700"
                        onClick={() => increaseCartQuantity(product.id)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
