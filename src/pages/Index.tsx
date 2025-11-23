import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

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

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/924f3d0c-2086-48cf-8be8-294b5e77150c/files/67afe829-3ae0-4a1d-806f-d3e883ffb855.jpg"
            alt="Мария Морозова - фотограф"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-sm md:text-base px-4 py-2">
            Профессиональная фотография
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
            Ловлю мгновения,
            <br />
            <span className="text-primary">создаю шедевры</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Превращаю ваши истории в яркие воспоминания. Студийные и выездные фотосессии с любовью к деталям.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Icon name="Camera" className="mr-2" size={20} />
              Мои услуги
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-muted-foreground text-lg">
              Индивидуальный подход к каждой съемке
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Выездные фотосессии</CardTitle>
                <CardDescription className="text-lg">
                  На природе, в городе, на мероприятиях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Создам атмосферные кадры в любой локации. Романтические прогулки, семейные пикники, свадьбы, мероприятия.
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-primary">от 3 000₽</span>
                    <span className="text-muted-foreground">/ час</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span className="text-sm">Помощь в выборе локации</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span className="text-sm">30-50 обработанных фото</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span className="text-sm">Готовность за 5-7 дней</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4" onClick={() => window.open(whatsappLink, "_blank")}>
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Уточнить детали
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Студийные фотосессии</CardTitle>
                <CardDescription className="text-lg">
                  В профессиональной фотостудии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Работа в комфортной обстановке с профессиональным светом. Портреты, семейные съемки, бизнес-портреты.
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-primary">от 4 000₽</span>
                    <span className="text-muted-foreground">/ час</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span className="text-sm">Профессиональное оборудование</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span className="text-sm">40-60 обработанных фото</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span className="text-sm">Различные фоны и декор</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4" onClick={() => window.open(whatsappLink, "_blank")}>
                    <Icon name="MessageCircle" className="mr-2" size={18} />
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