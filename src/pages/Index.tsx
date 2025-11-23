import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { toast } = useToast();
  const [contestName, setContestName] = useState("");
  const [contestEmail, setContestEmail] = useState("");
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const phoneNumber = "79808654280";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handleContestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contestName && contestEmail) {
      toast({
        title: "Заявка отправлена! 🎉",
        description: "Мы свяжемся с вами в ближайшее время для участия в конкурсе.",
      });
      setContestName("");
      setContestEmail("");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formMessage) {
      window.open(`${whatsappLink}?text=${encodeURIComponent(`Привет! Меня зовут ${formName}. ${formMessage}`)}`, "_blank");
      setFormName("");
      setFormMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <nav className="sticky top-0 z-50 glass-effect border-b-0">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-gradient">Мария Морозова</span>
            </h1>
            <div className="flex gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Услуги
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
              >
                Пакеты
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                Портфолио
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById("trends")?.scrollIntoView({ behavior: "smooth" })}
              >
                Тренды
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              >
                FAQ
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById("contest")?.scrollIntoView({ behavior: "smooth" })}
              >
                Конкурс
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
              >
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-muted/30 via-background to-primary/5">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <Badge className="mb-6 text-sm px-5 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 animate-pulse">
                <Icon name="Flame" className="mr-2" size={14} />
                Только сегодня -50%
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]">
                Влюбите в себя
                <br />
                <span className="text-gradient">за 1 час съёмки</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/90 max-w-xl mb-6 leading-relaxed font-medium">
                Получите 50 идеальных кадров, которые наберут тысячи лайков в Instagram
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-5 mb-8 border-2 border-primary/20">
                <div className="flex items-start gap-3">
                  <Icon name="Gift" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold text-lg mb-1">🔥 Акция заканчивается через:</div>
                    <div className="text-3xl font-black text-gradient mb-2">23:59 сегодня</div>
                    <div className="text-sm text-muted-foreground">
                      ✓ Бесплатная ретушь 10 фото (экономия 1000₽)
                      <br />
                      ✓ Помощь со стилем и локацией
                      <br />
                      ✓ Гарантия результата или вернем деньги
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="text-base px-8 py-7 bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all shadow-xl hover:shadow-2xl rounded-2xl text-white font-bold glow-effect"
                  onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Icon name="Zap" className="mr-2" size={20} />
                  Забрать скидку 50%
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-7 border-2 hover:bg-muted/50 rounded-2xl"
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Icon name="Image" className="mr-2" size={20} />
                  Примеры работ
                </Button>
              </div>

              <div className="mt-6">
                <Card className="border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                          <Icon name="GraduationCap" className="text-green-500" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Обучиться за 7 дней</h3>
                          <p className="text-sm text-muted-foreground">Полный курс фотографии для новичков</p>
                        </div>
                      </div>
                      <Button
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold"
                        onClick={async () => {
                          const paymentWindow = window.open(`https://pay.cloudtips.ru/p/5e712fc5?amount=2990`, "_blank");
                          
                          toast({
                            title: "Переход к оплате",
                            description: "После оплаты гайд скачается автоматически",
                          });

                          const checkPayment = setInterval(async () => {
                            if (paymentWindow?.closed) {
                              clearInterval(checkPayment);
                              
                              setTimeout(async () => {
                                const link = document.createElement('a');
                                link.href = '/guide-7day-photo.pdf';
                                link.download = '7-day-photo-guide.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                
                                toast({
                                  title: "Спасибо за покупку! 🎓",
                                  description: "Гайд начал скачиваться",
                                });
                              }, 2000);
                            }
                          }, 1000);
                        }}
                      >
                        <Icon name="Download" className="mr-2" size={18} />
                        2990₽
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={18} className="text-primary" />
                  <span className="font-medium">Сегодня записалось: <strong className="text-accent">8 человек</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <span className="font-medium">Осталось мест: <strong className="text-accent">2</strong></span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in">
              <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden neumorphic">
                <img
                  src="https://cdn.poehali.dev/projects/924f3d0c-2086-48cf-8be8-294b5e77150c/files/67afe829-3ae0-4a1d-806f-d3e883ffb855.jpg"
                  alt="Мария Морозова - фотограф"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                    <Icon name="Award" size={32} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Опыт работы</div>
                    <div className="text-2xl font-bold">5+ лет</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-effect rounded-3xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient">1200+</div>
                  <div className="text-sm text-muted-foreground mt-1">Фотосессий</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 scroll-mt-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-0 text-sm px-5 py-2">
              <Icon name="Camera" className="mr-2" size={14} />
              Услуги
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Что входит в работу
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный цикл от подготовки до финальной обработки
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 neumorphic hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-3xl overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-2">Выездные фотосессии</CardTitle>
                <CardDescription className="text-base">
                  Природа • Город • Мероприятия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Атмосферные кадры в любых локациях: романтика, семейные истории, свадьбы
                  </p>
                  <div className="bg-muted/30 rounded-2xl p-4">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-bold text-primary">3 000₽</span>
                      <span className="text-muted-foreground text-sm">/ час</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>30-50 фото с обработкой</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Помощь с локацией</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Готовность 5-7 дней</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 rounded-xl py-5 text-sm font-medium" 
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 neumorphic hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-3xl overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-2">Студийные фотосессии</CardTitle>
                <CardDescription className="text-base">
                  Студия • Свет • Комфорт
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Профессиональная съемка в студии: портреты, семья, бизнес-образы
                  </p>
                  <div className="bg-muted/30 rounded-2xl p-4">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-bold text-accent">4 000₽</span>
                      <span className="text-muted-foreground text-sm">/ час</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span>40-60 фото с обработкой</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span>Профессиональное оборудование</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span>Разные фоны и декор</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 rounded-xl py-5 text-sm font-medium" 
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-0 text-sm px-5 py-2">
              <Icon name="TrendingUp" className="mr-2" size={14} />
              До и После
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Результаты, которые продают</h2>
            <p className="text-muted-foreground text-lg">
              Обычные снимки VS профессиональная съемка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 neumorphic overflow-hidden rounded-3xl">
              <div className="relative aspect-[3/4]">
                <img
                  src="https://cdn.poehali.dev/projects/924f3d0c-2086-48cf-8be8-294b5e77150c/files/339f5376-229e-46b1-8907-f5c5ebf50537.jpg"
                  alt="До съемки - обычное фото"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ❌ ДО
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground text-center">
                  Обычное фото на телефон без обработки
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 neumorphic overflow-hidden rounded-3xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ ПОСЛЕ
              </div>
              <div className="relative aspect-[3/4]">
                <img
                  src="https://cdn.poehali.dev/projects/924f3d0c-2086-48cf-8be8-294b5e77150c/files/6c2f1418-513e-4189-bd67-e057ec45f140.jpg"
                  alt="После - профессиональная съемка"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  ✓ ПОСЛЕ
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-sm font-medium text-center">
                  Профессиональная съемка + ретушь + стиль
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-4">
                  <Icon name="Sparkles" className="text-primary" size={48} />
                  <h3 className="text-2xl font-bold">Хотите такой же результат?</h3>
                  <p className="text-muted-foreground">
                    Запишитесь сегодня со скидкой 50% и получите бонусом стилиста
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent text-white px-10 py-6 rounded-2xl text-lg font-bold hover:scale-105 transition-all glow-effect"
                    onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Icon name="Zap" className="mr-2" size={22} />
                    Записаться со скидкой
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Пакеты услуг</h2>
            <p className="text-muted-foreground text-lg">
              Выберите оптимальный пакет и оплатите онлайн
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sparkles" className="text-primary" size={40} />
                </div>
                <CardTitle className="text-3xl mb-2">Пакет №1</CardTitle>
                <CardDescription className="text-base">
                  Идеально для портретов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl text-muted-foreground line-through mb-1">11 776₽</div>
                    <div className="text-5xl font-bold text-primary mb-2">5 888₽</div>
                    <p className="text-muted-foreground">за 1 час • скидка 50%</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">1 час фотосессии</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Home" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Аренда студии включена</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Camera" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Профессиональная съемка</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Wand2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Ретушь 5 снимков на выбор</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full text-lg py-6" 
                    size="lg"
                    onClick={() => {
                      const paymentWindow = window.open(`https://pay.cloudtips.ru/p/5e712fc5?amount=500`, "_blank");
                      toast({
                        title: "Бронирование даты",
                        description: "Оплата брони 500₽ через СБП",
                      });

                      const checkPayment = setInterval(() => {
                        if (paymentWindow?.closed) {
                          clearInterval(checkPayment);
                          toast({
                            title: "Дата забронирована! 🎉",
                            description: "Сейчас откроем WhatsApp для связи",
                          });
                          setTimeout(() => {
                            window.open(`https://wa.me/${phoneNumber}?text=Здравствуйте! Я забронировал(а) Пакет №1 (5888₽). Оплатил бронь 500₽. Хочу согласовать дату съемки.`, "_blank");
                          }, 1000);
                        }
                      }, 1000);
                    }}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary bg-gradient-to-b from-primary/5 to-background">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-6 py-2 text-sm">
                  Популярный выбор
                </Badge>
              </div>
              <CardHeader className="text-center pb-8 pt-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Star" className="text-white" size={40} />
                </div>
                <CardTitle className="text-3xl mb-2">Пакет №2</CardTitle>
                <CardDescription className="text-base">
                  Оптимальный вариант
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl text-muted-foreground line-through mb-1">19 998₽</div>
                    <div className="text-5xl font-bold text-primary mb-2">9 999₽</div>
                    <p className="text-muted-foreground">за 2 часа • скидка 50%</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">2 часа фотосессии</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Home" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Аренда студии включена</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Camera" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Профессиональная съемка</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Wand2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm font-semibold">Ретушь 15 снимков на выбор</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Palette" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Смена образов и локаций</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full text-lg py-6" 
                    size="lg"
                    onClick={() => {
                      const paymentWindow = window.open(`https://pay.cloudtips.ru/p/5e712fc5?amount=500`, "_blank");
                      toast({
                        title: "Бронирование даты",
                        description: "Оплата брони 500₽ через СБП",
                      });

                      const checkPayment = setInterval(() => {
                        if (paymentWindow?.closed) {
                          clearInterval(checkPayment);
                          toast({
                            title: "Дата забронирована! 🎉",
                            description: "Сейчас откроем WhatsApp для связи",
                          });
                          setTimeout(() => {
                            window.open(`https://wa.me/${phoneNumber}?text=Здравствуйте! Я забронировал(а) Пакет №2 (9999₽). Оплатил бронь 500₽. Хочу согласовать дату съемки.`, "_blank");
                          }, 1000);
                        }
                      }, 1000);
                    }}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Crown" className="text-accent" size={40} />
                </div>
                <CardTitle className="text-3xl mb-2">Пакет №3</CardTitle>
                <CardDescription className="text-base">
                  Максимальный результат
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">14 999₽</div>
                    <p className="text-muted-foreground">за 3.5 часа</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">3.5 часа фотосессии</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Home" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Аренда студии включена</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Camera" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Профессиональная съемка</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Wand2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm font-semibold">Ретушь 30 снимков на выбор</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Palette" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Несколько образов и локаций</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Gift" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Все исходники в подарок</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full text-lg py-6" 
                    size="lg"
                    onClick={() => {
                      const paymentWindow = window.open(`https://pay.cloudtips.ru/p/5e712fc5?amount=500`, "_blank");
                      toast({
                        title: "Бронирование даты",
                        description: "Оплата брони 500₽ через СБП",
                      });

                      const checkPayment = setInterval(() => {
                        if (paymentWindow?.closed) {
                          clearInterval(checkPayment);
                          toast({
                            title: "Дата забронирована! 🎉",
                            description: "Сейчас откроем WhatsApp для связи",
                          });
                          setTimeout(() => {
                            window.open(`https://wa.me/${phoneNumber}?text=Здравствуйте! Я забронировал(а) Пакет №3 (14999₽). Оплатил бронь 500₽. Хочу согласовать дату съемки.`, "_blank");
                          }, 1000);
                        }
                      }, 1000);
                    }}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свадебная съемка</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Сохраните самые важные моменты вашего дня
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
            <Card className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                💍 СВАДЕБНЫЙ
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" className="text-primary" size={40} />
                </div>
                <CardTitle className="text-3xl mb-2">Ничего лишнего</CardTitle>
                <CardDescription className="text-base">
                  Основные моменты торжества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl text-muted-foreground line-through mb-1">70 000₽</div>
                    <div className="text-5xl font-bold text-primary mb-2">35 000₽</div>
                    <p className="text-muted-foreground">полный пакет • скидка 50%</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Съемка в ЗАГСе</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Camera" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Прогулочная фотосессия</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Gift" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm font-semibold">🎁 Обработка снимков на выбор в подарок</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full text-lg py-6" 
                    size="lg"
                    onClick={() => {
                      const paymentWindow = window.open(`https://pay.cloudtips.ru/p/5e712fc5?amount=500`, "_blank");
                      toast({
                        title: "Бронирование даты свадьбы",
                        description: "Оплата брони 500₽ через СБП",
                      });

                      const checkPayment = setInterval(() => {
                        if (paymentWindow?.closed) {
                          clearInterval(checkPayment);
                          toast({
                            title: "Дата свадьбы забронирована! 💍",
                            description: "Сейчас откроем WhatsApp для связи",
                          });
                          setTimeout(() => {
                            window.open(`https://wa.me/${phoneNumber}?text=Здравствуйте! Я забронировал(а) свадебный пакет "Ничего лишнего" (35000₽). Оплатил бронь 500₽. Хочу согласовать дату свадьбы.`, "_blank");
                          }, 1000);
                        }
                      }, 1000);
                    }}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent/50 bg-gradient-to-br from-accent/5 to-primary/5">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                ⭐ ПОПУЛЯРНЫЙ
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Crown" className="text-accent" size={40} />
                </div>
                <CardTitle className="text-3xl mb-2">Полный фарш</CardTitle>
                <CardDescription className="text-base">
                  Весь день с вами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl text-muted-foreground line-through mb-1">110 000₽</div>
                    <div className="text-5xl font-bold text-accent mb-2">55 000₽</div>
                    <p className="text-muted-foreground">максимальный пакет • скидка 50%</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Home" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Съемка сборов жениха и невесты</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Съемка в ЗАГСе</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Camera" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Прогулочная фотосессия</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="PartyPopper" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm">Съемка банкета</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Image" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm font-semibold">🎁 100 обработанных фото на выбор</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full text-lg py-6 bg-gradient-to-r from-accent to-primary hover:scale-105 transition-all" 
                    size="lg"
                    onClick={() => {
                      const paymentWindow = window.open(`https://pay.cloudtips.ru/p/5e712fc5?amount=500`, "_blank");
                      toast({
                        title: "Бронирование даты свадьбы",
                        description: "Оплата брони 500₽ через СБП",
                      });

                      const checkPayment = setInterval(() => {
                        if (paymentWindow?.closed) {
                          clearInterval(checkPayment);
                          toast({
                            title: "Дата свадьбы забронирована! 💍",
                            description: "Сейчас откроем WhatsApp для связи",
                          });
                          setTimeout(() => {
                            window.open(`https://wa.me/${phoneNumber}?text=Здравствуйте! Я забронировал(а) свадебный пакет "Полный фарш" (55000₽). Оплатил бронь 500₽. Хочу согласовать дату свадьбы.`, "_blank");
                          }, 1000);
                        }
                      }, 1000);
                    }}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="ShieldCheck" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold mb-2">Безопасная оплата</h3>
                    <p className="text-sm text-muted-foreground">
                      Оплата через СБП (Систему Быстрых Платежей). Деньги поступают мгновенно. 
                      После оплаты свяжитесь со мной в WhatsApp для согласования даты и времени съемки.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="trends" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              <Icon name="TrendingUp" className="mr-2" size={16} />
              Актуальные тренды
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тренды фотосессий 2025-2026</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Будьте в курсе самых актуальных направлений в фотографии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-rose-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Flower2" className="text-rose-500" size={28} />
                </div>
                <CardTitle className="text-xl">Нежный минимализм</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Пастельные тона, чистые линии и воздушные образы. Акцент на естественность и простоту с пудровыми оттенками розового, бежевого и айвори.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-orange-500" size={28} />
                </div>
                <CardTitle className="text-xl">Ретро-эстетика 90-х</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Возвращение пленочной фотографии с характерной зернистостью, насыщенные цвета, винтажная одежда и аксессуары. Ностальгия в каждом кадре.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Trees" className="text-emerald-500" size={28} />
                </div>
                <CardTitle className="text-xl">Eco-натуральность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Съемки на природе, натуральный макияж, экологичные материалы. Зеленые оттенки, живые цветы и естественное освещение создают атмосферу гармонии.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-violet-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Moon" className="text-violet-500" size={28} />
                </div>
                <CardTitle className="text-xl">Темная романтика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Глубокие темные тона, драматичное освещение, таинственные образы. Черный, бордовый, темно-синий создают атмосферу магии и загадочности.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Layers" className="text-cyan-500" size={28} />
                </div>
                <CardTitle className="text-xl">Многослойность образов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Игра с текстурами, наслоение тканей, объемные аксессуары. Создание глубины через многослойность одежды и декора для выразительных кадров.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-red-400 to-pink-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Flame" className="text-red-500" size={28} />
                </div>
                <CardTitle className="text-xl">Яркий максимализм</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Насыщенные цвета, смелые сочетания, выразительные позы. Дерзкие образы с яркими акцентами для тех, кто не боится быть в центре внимания.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Обсудить идею для съемки
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              <Icon name="Star" className="mr-2" size={16} />
              Отзывы учеников
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Они уже научились фотографировать за 7 дней</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Реальные истории людей, которые прошли курс
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-bold">
                    А
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Анна Соколова</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Я всегда мечтала научиться фотографировать, но думала, что это сложно. Курс просто супер! За неделю я поняла все основы, теперь снимаю детей и друзей. Задания помогли закрепить каждую тему."
                </p>
                <Badge variant="outline" className="text-xs">
                  <Icon name="Clock" className="mr-1" size={12} />
                  Прошла курс 2 недели назад
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-2xl font-bold">
                    М
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Максим Петров</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Раньше фоткал только на телефон и всё получалось как-то скучно. После курса понял про свет, композицию, начал снимать на камеру. Уже получил первый заказ на съемку! Спасибо за четкую структуру."
                </p>
                <Badge variant="outline" className="text-xs">
                  <Icon name="TrendingUp" className="mr-1" size={12} />
                  Уже работает фотографом
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-2xl font-bold">
                    Е
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Елена Кузнецова</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Курс просто находка! Всё разжевано, примеры понятные. Самое крутое — практические задания. Именно они помогли закрепить материал. Теперь фотографирую для своего блога, лайков стало в 3 раза больше!"
                </p>
                <Badge variant="outline" className="text-xs">
                  <Icon name="Camera" className="mr-1" size={12} />
                  Развивает Instagram-блог
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl font-bold">
                    Д
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Дмитрий Волков</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Думал, что для фотографии нужна дорогая камера. Оказалось — нет! Прошел курс, снимал на телефон, результат меня поразил. Особенно понравился день про свет — это прям магия какая-то!"
                </p>
                <Badge variant="outline" className="text-xs">
                  <Icon name="Smartphone" className="mr-1" size={12} />
                  Снимает на телефон
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-2xl font-bold">
                    О
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ольга Смирнова</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Прошла кучу курсов, но они были либо слишком сложные, либо поверхностные. Этот — идеальный баланс! За 7 дней получила всё, что нужно новичку. И главное — гайд всегда под рукой, перечитываю."
                </p>
                <Badge variant="outline" className="text-xs">
                  <Icon name="Heart" className="mr-1" size={12} />
                  Снимает семейные моменты
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl font-bold">
                    И
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Игорь Новиков</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Не ожидал, что за такую цену получу столько ценной информации. Обычно такие курсы стоят в 10 раз дороже. Задания заставили практиковаться каждый день — именно так и надо учиться!"
                </p>
                <Badge variant="outline" className="text-xs">
                  <Icon name="Zap" className="mr-1" size={12} />
                  Прошел курс за 5 дней
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-white" size={40} />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-bold mb-2">Присоединяйтесь к 847 ученикам</h3>
                    <p className="text-muted-foreground">
                      Которые уже освоили фотографию с нуля за 7 дней
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent text-white font-bold px-8 py-6 text-lg"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <Icon name="GraduationCap" className="mr-2" size={20} />
                    Начать обучение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы о фотосессиях
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="Clock" className="text-primary flex-shrink-0" size={24} />
                    <span>С какого момента начинается отсчет времени фотосессии?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-11">
                  С момента прихода в студию или на локацию. Время начинает отсчитываться с момента вашего прибытия и готовности к съемке.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="Home" className="text-primary flex-shrink-0" size={24} />
                    <span>Аренда студии входит в цену фотосессии?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-11">
                  Нет, аренда студии оплачивается отдельно. Стоимость варьируется в зависимости от выбранной студии и времени аренды. Я помогу подобрать оптимальный вариант.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="Wand2" className="text-primary flex-shrink-0" size={24} />
                    <span>В стоимость фотосессии входит обработка фотографий?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-11">
                  Если приобретать пакет, то обработка входит в стоимость. Если нет, то обработка одного фото стоит 100 рублей (ретушь + цветокоррекция).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Icon name="DollarSign" className="text-primary flex-shrink-0" size={24} />
                    <span>А если мы потратим не час, а полчаса времени, стоимость будет вдвое меньше?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-11">
                  Нет, конечно. Тарификация производится по стоимости полного часа, независимо от фактически потраченного времени. Это связано с подготовкой оборудования и резервированием времени.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-4">
                    <Icon name="HelpCircle" className="text-primary" size={40} />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Не нашли ответ на свой вопрос?</h3>
                      <p className="text-muted-foreground mb-4">
                        Напишите мне в WhatsApp, и я с радостью отвечу на все ваши вопросы!
                      </p>
                      <Button 
                        size="lg"
                        onClick={() => window.open(whatsappLink, "_blank")}
                      >
                        <Icon name="MessageCircle" className="mr-2" size={20} />
                        Задать вопрос в WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contest" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Gift" className="text-white" size={40} />
                </div>
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  🎉 Конкурс: Выиграй фотосессию!
                </CardTitle>
                <CardDescription className="text-lg">
                  Участвуйте в розыгрыше бесплатной студийной фотосессии на 2 часа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <Icon name="Sparkles" className="text-accent" size={24} />
                      Условия участия:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">1.</span>
                        <span>Оставьте заявку через форму ниже</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">2.</span>
                        <span>Подпишитесь на наш Instagram (ссылку пришлём на email)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">3.</span>
                        <span>Поделитесь этим конкурсом в сторис с отметкой</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-4 py-4">
                    <Badge variant="secondary" className="text-base px-4 py-2">
                      <Icon name="Calendar" className="mr-2" size={16} />
                      Итоги: 15 декабря
                    </Badge>
                    <Badge variant="secondary" className="text-base px-4 py-2">
                      <Icon name="Users" className="mr-2" size={16} />
                      3 победителя
                    </Badge>
                  </div>

                  <form onSubmit={handleContestSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={contestName}
                        onChange={(e) => setContestName(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email для связи"
                        value={contestEmail}
                        onChange={(e) => setContestEmail(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Участвовать в конкурсе
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center">
                    Отправляя заявку, вы соглашаетесь с правилами конкурса
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь со мной удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Напишите мне</CardTitle>
                <CardDescription>
                  Заполните форму, и я свяжусь с вами в WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о желаемой фотосессии..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      required
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Отправить в WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес студии</h3>
                      <p className="text-muted-foreground">
                        Москва, проезд Шелихова, 9к1
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground mb-3">
                        +7 (980) 865-42-80
                      </p>
                      <Button
                        variant="outline"
                        className="border-green-200 hover:bg-green-50"
                        onClick={() => window.open(whatsappLink, "_blank")}
                      >
                        <Icon name="MessageCircle" className="mr-2" size={18} />
                        Написать в WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">
                        Ежедневно с 10:00 до 20:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Мария Морозова</h3>
              <p className="text-sm text-muted-foreground">
                Профессиональный фотограф в Москве
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://instagram.com", "_blank")}
              >
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Мария Морозова. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform"
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;