import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-apple-gray py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-300">
          <div className="space-y-4 mb-6 md:mb-0">
            <h4 className="text-sm font-semibold text-gray-800">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-apple-blue apple-transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-apple-blue apple-transition">
                  Карты
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-sm text-gray-600 hover:text-apple-blue apple-transition">
                  Инструкция
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 mb-6 md:mb-0">
            <h4 className="text-sm font-semibold text-gray-800">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-apple-blue apple-transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-apple-blue apple-transition">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-apple-blue apple-transition">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-800">Контакты</h4>
            <p className="text-sm text-gray-600">
              Электронная почта: support@applegiftcards.ru
            </p>
            <p className="text-sm text-gray-600">
              Телефон: +7 (800) 123-45-67
            </p>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Apple Gift Cards. Все права защищены. Apple и логотип Apple являются товарными знаками Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
