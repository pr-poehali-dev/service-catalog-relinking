import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const works = [
    {
      before:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1558618047-3c8d9ac9fe00?w=400&h=300&fit=crop",
      title: "Персидский ковёр антик",
      problem: "Застарелые винные пятна, потеря цвета",
      solution: "Деликатная реставрация с восстановлением красок",
      result: "Ковёр выглядит как новый, яркие цвета восстановлены",
    },
    {
      before:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: "Детский ковёр с пятнами",
      problem: "Пятна от сока, запах мочи домашних животных",
      solution: "Глубокая биоочистка + антибактериальная обработка",
      result: "100% устранение запахов, безопасность для детей",
    },
    {
      before:
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      title: "Офисное ковровое покрытие",
      problem: "Сильное загрязнение, потертости от обуви",
      solution: "Промышленная чистка с защитной пропиткой",
      result: "Продлен срок службы на 3-5 лет",
    },
    {
      before:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1558618047-3c8d9ac9fe00?w=400&h=300&fit=crop",
      title: "Диван с пятнами жира",
      problem: "Жирные пятна от еды, неприятный запах",
      solution: "Химчистка с обезжиривающими средствами",
      result: "Полное удаление пятен, свежесть ткани",
    },
    {
      before:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: "Матрас после затопления",
      problem: "Следы воды, плесень, затхлый запах",
      solution: "Экстренная сушка + противогрибковая обработка",
      result: "Матрас спасен, устранена вся плесень",
    },
    {
      before:
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      title: "Шелковый ковёр ручной работы",
      problem: "Деликатная ткань требует особого ухода",
      solution: "Ручная чистка специальными средствами",
      result: "Сохранен блеск шелка, структура не повреждена",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Примеры наших работ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посмотрите, как мы преображаем ковры наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-2 h-48">
                  <div className="relative">
                    <img
                      src={work.before}
                      alt="До чистки"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      ДО
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={work.after}
                      alt="После чистки"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                      ПОСЛЕ
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {work.title}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-red-600">
                        Проблема:
                      </span>
                      <p className="text-gray-600">{work.problem}</p>
                    </div>
                    <div>
                      <span className="font-medium text-blue-600">
                        Решение:
                      </span>
                      <p className="text-gray-600">{work.solution}</p>
                    </div>
                    <div>
                      <span className="font-medium text-green-600">
                        Результат:
                      </span>
                      <p className="text-gray-600">{work.result}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Хотите увидеть больше примеров?
            </h3>
            <p className="text-gray-600 mb-6">
              У нас есть сотни успешных работ по чистке ковров
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                📸 5000+ довольных клиентов
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                ⭐ 4.9/5 средняя оценка
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                🏆 8 лет опыта
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
