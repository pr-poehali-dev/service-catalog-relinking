import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Clock",
      title: "Выезд за 30 минут",
      description: "5000+ клиентов убедились - мы самые быстрые в городе",
      color: "from-blue-500 to-blue-600",
      badge: "ФАКТ",
    },
    {
      icon: "Shield",
      title: "Немецкая химия Kärcher",
      description: "Оборудование стоимостью 2 млн руб. Сертификаты качества EU",
      color: "from-green-500 to-green-600",
      badge: "ЭКСКЛЮЗИВ",
    },
    {
      icon: "Award",
      title: "Мастера с опытом 8+ лет",
      description: "Дипломы международных курсов по химчистке текстиля",
      color: "from-orange-500 to-orange-600",
      badge: "ПРОФИ",
    },
    {
      icon: "Microscope",
      title: "Технология Deep Clean™",
      description:
        "Удаляем грязь на молекулярном уровне. Патентованная методика",
      color: "from-purple-500 to-purple-600",
      badge: "УНИКАЛЬНО",
    },
    {
      icon: "CreditCard",
      title: "0₽ предоплата",
      description:
        "Оплата после результата. Принимаем карты, наличные, переводы",
      color: "from-teal-500 to-teal-600",
      badge: "ЧЕСТНО",
    },
    {
      icon: "RefreshCw",
      title: "Гарантия до 6 месяцев",
      description: "Страховка 100 000₽ на каждый заказ. Переделаем бесплатно",
      color: "from-pink-500 to-pink-600",
      badge: "ГАРАНТИЯ",
    },
  ];

  return (
    <section
      id="advantages"
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы работаем честно, качественно и с гарантией результата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/20 transition-all duration-300">
                <div className="absolute -top-3 -right-3">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {advantage.badge}
                  </span>
                </div>
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${advantage.color} mb-6`}
                >
                  <Icon
                    name={advantage.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center text-black mb-8">
            <h3 className="text-2xl font-bold mb-4">🏆 Наши достижения</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm">довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8</div>
                <div className="text-sm">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm">рейтинг Яндекс</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">работаем</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Готовы заказать чистку?</h3>
            <p className="mb-6 text-blue-100">
              Свяжитесь с нами прямо сейчас и получите скидку 10%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74951234567"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </a>
              <a
                href="https://wa.me/74951234567"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
