
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialsSectionProps {
  showTestimonials: boolean;
}

export const TestimonialsSection = ({
  showTestimonials
}: TestimonialsSectionProps) => {
  const testimonials = [
    {
      quote: "Революционный подход к управлению моими проектами!",
      name: "Сара П.",
      role: "Продукт-менеджер",
      rating: 5
    },
    {
      quote: "Интеграция с ИИ сэкономила мне бесчисленные часы.",
      name: "Джеймс Л.",
      role: "Разработчик ПО",
      rating: 5
    },
    {
      quote: "Наконец-то у меня есть способ организовать свои идеи и воплощать их без проблем.",
      name: "Аманда Т.",
      role: "Создатель контента",
      rating: 4
    },
    {
      quote: "Библиотека шаблонов - спасение для моих исследований и презентаций.",
      name: "Др. Михаил Р.",
      role: "Исследователь",
      rating: 5
    },
    {
      quote: "Я могу сотрудничать с командой как никогда раньше. Это так интуитивно!",
      name: "Эмма А.",
      role: "Руководитель маркетинга",
      rating: 4
    },
    {
      quote: "Функция поиска невероятная. Я могу найти что угодно за секунды.",
      name: "Лаура М.",
      role: "Аналитик данных",
      rating: 5
    },
    {
      quote: "Это как иметь ИИ-помощника, который работает именно так, как я хочу.",
      name: "Рафаэль О.",
      role: "Основатель стартапа",
      rating: 5
    },
    {
      quote: "Инструменты визуализации изменили то, как я представляю сложные данные.",
      name: "Дэвид К.",
      role: "Специалист по данным",
      rating: 4
    },
    {
      quote: "Я никогда не была более организованной. Все находится в одном клике.",
      name: "Николь Ф.",
      role: "Исполнительный помощник",
      rating: 5
    },
    {
      quote: "Рекомендации ИИ удивительно точные и полезные.",
      name: "Томас Дж.",
      role: "Исследователь",
      rating: 4
    },
    {
      quote: "Моя продуктивность удвоилась с тех пор, как я начал использовать эту платформу.",
      name: "София Р.",
      role: "Проект-менеджер",
      rating: 5
    },
    {
      quote: "Интеграция с другими инструментами делает мой рабочий процесс плавным.",
      name: "Алекс С.",
      role: "Продуктовый дизайнер",
      rating: 5
    }
  ];

  // Component to render star ratings
  const StarRating = ({
    rating
  }: {
    rating: number;
  }) => {
    return (
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
    );
  };

  return (
    <AnimatedTransition show={showTestimonials} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">
            Доверяют мыслители<br />
            и деятели по всему миру.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border/50 p-6 rounded-lg shadow-sm h-full">
              <StarRating rating={testimonial.rating} />
              <p className="text-lg font-medium mb-4">{testimonial.quote}</p>
              <div className="mt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
