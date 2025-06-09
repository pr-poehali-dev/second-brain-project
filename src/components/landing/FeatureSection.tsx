
import { BrainCircuit, Search, FileText, LinkIcon, Database, Network, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedTransition } from '@/components/AnimatedTransition';

interface FeatureSectionProps {
  showFeatures: boolean;
}

export const FeatureSection = ({ showFeatures }: FeatureSectionProps) => {
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: "Нейронные Связи",
      description: "Создавайте значимые связи между вашими заметками, файлами и идеями с помощью нашего визуального сетевого просмотра.",
      color: "from-blue-400/60 to-blue-600/40"
    },
    {
      icon: <Search size={24} />,
      title: "Умный Поиск",
      description: "Мгновенно находите что угодно с помощью нашего семантического поиска на основе ИИ, который понимает контекст и смысл.",
      color: "from-purple-400/60 to-purple-600/40"
    },
    {
      icon: <FileText size={24} />,
      title: "Богатый Контент",
      description: "Храните заметки, ссылки, файлы, изображения и проекты в одной унифицированной системе знаний.",
      color: "from-green-400/60 to-green-600/40"
    },
    {
      icon: <LinkIcon size={24} />,
      title: "Автоматическое Связывание",
      description: "Наш ИИ предлагает связи между связанным контентом для органичного построения вашего графа знаний.",
      color: "from-amber-400/60 to-amber-600/40"
    },
    {
      icon: <Database size={24} />,
      title: "Импорт из Разных Источников",
      description: "Импортируйте контент из различных источников, включая приложения для заметок, закладки и многое другое.",
      color: "from-rose-400/60 to-rose-600/40"
    },
    {
      icon: <Network size={24} />,
      title: "Визуальное Мышление",
      description: "Визуализируйте ваши мысли и связи в интерактивном графе знаний.",
      color: "from-indigo-400/60 to-indigo-600/40"
    }
  ];

  return (
    <AnimatedTransition show={showFeatures} animation="slide-up" duration={600}>
      <div className="mt-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1.5 bg-muted rounded-xl mb-4">
            <div className="bg-background px-4 py-2 rounded-lg shadow-sm">
              <Sparkles size={22} className="inline-block mr-2 text-primary" />
              <span className="font-semibold">Ключевые Функции</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Все, что нужно для расширения вашего разума</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Откройте для себя, как наш цифровой второй мозг преобразует способ захвата, связывания и воспроизведения информации.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-card/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group">
              <div className={`h-1.5 w-full bg-gradient-to-r ${feature.color}`} />
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
