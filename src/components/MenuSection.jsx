import React from 'react';

function MenuSection({ items }) {
  return (
    <section className="section menu" id="menu">
      <div className="section__intro">
        <p className="eyebrow">Меню</p>
        <h2>Кофе, десерты и завтраки</h2>
        <p>Короткое меню с понятными позициями, ценами и акцентом на свежие продукты.</p>
      </div>

      <div className="menu-groups">
        {items.map((group) => (
          <article className="menu-group" key={group.category}>
            <h3>{group.category}</h3>
            <div className="menu-items">
              {group.items.map((item) => (
                <div className="menu-card" key={item.name}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
