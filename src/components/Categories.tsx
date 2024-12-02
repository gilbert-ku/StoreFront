


function Categories() {
    return (
        <>
            <div className="container mx-auto md:flex justify-between mb-8">
                <p className=" mx-3 font-sans font-bold text-4xl">
                    Shop By Category
                </p>
                <div className="grid gris-cols-1 md:grid-cols-2 gap-4 md:w-1/2 mx-4">

                    <button className="h-20 flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-100 text-black rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <span className="flex items-center mx-auto">
                            <img src="/images/electronics.png" alt="Electronics" className="h-14 w-14 object-contain rounded-lg" />
                            <span className="ml-4 text-lg font-medium">Electronics</span>
                        </span>
                    </button>

                    <button className="h-20 flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-100 text-black rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <span className="flex items-center mx-auto">
                            <img src="/images/jewelry.jpg" alt="Men's Clothing" className="h-14 w-14 object-contain rounded-lg" />
                            <span className="ml-4 text-lg font-medium">Jewelry</span>
                        </span>
                    </button>


                    <button className="h-20 flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-100 text-black rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <span className="flex items-center mx-auto">
                            <img src="/images/woman.png" alt="women's clothing" className="h-14 w-14 object-contain rounded-lg" />
                            <span className="ml-4 text-lg font-medium">Women's clothing</span>
                        </span>
                    </button>


                    <button className="h-20 flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-100 text-black rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <span className="flex items-center mx-auto">
                            <img src="/images/men.png" alt="Men's Clothing" className="h-14 w-14 object-contain rounded-lg" />
                            <span className="ml-4 text-lg font-medium">Men's Clothing</span>
                        </span>
                    </button>


                </div>
            </div>
        </>
    )
}

export default Categories