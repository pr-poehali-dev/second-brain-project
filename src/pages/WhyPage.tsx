import { useState, useEffect } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Lightbulb, RefreshCw, Stars, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const WhySection = ({
  title,
  content,
  icon,
  id
}: {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  id: string;
}) => {
  return <div id={id} className="mb-20 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
      </div>
      <div className="text-foreground/80 space-y-4">
        {content}
      </div>
    </div>;
};
const WhyPage = () => {
  const [loading, setLoading] = useState(true);
  const showContent = useAnimateIn(false, 300);
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground bg-clip-text">
            Почему?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Все, что мы делаем, начинается с этого вопроса.
          </p>
          
          <div className="mt-10 glass-panel p-8 md:p-10 rounded-lg max-w-3xl mx-auto shadow-lg border-2 border-primary/20">
            <p className="text-xl md:text-2xl text-foreground/90">Почему Второй Мозг должен существовать? Почему кто-то должен заботиться о его использовании? Почему конфиденциальность так важна для нас?</p>
            <p className="text-xl md:text-2xl text-foreground/90 mt-6">
              В конце концов, «почему» привело нас сюда.
            </p>
          </div>
        </div>
        
        <WhySection id="why-1" icon={<Lightbulb className="w-6 h-6 text-primary" />} title="Потому что почему бы не сделать что-то другое?" content={<>
              <p>
                Мы всегда подходили к дизайну продукта именно так. Мы смотрим на наши текущие инструменты и спрашиваем себя, почему это делается именно таким образом. Почему у инструментов закладок есть социальные функции? Почему мы используем папки? Выпадающие меню? Эти устаревшие UI-паттерны все еще полезны или они просто мусор? Что если мы сделаем это лучше? Или просто по-другому?
              </p>
              <p>С Второй Мозг мы в конечном итоге спросили себя: почему бы и нет? Почему бы не найти другой способ сохранять то, что нам дорого? Почему бы не убрать все остальное, что просто мешает? Забудьте о том, как это обычно делается. Почему бы не сделать это лучше?</p>
              <div className="mt-6">
                <Button variant="outline" className="gap-2" asChild>
                  <Link to="/how">
                    ПОДРОБНЕЕ О ТОМ, КАК МЫ ДУМАЕМ
                    <ExternalLink size={16} />
                  </Link>
                </Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium">Начало — Как мы пришли к созданию Второго Мозга?</p>
                <p className="mt-2 font-medium">Письмо — Как мы можем создать расширение вашего разума?</p>
              </div>
            </>} />
        
        <WhySection id="why-2" icon={<Heart className="w-6 h-6 text-primary" />} title="Потому что нам нужны лучшие отношения с технологиями." content={<>
              <p>
                Было время, когда наши инструменты были просто инструментами. Мы брали молоток, чтобы что-то построить, а затем клали его обратно на полку, когда заканчивали работу. Это был инструмент, созданный для одной простой цели. У него не было скрытых мотивов.
              </p>
              <p>
                Перенесемся в сегодняшний день, и наши инструменты эволюционировали. Они стали умнее. У них есть алгоритмы, ленты, уведомления. Они разработаны так, чтобы мы проводили с ними как можно больше времени. Мы должны их кормить, управлять ими, чистить их, взаимодействовать с ними. Наши инструменты больше не служат нашей цели. Мы служим их цели.
              </p>
              <p>
                Разве мы не могли бы использовать магию технологий, чтобы создать что-то лучшее? Что-то, что действительно приносит нам пользу, а не отнимает у нас. Что-то, спроектированное таким образом, чтобы способствовать особым отношениям с нашими инструментами снова. Что-то, что служит простой, необходимой цели.
              </p>
              <p>
                Мы решили, что можем.
              </p>
              <div className="mt-6">
                <Button variant="outline" className="gap-2" asChild>
                  <Link to="/how">
                    КАК МЫ ПРИНИМАЕМ РЕШЕНИЯ
                    <ExternalLink size={16} />
                  </Link>
                </Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium">Наше обещание от нас к вам</p>
                <p className="mt-2 font-medium">Мысль от Второго Мозга о социальных функциях</p>
                <p className="mt-2 font-medium">Инструмент, который работает с вашим мозгом, а не против него</p>
              </div>
            </>} />
        
        <WhySection id="why-3" icon={<RefreshCw className="w-6 h-6 text-primary" />} title="Потому что новые начинания прекрасны." content={<>
              <p>
                Есть причина, по которой у нас нет функции импорта. Нам нравится идея начинать с нуля. Не только потому, что человечество вращается вокруг свежих стартов, но это также требует от вас переоценки ваших отношений с данными. Это вдохновляет вас быть более сознательным, более скрупулезным, более внимательным к тому, что вы сохраняете и собираете.
              </p>
              <p>
                Цифровой беспорядок и информационная усталость влияют на наш реальный разум, осознаем мы это или нет. Мы хотим, чтобы ваш новый разум стал передышкой от этого. Это чистый лист, где вы можете намеренно выбирать, что сохранять и потреблять. Ментальный вздох облегчения.
              </p>
            </>} />
        
        <WhySection id="why-4" icon={<Zap className="w-6 h-6 text-primary" />} title="Потому что инструмент — это просто средство для достижения цели, а не сама цель." content={<>
              <p>Мы создали Второй Мозг для деятелей и творцов. Для людей, которые заняты другими делами и просто нуждаются в месте для сбора и запоминания того, что им дорого.</p>
              <p>Второй Мозг не вмешивается, не беспокоит и не просит обслуживания. Он предназначен служить вам, как расширение вашего разума. Чтобы вы могли думать о чем угодно, кроме самого инструмента.</p>
              <p>Потому что это все, что это есть: инструмент, предназначенный помочь вам достичь чего-то еще. Те, кто любят прокрастинировать с папками и неподдерживаемыми системами, найдут множество других приложений, чтобы занять их. Второй Мозг для тех, кто предпочел бы рисовать, писать, строить, танцевать и петь.</p>
            </>} />
        
        <div className="mt-16 text-center">
          <Button size="lg" className="gap-2" asChild>
            <Link to="/">
              Начните Ваше Путешествие
              <Stars size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default WhyPage;