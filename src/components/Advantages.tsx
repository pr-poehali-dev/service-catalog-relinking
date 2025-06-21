import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Clock",
      title: "Быстрый выезд",
      description: "Приезжаем к вам в течение 30 минут после звонка",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "Shield",
      title: "Безопасные средства",
      description:
        "Используем только экологичную химию, безопасную для детей и животных",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "Award",
      title: "Опытные мастера",
      description: "Команда профессионалов с опытом работы более 5 лет",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: "Wrench",
      title: "Современное оборудование",
      description:
        "Профессиональные машины для глубокой чистки и быстрой сушки",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Принимаем наличные, карты, переводы. Без предоплаты",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: "RefreshCw",
      title: "Гарантия качества",
      description:
        "Даём гарантию на все виды работ. Переделаем бесплатно при необходимости",
      color: "from-pink-500 to-pink-600",
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
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/20 transition-all duration-300">
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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 inline-block">
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
