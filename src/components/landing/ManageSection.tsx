
import { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { FeatureIllustration } from './FeatureIllustration';
import { FeatureIcon } from './FeatureIllustrations/FeatureIcon';

interface ManageSectionProps {
  show: boolean;
}

export const ManageSection = ({
  show
}: ManageSectionProps) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Добавить Ячейки",
      description: "Легко импортируйте данные (CSV, HTML, ИИ скрапинг или клиппинг) или создавайте новые записи без усилий."
    },
    {
      title: "Подключи и Играй",
      description: "Полностью настраиваемый с открытым исходным кодом фреймворком, который адаптируется к вашему рабочему процессу."
    },
    {
      title: "Пространственное Мышление",
      description: "Визуализируйте идеи с помощью мозговых ячеек, списков, галерей, таблиц, карт или временных линий."
    },
    {
      title: "Контекстуальный",
      description: "Забудьте о папках — создавайте под-мозги, адаптированные для конкретных проектов или задач."
    },
    {
      title: "Интеллект",
      description: "Аналитика на основе ИИ, которая извлекает то, что они упоминают из каждой закрепленной темы."
    },
    {
      title: "Клип",
      description: "Собирайте данные из любого источника или устройства прямо в ваш второй мозг."
    },
    {
      title: "Агностик",
      description: "Клиппируйте любой тип контента с встроенными инструментами извлечения."
    },
    {
      title: "Поиск",
      description: "Найдите то, что ищете, с помощью интеллектуальных возможностей поиска с высокой точностью."
    },
    {
      title: "Приватный",
      description: "Держите всю вашу работу в безопасности в приватном, контролируемом пространстве."
    },
    {
      title: "Распознавание",
      description: "Идентифицируйте и извлекайте текст из изображений, видео и многого другого."
    },
    {
      title: "Поделиться",
      description: "Делитесь мыслями и идеями для беспрепятственного сотрудничества."
    },
    {
      title: "Т/С режим",
      description: "Переключайтесь между темным и упрощенным интерфейсом с пользовательскими цветовыми режимами для фокуса."
    }
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index === activeFeature ? null : index);
  };

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">Управление</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">
            Первое и единственное расширение для вашего настоящего разума.
          </p>
        </div>

        <FeatureIllustration featureIndex={activeFeature} className="transition-all duration-500" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center transition-all duration-300 ${
                activeFeature === index ? 'scale-105' : 'hover:scale-102'
              } cursor-pointer`} 
              onClick={() => handleFeatureClick(index)}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                activeFeature === index 
                  ? 'bg-primary/20 ring-2 ring-primary/50' 
                  : 'bg-primary/10'
              }`}>
                <FeatureIcon index={index} size={32} />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
