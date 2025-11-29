const Menu = () => {
  const products = [
    { category: "Cafés Quentes", items: [{ name: "Espresso", price: "R$ 6,00" }, { name: "Cappuccino", price: "R$ 12,00" }, { name: "Latte", price: "R$ 14,00" }] },
    { category: "Gelados", items: [{ name: "Iced Coffee", price: "R$ 14,00" }, { name: "Cold Brew", price: "R$ 12,00" }] },
    { category: "Comidas", items: [{ name: "Croissant", price: "R$ 10,00" }, { name: "Bolo de Cenoura", price: "R$ 8,00" }] }
  ];

  return (
    <section className="page-container">
      <h1 className="page-title">Nosso Menu</h1>
      <div className="menu-grid">
        {products.map((cat, index) => (
          <div key={index} className="menu-card">
            <h3 className="menu-category-title">{cat.category}</h3>
            <ul className="menu-list">
              {cat.items.map((item, i) => (
                <li key={i} className="menu-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-line"></span>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;