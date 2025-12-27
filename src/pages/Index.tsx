import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const teamMembers = [
  {
    name: "Александр Волков",
    role: "Senior Full-Stack Developer",
    experience: "8 лет",
    skills: ["React", "Node.js", "Python", "PostgreSQL"],
    avatar: "👨‍💻"
  },
  {
    name: "Мария Соколова",
    role: "UI/UX Designer",
    experience: "6 лет",
    skills: ["Figma", "Adobe XD", "Design Systems", "Prototyping"],
    avatar: "👩‍🎨"
  },
  {
    name: "Дмитрий Петров",
    role: "Mobile Developer",
    experience: "7 лет",
    skills: ["React Native", "iOS", "Android", "Flutter"],
    avatar: "📱"
  },
  {
    name: "Елена Морозова",
    role: "Project Manager",
    experience: "5 лет",
    skills: ["Agile", "Scrum", "Team Management", "Client Relations"],
    avatar: "👩‍💼"
  }
];

const services = [
  {
    icon: "Globe",
    title: "Разработка сайтов",
    description: "Создаём современные веб-сайты с адаптивным дизайном и высокой производительностью"
  },
  {
    icon: "Smartphone",
    title: "Мобильные приложения",
    description: "Разрабатываем нативные и кросс-платформенные приложения для iOS и Android"
  },
  {
    icon: "Code2",
    title: "Собственные редакторы",
    description: "Создаём кастомные инструменты и платформы для вашего бизнеса"
  }
];

const portfolio = [
  {
    title: "E-commerce платформа",
    category: "Веб-приложение",
    description: "Онлайн-магазин с системой заказов и личным кабинетом",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Мобильное приложение для фитнеса",
    category: "Mobile App",
    description: "Трекер тренировок с персональными программами",
    tech: ["React Native", "Firebase"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "CRM система",
    category: "Веб-приложение",
    description: "Система управления взаимоотношениями с клиентами",
    tech: ["Vue.js", "Python", "PostgreSQL"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Образовательная платформа",
    category: "Веб-сервис",
    description: "Онлайн-платформа для дистанционного обучения",
    tech: ["React", "WebRTC", "AWS"],
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl">📚</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              КодЛаб
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection("team")} className="hover:text-primary transition-colors">
              Команда
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
            Связаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-6 text-6xl">🚀</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Издательство КодЛаб
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Создаём сайты, приложения и собственные редакторы на заказ
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => scrollToSection("services")} size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Наши услуги
            </Button>
            <Button onClick={() => scrollToSection("portfolio")} size="lg" variant="outline" className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="Eye" className="mr-2" size={20} />
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный цикл разработки digital-продуктов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Портфолио
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Проекты, которыми мы гордимся
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="ExternalLink" size={48} className="text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наша команда
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Профессионалы своего дела
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">Опыт: {member.experience}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Расскажите о вашем проекте
          </p>
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">info@kodlab.ru</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Телефон</div>
              <div className="font-medium">+7 (999) 123-45-67</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Адрес</div>
              <div className="font-medium">Москва, Россия</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 КодЛаб. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
