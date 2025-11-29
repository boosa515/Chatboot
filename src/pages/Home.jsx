import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Café Artesanal &<br/>Momentos Únicos</h1>
          <p>Descubra o sabor autêntico dos grãos selecionados. Torra fresca, aroma inigualável e a paixão em cada xícara.</p>
          <div className="hero-buttons">
            <Link to="/menu"><button className="btn-primary">Ver Menu</button></Link>
            <Link to="/history"><button className="btn-outline">Nossa História</button></Link>
          </div>
        </div>
        <div className="hero-image">
           <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Café" />
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Nossos Clássicos</h2>
        <div className="features-grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80" alt="Espresso" className="card-image" />
            <h3>Espresso Intenso</h3>
          </div>
          <div className="card">
            <img src="https://www.supremoarabica.com.br/wp-content/uploads/2019/04/Caf%C3%A9-em-gr%C3%A3os-ou-mo%C3%ADdo_-definindo-prefer%C3%AAncias.jpg" alt="Grãos" className="card-image" />
            <h3>Grãos Orgânicos</h3>
          </div>
          <div className="card">
            <img src="https://minhasreceitinhas.com.br/wp-content/uploads/2024/04/bolo-de-chocolate-com-morango-2.jpg" alt="Bolo" className="card-image" />
            <h3>Confeitaria Fina</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;