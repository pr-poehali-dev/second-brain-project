
import { Brain, BadgeDollarSign, Building, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedTransition } from '@/components/AnimatedTransition';

interface PricingSectionProps {
  showPricing: boolean;
}

export const PricingSection = ({ showPricing }: PricingSectionProps) => {
  const pricingPlans = [
    {
      name: "Базовый",
      price: "$0",
      description: "Идеально для начала путешествия во второй мозг",
      features: [
        "До 1,000 заметок и связей",
        "Базовые предложения ИИ",
        "Основные функции визуализации",
        "Стандартные возможности поиска",
        "Поддержка сообщества"
      ],
      icon: <Brain size={24} />,
      color: "from-blue-400/60 to-blue-600/40",
      buttonText: "Начать Бесплатно",
      buttonVariant: "outline"
    },
    {
      name: "Про",
      price: "$12",
      period: "/месяц",
      description: "Для серьезных работников знаний и исследователей",
      features: [
        "Неограниченные заметки и связи",
        "Продвинутые связи ИИ",
        "Полные возможности визуализации",
        "Семантический поиск и осознание контекста",
        "Приоритетная поддержка",
        "Множественные графы знаний"
      ],
      icon: <BadgeDollarSign size={24} />,
      color: "from-purple-400/60 to-purple-600/40",
      buttonText: "Обновить до Про",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Корпоративный",
      price: "По запросу",
      description: "Для команд и организаций, управляющих коллективными знаниями",
      features: [
        "Все из плана Про",
        "Функции командного сотрудничества",
        "Контроли администратора и журналы аудита",
        "Пользовательские интеграции",
        "Выделенный менеджер поддержки",
        "Сессии обучения сотрудников"
      ],
      icon: <Building size={24} />,
      color: "from-indigo-400/60 to-indigo-600/40",
      buttonText: "Связаться с Продажами",
      buttonVariant: "outline"
    }
  ];

  return (
    <AnimatedTransition show={showPricing} animation="slide-up" duration={600}>
      <div className="mt-32 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/0 via-muted/50 to-muted/0 rounded-3xl blur-xl opacity-70"></div>
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1.5 bg-muted rounded-xl mb-4">
            <div className="bg-background px-4 py-2 rounded-lg shadow-sm">
              <BadgeDollarSign size={22} className="inline-block mr-2 text-primary" />
              <span className="font-semibold">Тарифные Планы</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите идеальный план для ваших нужд</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Начните бесплатно и обновляйтесь по мере роста вашего второго мозга
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`border relative overflow-hidden ${plan.popular ? 'shadow-xl ring-1 ring-primary/50 scale-105 md:scale-110 z-10' : 'shadow-md hover:shadow-lg'} transition-all duration-300 hover:translate-y-[-4px]`}>
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="px-4 py-1 bg-primary text-primary-foreground rounded-b-lg text-xs font-medium shadow-md">
                    Самый Популярный
                  </div>
                </div>
              )}
              <div className={`h-2 w-full bg-gradient-to-r ${plan.color}`} />
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${plan.color} mb-4 shadow-md`}>
                  {plan.icon}
                </div>
                <CardTitle className="flex items-end gap-2">
                  <span>{plan.name}</span>
                </CardTitle>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                </div>
                <CardDescription className="mt-3">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pb-6">
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' : ''}`} variant={plan.buttonVariant as "default" | "outline"}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
