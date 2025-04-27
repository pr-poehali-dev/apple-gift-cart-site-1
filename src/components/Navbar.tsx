import { Link } from "react-router-dom";
import { AppleIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur-bg border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <AppleIcon className="h-6 w-6 text-black" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <Link to="/" className="text-gray-800 hover:text-apple-blue apple-transition">
              Главная
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-apple-blue apple-transition">
              Карты
            </Link>
            <Link to="/guide" className="text-gray-800 hover:text-apple-blue apple-transition">
              Инструкция
            </Link>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
