
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Categories = () => {
    const {
        categories,
        filteredProducts,
        selectedCategory,
        setCategory,

    } = useShoppingCart();

    return (
        <div className="container mx-auto">
            <h1 className="text-center font-bold text-2xl mb-5">Shop by Category</h1>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-5 mx-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setCategory(category)}
                        className={`px-4 py-2 w-full md:w-auto rounded-lg ${selectedCategory === category
                            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-blue-500"
                            : "bg-purple-200"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">

                {filteredProducts.map((product) => (

                    <Link to={`/product/${product.id}`}>
                        <div key={product.id} className="border p-4 rounded shadow  transition-transform transform hover:scale-105">
                            <img src={product.image}
                                alt={product.title}
                                loading="lazy"
                                className="h-40 w-full object-contain mb-3"
                            />
                            
                            <div className="px-3">
                                <h2 className="text-lg font-semibold text-black dark:text-black mb-2 truncate ">
                                    {product.title}
                                </h2>

                                <div className="flex justify-between items-center mb-4 text-gray-900 dark:text-gray-900">
                                    <p className="text-lg font-bold hover:text-pink-500">${product.price}</p>
                                    <div className="flex items-center space-x-1">

                                        <p className="text-yellow-500 font-semibold">
                                            ⭐ {product.rating.rate} <span className="text-gray-500">({product.rating.count}) reviews</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;

