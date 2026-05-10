import React, { useState } from 'react';
import { CalendarCheck } from 'lucide-react';

const initialForm = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  comment: '',
};

function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    const phonePattern = /^[+0-9\s()-]{10,}$/;

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Введите имя';
    }

    if (!phonePattern.test(form.phone.trim())) {
      nextErrors.phone = 'Введите корректный телефон';
    }

    if (!form.date) {
      nextErrors.date = 'Выберите дату';
    }

    if (!form.time) {
      nextErrors.time = 'Выберите время';
    }

    if (Number(form.guests) < 1 || Number(form.guests) > 12) {
      nextErrors.guests = 'От 1 до 12 гостей';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    setForm(initialForm);
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Имя
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Анна"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>

        <label>
          Телефон
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+7 900 123-45-67"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </label>

        <label>
          Дата
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            aria-invalid={Boolean(errors.date)}
          />
          {errors.date && <span className="field-error">{errors.date}</span>}
        </label>

        <label>
          Время
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            aria-invalid={Boolean(errors.time)}
          />
          {errors.time && <span className="field-error">{errors.time}</span>}
        </label>

        <label>
          Гостей
          <input
            name="guests"
            type="number"
            min="1"
            max="12"
            value={form.guests}
            onChange={handleChange}
            aria-invalid={Boolean(errors.guests)}
          />
          {errors.guests && <span className="field-error">{errors.guests}</span>}
        </label>

        <label className="form-grid__wide">
          Комментарий
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Например: желательно столик у окна"
            rows="4"
          />
        </label>
      </div>

      <button className="button button--primary" type="submit">
        <CalendarCheck size={18} aria-hidden="true" />
        Отправить заявку
      </button>

      {isSubmitted && (
        <p className="success-message" role="status">
          Спасибо! Мы получили вашу заявку на бронирование.
        </p>
      )}
    </form>
  );
}

export default BookingForm;
