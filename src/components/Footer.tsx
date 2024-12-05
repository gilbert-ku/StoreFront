const Footer = () => {
    return (
      <footer className="bg-purple-100 px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <p className="font-mono font-extrabold text-4xl text-center md:text-start">
                Storefront
            </p>
            <p className="text-gray-600">
              Your one-stop shop for quality products. Explore a variety of items and enjoy seamless shopping.
            </p>
          </div>
  
          {/* Navigation Section */}
          <div className="space-y-4">
            <p className="font-sans font-bold text-xl md:text-2xl">Find Your Way</p>
            <ul className="text-gray-600 space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
          </div>
  
          {/* Subscription Section */}
          <div className="space-y-4">
            <p className="font-sans font-bold text-xl md:text-2xl">Subscribe to Updates</p>
            <p className="text-gray-600">
              Sign up for our weekly newsletter to receive updates on our latest arrivals.
            </p>
            <form className="relative max-w-md">
              <input
                type="email"
                className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-4 py-2"
              >
                Subscribe
              </button>
            </form>
            <div>
              <p className="text-gray-600">+254 72654 530</p>
              <p className="text-gray-600">info@mtaamall.com</p>
            </div>
          </div>
        </div>
  
        {/* Map Section */}
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.852120386034!2d36.79944617562041!3d-1.26096589872703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176b6bde7637%3A0x41554102ed5ccccf!2sSarit!5e0!3m2!1sen!2ske!4v1733352246683!5m2!1sen!2ske"
            width="100%"
            height="300"
            className="rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Storefront. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  