
import { useState, useEffect, useRef } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { 
  Brain, 
  Lightbulb, 
  Search, 
  Upload, 
  Database, 
  Zap,
  CheckCircle,
  Code,
  PenTool,
  BookOpen,
  Save,
  Shield,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Link } from 'react-router-dom';

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  color = 'primary'
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  color?: string
}) => {
  return (
    <div className="flex flex-col items-start p-6 glass-panel rounded-lg h-full">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-${color}/10 mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const WorkflowStep = ({ 
  number, 
  title, 
  description,
  color = "primary" 
}: { 
  number: number, 
  title: string, 
  description: string,
  color?: string 
}) => {
  return (
    <div className="relative">
      <div className={`absolute top-0 left-0 w-10 h-10 rounded-full bg-${color} text-white flex items-center justify-center font-bold text-lg z-10`}>
        {number}
      </div>
      <div className="pl-16">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </div>
    </div>
  );
};

const FeatureShowcase = ({
  title,
  description,
  image,
  features,
  reversed = false
}: {
  title: string,
  description: string,
  image: string,
  features: { icon: React.ReactNode, text: string }[],
  reversed?: boolean
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 my-16`}>
      <div className="w-full md:w-1/2">
        <div className="glass-panel rounded-lg overflow-hidden h-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-foreground/80 mb-6">{description}</p>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 mt-1 flex-shrink-0 text-primary">
                {feature.icon}
              </div>
              <p className="text-foreground/80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ValueProp = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode,
  title: string,
  description: string
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const HowPage = () => {
  const [loading, setLoading] = useState(true);
  const showContent = useAnimateIn(false, 300);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxFactor = 0.4;
        heroRef.current.style.transform = `translateY(${scrollPosition * parallaxFactor}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div ref={heroRef} className="relative w-full max-w-3xl mx-auto">
            <div className="absolute -z-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="glass-panel rounded-full py-5 px-8 inline-block mx-auto mb-12">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Как работает Cortex?</h1>
            </div>
            
            <p className="text-xl text-center text-foreground/80 max-w-2xl mx-auto mb-12">
              За Cortex стоит множество магии и сложных технологий, но мы сделали его простым в использовании.
            </p>
            
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full">
                Начать изучение
              </Button>
            </div>
          </div>
        </div>
        
        {/* Workflow Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Рабочий процесс Cortex</h2>
          
          <div className="relative">
            <div className="absolute left-5 top-6 w-0.5 h-[calc(100%-60px)] bg-gradient-to-b from-primary via-accent to-primary/30"></div>
            
            <div className="space-y-16 pl-4">
              <WorkflowStep 
                number={1}
                title="Собирайте"
                description="Легко сохраняйте контент откуда угодно - веб-страницы, изображения, документы, заметки и многое другое с помощью нашего браузерного расширения или мобильного приложения."
              />
              <WorkflowStep 
                number={2}
                title="Организуйте"
                description="Cortex автоматически категоризирует и тегирует ваш контент с помощью продвинутого ИИ, создавая красивую, организованную базу знаний без ручной работы."
              />
              <WorkflowStep 
                number={3}
                title="Связывайте"
                description="Открывайте удивительные связи между вашими идеями с помощью нашей визуализации нейронной сети, которая выявляет паттерны, которые вы можете упустить."
              />
              <WorkflowStep 
                number={4}
                title="Создавайте"
                description="Превращайте ваши собранные знания в новые идеи, проекты и контент с мощной помощью ИИ, который понимает ваше мышление."
              />
            </div>
          </div>
        </div>
        
        {/* Feature Showcases */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Создан для вашего цифрового мозга</h2>
          
          <FeatureShowcase
            title="Ваша база знаний визуальна"
            description="Cortex превращает ваши заметки и сохраненный контент в красивый, визуальный интерфейс, который делает просмотр вашего цифрового разума удовольствием."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Визуальная организация ваших знаний" },
              { icon: <CheckCircle size={24} />, text: "Пользовательская система тегов для персонализированной категоризации" },
              { icon: <CheckCircle size={24} />, text: "Автоматическое извлечение изображений из сохраненного контента" },
              { icon: <CheckCircle size={24} />, text: "Красивые сеточные макеты, которые адаптируются к вашему контенту" },
            ]}
          />
          
          <FeatureShowcase
            title="Мгновенно находите что угодно"
            description="Мощный семантический поиск понимает, что вы ищете, не просто сопоставляя ключевые слова, но находя связанные концепции."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Нейронный поиск, который понимает концепции, а не только ключевые слова" },
              { icon: <CheckCircle size={24} />, text: "Фильтрация по типу контента, дате, источнику и пользовательским тегам" },
              { icon: <CheckCircle size={24} />, text: "Сохранение сложных поисков для быстрого доступа позже" },
              { icon: <CheckCircle size={24} />, text: "Общение с вашей базой знаний на естественном языке" },
            ]}
            reversed={true}
          />
          
          <FeatureShowcase
            title="Связи на основе ИИ"
            description="Открывайте неожиданные связи между идеями с помощью нашей собственной нейронной сети, которая выявляет паттерны, которые вы можете упустить."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Карта нейронных связей визуализирует отношения между вашими идеями" },
              { icon: <CheckCircle size={24} />, text: "Движок предложений рекомендует релевантный контент из вашей базы знаний" },
              { icon: <CheckCircle size={24} />, text: "Еженедельный отчет инсайтов выделяет появляющиеся паттерны" },
              { icon: <CheckCircle size={24} />, text: "Постоянно учится на ваших паттернах использования" },
            ]}
          />
          
          <FeatureShowcase
            title="Ваш приватный центр знаний"
            description="В отличие от инструментов социальных закладок, Cortex полностью приватен. Ваши данные остаются только вашими, защищенными сквозным шифрованием."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Сквозное шифрование для всех ваших данных" },
              { icon: <CheckCircle size={24} />, text: "Никакого майнинга данных или рекламы" },
              { icon: <CheckCircle size={24} />, text: "Опциональный режим хранения только локально" },
              { icon: <CheckCircle size={24} />, text: "Экспорт ваших данных в любое время в стандартных форматах" },
            ]}
            reversed={true}
          />
          
          <FeatureShowcase
            title="Расширение для вашего разума"
            description="Cortex становится расширением вашего мыслительного процесса, доступным на всех ваших устройствах и интегрированным с вашим рабочим процессом."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Синхронизация на всех ваших устройствах в реальном времени" },
              { icon: <CheckCircle size={24} />, text: "Браузерные расширения для Chrome, Firefox, Safari и Edge" },
              { icon: <CheckCircle size={24} />, text: "Нативные приложения для iOS, Android, macOS и Windows" },
              { icon: <CheckCircle size={24} />, text: "API для пользовательских интеграций с вашим рабочим процессом" },
            ]}
          />
        </div>
        
        {/* Values Section */}
        <div className="py-16 px-4 rounded-lg glass-panel my-24">
          <h2 className="text-3xl font-bold text-center mb-3">Мы верим, что программное обеспечение должно не мешать</h2>
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-16">
            И позволять вам сосредоточиться на том, что важно — а это не программное обеспечение.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueProp
              icon={<Brain className="w-8 h-8 text-primary" />}
              title="Фокус — это свобода"
              description="Cortex помогает вам оставаться сосредоточенными, устраняя отвлечения и упрощая ваш мыслительный процесс."
            />
            <ValueProp
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Сделать незаметным"
              description="Лучшие инструменты — это те, которые вы забываете, что используете, потому что они ощущаются как естественные расширения вас самих."
            />
            <ValueProp
              icon={<Lightbulb className="w-8 h-8 text-primary" />}
              title="Меньше становится больше"
              description="Убирая ненужные функции и сложность, мы создаем более мощный опыт."
            />
          </div>
          
          <div className="flex justify-center mt-16">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/">
                Начать ваше путешествие
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Ключевые функции</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Upload className="w-8 h-8 text-primary" />}
              title="Импорт"
              description="Легко импортируйте ваши заметки, PDF, изображения и веб-ссылки в ваш второй мозг."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-primary" />}
              title="Организация"
              description="Наш ИИ автоматически категоризирует и тегирует ваш контент для лёгкой организации."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-primary" />}
              title="Связывание"
              description="Открывайте скрытые связи между вашими идеями с помощью нашей визуализации нейронной сети."
            />
            <FeatureCard
              icon={<Search className="w-8 h-8 text-primary" />}
              title="Поиск"
              description="Мгновенно находите именно то, что ищете, с помощью семантического поиска, который понимает контекст."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8 text-primary" />}
              title="Генерация"
              description="Получайте инсайты и предложения на основе ИИ из вашей базы знаний."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Выполнение"
              description="Превращайте ваши идеи в действия с инструментами управления проектами и сотрудничества."
            />
          </div>
        </div>
        
        {/* Who is it for section */}
        <div className="mb-20 glass-panel p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Создан для дизайнеров, писателей, исследователей, разработчиков и визуальных умов всех типов</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Дизайнеры</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Писатели</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Исследователи</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Разработчики</h3>
            </div>
          </div>
        </div>
        
        {/* Technical Details */}
        <div className="mt-20 glass-panel p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Технические детали</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">ИИ Технология</h3>
              <p className="text-foreground/80 mb-4">
                Наша платформа использует современные большие языковые модели и векторные эмбеддинги для понимания смысла вашего контента, а не только ключевых слов.
              </p>
              <h3 className="text-xl font-bold mb-3">Хранение данных</h3>
              <p className="text-foreground/80">
                Все ваши данные зашифрованы сквозным шифрованием и хранятся в безопасной облачной инфраструктуре с регулярными резервными копиями и восстановлением после сбоев.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Интеграция</h3>
              <p className="text-foreground/80 mb-4">
                Подключайтесь к инструментам, которые вы уже используете, таким как Notion, Evernote, Google Drive и многим другим через наш обширный API.
              </p>
              <h3 className="text-xl font-bold mb-3">Настройка</h3>
              <p className="text-foreground/80">
                Адаптируйте опыт под ваши потребности с настраиваемыми рабочими процессами, шаблонами и опциями визуализации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowPage;
