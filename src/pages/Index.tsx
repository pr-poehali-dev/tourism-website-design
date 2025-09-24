import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Tour {
  id: number;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  description: string;
  highlights: string[];
  category: string;
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tours: Tour[] = [
    {
      id: 1,
      title: 'Альпийские вершины',
      location: 'Швейцария',
      price: 89999,
      duration: '7 дней',
      image: 'img/5322916b-dca0-4fa9-b471-469ff6404050.jpg',
      rating: 4.8,
      description: 'Незабываемое путешествие по альпийским вершинам с потрясающими видами и активным отдыхом',
      highlights: ['Подъём на Маттерхорн', 'Катание на лыжах', 'Горячий шоколад'],
      category: 'adventure'
    },
    {
      id: 2,
      title: 'Тропический рай',
      location: 'Мальдивы',
      price: 159999,
      duration: '10 дней',
      image: 'img/b238e376-a745-4dac-8d52-6436b1cbe5d8.jpg',
      rating: 4.9,
      description: 'Роскошный отдых на белоснежных пляжах с кристально чистой водой',
      highlights: ['Водные виллы', 'Дайвинг', 'Спа-процедуры'],
      category: 'beach'
    },
    {
      id: 3,
      title: 'Европейская классика',
      location: 'Италия',
      price: 75999,
      duration: '12 дней',
      image: 'img/0bbb582d-3944-4deb-8aaf-99c5c12e43eb.jpg',
      rating: 4.7,
      description: 'Путешествие по историческим городам с богатой культурой и архитектурой',
      highlights: ['Колизей', 'Венецианские каналы', 'Тосканские виноградники'],
      category: 'culture'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все туры', icon: 'Globe' },
    { id: 'adventure', name: 'Приключения', icon: 'Mountain' },
    { id: 'beach', name: 'Пляжный отдых', icon: 'Sun' },
    { id: 'culture', name: 'Культурные туры', icon: 'Camera' }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Навигация */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" className="text-blue-600" size={28} />
              <span className="font-heading font-bold text-xl text-gray-900">ТурМир</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-body transition-colors">Главная</a>
              <a href="#tours" className="text-gray-700 hover:text-blue-600 font-body transition-colors">Туры</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-body transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-body transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Героический блок */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.7), rgba(37, 99, 235, 0.5)), url('img/5322916b-dca0-4fa9-b471-469ff6404050.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Откройте мир вместе с нами
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 opacity-95">
            Незабываемые путешествия по самым красивым уголкам планеты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-medium">
              <Icon name="Search" size={18} className="mr-2" />
              Найти тур
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Play" size={18} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Поиск и фильтры */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="tours">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">Популярные направления</h2>
          <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Выберите идеальное путешествие из нашей коллекции проверенных туров
          </p>
        </div>

        <div className="mb-8 space-y-6">
          {/* Поиск */}
          <div className="relative max-w-md mx-auto">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Поиск туров..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
            />
          </div>

          {/* Категории */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2 px-4 py-2"
              >
                <Icon name={category.icon as any} size={16} />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Каталог туров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-900 font-medium">
                    {tour.duration}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" className="text-yellow-500 fill-current" size={14} />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
                    {tour.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span className="font-body">{tour.location}</span>
                  </div>
                </div>
                
                <p className="font-body text-gray-600 mb-4 line-clamp-2">
                  {tour.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-body text-gray-500 mb-2">Включает:</p>
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {tour.highlights.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{tour.highlights.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-heading font-bold text-gray-900">
                      {tour.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-sm font-body text-gray-500 ml-1">за человека</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-heading font-medium text-gray-900 mb-2">Туры не найдены</h3>
            <p className="font-body text-gray-600">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </section>

      {/* Контакты */}
      <section className="bg-gray-50 py-16" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Готовы к приключениям?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full p-4 mb-4">
                <Icon name="Phone" size={24} />
              </div>
              <h3 className="font-heading font-semibold mb-2">Телефон</h3>
              <p className="font-body text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-full p-4 mb-4">
                <Icon name="Mail" size={24} />
              </div>
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <p className="font-body text-gray-600">info@turmir.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white rounded-full p-4 mb-4">
                <Icon name="MessageCircle" size={24} />
              </div>
              <h3 className="font-heading font-semibold mb-2">WhatsApp</h3>
              <p className="font-body text-gray-600">+7 (999) 123-45-67</p>
            </div>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Calendar" size={18} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="MapPin" className="text-blue-400" size={24} />
              <span className="font-heading font-bold text-xl">ТурМир</span>
            </div>
            <p className="font-body text-gray-400">© 2024 ТурМир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;