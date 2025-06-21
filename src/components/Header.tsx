import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">КлинКовёр</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#prices"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Цены
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#advantages"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Преимущества
            </a>
          </nav>

          <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
