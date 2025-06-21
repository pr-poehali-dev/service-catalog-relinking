import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const packages = [
    {
      name: "Базовая",
      price: "300₽/м²",
      description: "Стандартная чистка на дому",
      features: [
        "Предварительная обработка пятен",
        "Глубокая чистка с шампунем",
        "Сушка и расчёсывание ворса",
        "Гарантия 30 дней",
      ],
      color: "border-blue-200",
      buttonColor: "from-blue-500 to-blue-600",
    },
    {
      name: "Премиум",
      price: "450₽/м²",
      description: "Профессиональная чистка с защитой",
      features: [
        "Все услуги базового пакета",
        "Антибактериальная обработка",
        "Защитная пропитка от грязи",
        "Устранение запахов",
        "Гарантия 60 дней",
      ],
      color: "border-green-200 ring-2 ring-green-500",
      buttonColor: "from-green-500 to-green-600",
      popular: true,
    },
    {
      name: "VIP",
      price: "600₽/м²",
      description: "Комплексный уход за коврами",
      features: [
        "Все услуги премиум пакета",
        "Реставрация повреждений",
        "Профессиональная сушка",
        "Доставка туда и обратно",
        "Гарантия 90 дней",
      ],
      color: "border-orange-200",
      buttonColor: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      id="prices"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Цены на услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные цены без скрытых доплат. Выберите подходящий пакет услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.color} hover:shadow-2xl transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    🏆 Популярный
                  </span>
                </div>
              )}
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full bg-gradient-to-r ${pkg.buttonColor} hover:shadow-lg transition-all`}
                >
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Нужна индивидуальная консультация?
          </p>
          <Button size="lg" variant="outline" className="border-2">
            <Icon name="Phone" size={16} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
