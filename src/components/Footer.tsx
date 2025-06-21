import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold">КлинКовёр</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Профессиональная чистка ковров и мягкой мебели в Москве. Быстро,
              качественно и с гарантией результата.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="tel:+74951234567"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Чистка ковров на дому
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Чистка с вывозом
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Химчистка мебели
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Устранение запахов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Антибактериальная обработка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                <a
                  href="tel:+74951234567"
                  className="hover:text-white transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                <a
                  href="mailto:info@clincover.ru"
                  className="hover:text-white transition-colors"
                >
                  info@clincover.ru
                </a>
              </div>
              <div className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-2 mt-1" />
                <span>Москва и Московская область</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                <span>Работаем 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 КлинКовёр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
