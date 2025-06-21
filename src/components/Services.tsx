import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Чистка ковров на дому",
      description:
        "Профессиональная чистка прямо у вас дома. Современное оборудование и экологичные средства.",
      price: "от 300₽/м²",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "Truck",
      title: "Чистка с вывозом",
      description:
        "Забираем ковёр, чистим в цеху и возвращаем в идеальном состоянии.",
      price: "от 250₽/м²",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "Droplets",
      title: "Химчистка мягкой мебели",
      description:
        "Диваны, кресла, матрасы - возвращаем первозданную чистоту и свежесть.",
      price: "от 800₽",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: "Wind",
      title: "Устранение запахов",
      description:
        "Специальная обработка для полного устранения неприятных запахов.",
      price: "от 500₽",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "Shield",
      title: "Антибактериальная обработка",
      description:
        "Защита от бактерий, грибков и пылевых клещей. Безопасно для детей и животных.",
      price: "от 200₽/м²",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: "Star",
      title: "Реставрация ковров",
      description:
        "Восстановление старых и повреждённых ковров. Профессиональный ремонт.",
      price: "от 1000₽",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по профессиональной чистке ковров и мягкой
            мебели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                >
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.price}
                  </span>
                  <button
                    className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all`}
                  >
                    Заказать
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
