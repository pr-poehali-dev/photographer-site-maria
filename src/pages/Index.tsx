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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Мария Морозова
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

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/924f3d0c-2086-48cf-8be8-294b5e77150c/files/67afe829-3ae0-4a1d-806f-d3e883ffb855.jpg"
            alt="Мария Морозова - фотограф"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <Badge className="mb-6 text-sm md:text-base px-6 py-2 bg-gradient-to-r from-primary to-accent text-white border-0 glow-effect">
            <Icon name="Award" className="mr-2" size={16} />
            Топ-5 фотографов Москвы 2024
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 leading-tight">
            Фотографии, которые
            <br />
            <span className="text-gradient">продают эмоции</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8 font-medium">
            Превращаю ваши моменты в визуальные истории, которые хочется пересматривать снова и снова
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-10">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Счастливых клиентов</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1">1200+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Проведено съемок</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1">98%</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Повторных заказов</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all glow-effect text-white border-0 font-semibold"
              onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Icon name="Sparkles" className="mr-2" size={22} />
              Забронировать съемку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 font-semibold"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <Icon name="MessageCircle" className="mr-2" size={22} />
              Консультация в WhatsApp
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Icon name="ShieldCheck" size={18} className="text-primary" />
            <span>Первые 10 снимков в подарок при бронировании сегодня</span>
          </p>
        </div>
      </section>

      <section id="services" className="py-20 scroll-mt-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 border-primary/30">
              <Icon name="Briefcase" className="mr-2" size={14} />
              Что я предлагаю
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Услуги премиум-класса
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждая фотосессия — это уникальный опыт, созданный специально для вас
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="MapPin" className="text-primary" size={36} />
                </div>
                <CardTitle className="text-3xl md:text-4xl">Выездные фотосессии</CardTitle>
                <CardDescription className="text-lg text-foreground/70">
                  На природе, в городе, на мероприятиях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <p className="text-muted-foreground leading-relaxed">
                    Создам атмосферные кадры в любой локации. Романтические прогулки, семейные пикники, свадьбы, мероприятия.
                  </p>
                  <div className="flex items-baseline gap-2 py-3">
                    <span className="text-4xl md:text-5xl font-black text-gradient">от 3 000₽</span>
                    <span className="text-muted-foreground font-medium">/ час</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium">Помощь в выборе локации</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium">30-50 обработанных фото</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium">Готовность за 5-7 дней</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:shadow-xl text-white border-0 py-6 text-base font-semibold" onClick={() => window.open(whatsappLink, "_blank")}>
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Забронировать сейчас
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent/10 hover:border-accent/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all"></div>
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="Home" className="text-accent" size={36} />
                </div>
                <CardTitle className="text-3xl md:text-4xl">Студийные фотосессии</CardTitle>
                <CardDescription className="text-lg text-foreground/70">
                  В профессиональной фотостудии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <p className="text-muted-foreground leading-relaxed">
                    Работа в комфортной обстановке с профессиональным светом. Портреты, семейные съемки, бизнес-портреты.
                  </p>
                  <div className="flex items-baseline gap-2 py-3">
                    <span className="text-4xl md:text-5xl font-black text-gradient">от 4 000₽</span>
                    <span className="text-muted-foreground font-medium">/ час</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-accent" size={16} />
                      </div>
                      <span className="text-sm font-medium">Профессиональное оборудование</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-accent" size={16} />
                      </div>
                      <span className="text-sm font-medium">40-60 обработанных фото</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-accent" size={16} />
                      </div>
                      <span className="text-sm font-medium">Различные фоны и декор</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-accent to-accent/80 hover:shadow-xl text-white border-0 py-6 text-base font-semibold" onClick={() => window.open(whatsappLink, "_blank")}>
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Забронировать сейчас
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">
              Примеры моих работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
              <img
                src="https://cdn.poehali.dev/projects/924f3d0c-2086-48cf-8be8-294b5e77150c/files/6c2f1418-513e-4189-bd67-e057ec45f140.jpg"
                alt="Студийная фотосессия"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Студийная съемка</h3>
                  <p className="text-sm">Профессиональное освещение и атмосфера</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
              <img
                src="https://cdn.poehali.dev/projects/924f3d0c-2086-48cf-8be8-294b5e77150c/files/a85d8ebd-61fd-4bfa-93e1-e8dfe1ccd562.jpg"
                alt="Выездная фотосессия"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Выездная съемка</h3>
                  <p className="text-sm">Естественный свет и живые эмоции</p>
                </div>
              </div>
            </div>
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
                    <div className="text-5xl font-bold text-primary mb-2">5 888₽</div>
                    <p className="text-muted-foreground">за 1 час</p>
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
                      window.open(`https://yoomoney.ru/to/4100118595968686/5888`, "_blank");
                      toast({
                        title: "Переход к оплате",
                        description: "Вы будете перенаправлены на безопасную страницу оплаты",
                      });
                    }}
                  >
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Оплатить онлайн
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
                    <div className="text-5xl font-bold text-primary mb-2">9 999₽</div>
                    <p className="text-muted-foreground">за 2 часа</p>
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
                      window.open(`https://yoomoney.ru/to/4100118595968686/9999`, "_blank");
                      toast({
                        title: "Переход к оплате",
                        description: "Вы будете перенаправлены на безопасную страницу оплаты",
                      });
                    }}
                  >
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Оплатить онлайн
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
                      window.open(`https://yoomoney.ru/to/4100118595968686/14999`, "_blank");
                      toast({
                        title: "Переход к оплате",
                        description: "Вы будете перенаправлены на безопасную страницу оплаты",
                      });
                    }}
                  >
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Оплатить онлайн
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
                      Оплата производится через защищенный сервис ЮMoney. Средства поступают напрямую на карту Сбербанка. 
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