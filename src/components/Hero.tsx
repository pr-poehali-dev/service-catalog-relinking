import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Профессиональная{" "}
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                чистка ковров
              </span>{" "}
              в Москве
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Возвращаем вашим коврам первозданную чистоту и свежесть.
              Современное оборудование, экологичные средства, гарантия
              результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-lg px-8 py-4"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Заказать чистку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="text-green-500 mr-2"
                />
                Выезд за 30 минут
              </div>
              <div className="flex items-center">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="text-green-500 mr-2"
                />
                Гарантия качества
              </div>
              <div className="flex items-center">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="text-green-500 mr-2"
                />
                Без предоплаты
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="Чистка ковров"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold animate-bounce">
              🔥 -30% до конца месяца!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
