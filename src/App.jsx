import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUp,
  Coffee,
  Croissant,
  MapPin,
  Menu,
  Phone,
  Quote,
  Star,
  Users,
  X,
} from 'lucide-react';
import { menuItems, popularItems } from './data/menu.js';
import BookingForm from './components/BookingForm.jsx';
import MenuSection from './components/MenuSection.jsx';

const advantages = [
  {
    title: 'Свежая обжарка',
    text: 'Готовим кофе из свежих зёрен своей обжарки.',
    icon: Coffee,
  },
  {
    title: 'Своя выпечка',
    text: 'Готовим круассаны, тарталетки и чизкейки каждое утро.',
    icon: Croissant,
  },
  {
    title: 'Уютные встречи',
    text: 'Быстрый Wi-Fi и светлый интерьер для завтраков и работы.',
    icon: Users,
  },
];

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=900&q=85',
    alt: 'Барная стойка кофейни',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85',
    alt: 'Уютный зал кофейни со столиками',
  },
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=85',
    alt: 'Кофейня',
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85',
    alt: 'Кофе и десерты на столе',
  },
];

const reviews = [
  {
    name: 'Алина Морозова',
    text: 'Очень атмосферное место. Бронировали столик на завтрак, все подготовили заранее, кофе был отличный.',
    rating: 5,
  },
  {
    name: 'Дмитрий Ковалев',
    text: 'Нравится, что здесь не шумно и можно спокойно поработать. Отдельный плюс за сырники, они здесь очень хороши.',
    rating: 5,
  },
  {
    name: 'Мария Лебедева',
    text: 'Красивый интерьер и приятный персонал.',
    rating: 5,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cup and Corner">
          Cup & Corner
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`} aria-label="Основная навигация">
          <a href="#about" onClick={closeMenu}>О нас</a>
          <a href="#menu" onClick={closeMenu}>Меню</a>
          <a href="#booking" onClick={closeMenu}>Бронь</a>
          <a href="#contacts" onClick={closeMenu}>Контакты</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">Specialty coffee house</p>
            <h1>Cup & Corner</h1>
            <p className="hero__lead">
              Кофейня на каждый день: авторский кофе и свежие завтраки для уютных встреч.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#menu">
                Посмотреть меню <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button--ghost" href="#booking">
                Забронировать столик
              </a>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section__intro">
            <p className="eyebrow">О кофейне</p>
            <h2>Место, где кофе становится поводом задержаться</h2>
            <p>
              Cup & Corner объединяет кофейный бар, небольшую пекарню и спокойный городской
              интерьер. Мы варим классику, готовим сезонные напитки и помогаем найти столик для
              любого повода.
            </p>
          </div>
          <div className="advantage-grid">
            {advantages.map(({ icon: Icon, title, text }) => (
              <article className="advantage-card" key={title}>
                <span className="icon-pill">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <MenuSection items={menuItems} />

        <section className="section popular" id="popular">
          <div className="section__intro">
            <p className="eyebrow">Выбор гостей</p>
            <h2>Популярные позиции</h2>
          </div>
          <div className="popular-grid">
            {popularItems.map((item) => (
              <article className="popular-card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div>
                  <span>{item.badge}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section promo" aria-label="Акция">
          <div>
            <p className="eyebrow">Акция недели</p>
            <h2>Завтрак + кофе до 12:00</h2>
            <p>
              Закажите любой завтрак из меню и получите капучино или американо за полцены.
            </p>
          </div>
          <a className="button button--primary" href="#booking">
            Забронировать столик
          </a>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section__intro">
            <p className="eyebrow">Интерьер</p>
            <h2>Тёплый свет, мягкие кресла и аромат кофе</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="section__intro">
            <p className="eyebrow">Отзывы</p>
            <h2>Что говорят гости</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <Quote size={24} aria-hidden="true" />
                <p>{review.text}</p>
                <div className="review-card__footer">
                  <strong>{review.name}</strong>
                  <span aria-label={`${review.rating} из 5`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section booking-section" id="booking">
          <div className="booking-copy">
            <p className="eyebrow">Бронирование</p>
            <h2>Подготовим столик к вашему приходу</h2>
            <p>
              Оставьте заявку, и администратор свяжется с вами для подтверждения деталей.
            </p>
          </div>
          <BookingForm />
        </section>

        <section className="section contacts" id="contacts">
          <div className="section__intro">
            <p className="eyebrow">Контакты</p>
            <h2>Ждем вас в Cup & Corner</h2>
          </div>
          <div className="contacts-grid">
            <div className="contact-list">
              <p>
                <MapPin size={20} aria-hidden="true" />
                ул. Теплая, 12, Москва
              </p>
              <p>
                <Coffee size={20} aria-hidden="true" />
                Пн-Пт 08:00-22:00, Сб-Вс 09:00-23:00
              </p>
              <p>
                <Phone size={20} aria-hidden="true" />
                +7 (900) 123-45-67
              </p>
            </div>
            <div className="map-placeholder" role="img" aria-label="Карта с адресом кофейни">
              <MapPin size={34} aria-hidden="true" />
              <strong>Карта</strong>
              <span>ул. Теплая, 12</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <strong>Cup & Corner</strong>
        <span>Кофе, завтраки и уютные встречи</span>
      </footer>

      <a className="scroll-top" href="#top" aria-label="Наверх">
        <ArrowUp size={22} aria-hidden="true" />
      </a>
    </>
  );
}

export default App;
