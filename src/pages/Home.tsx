import { Link } from "react-router";
import ajudar from "../assets/Volunteering-pana.png";
import ajuda from "../assets/Medical care-rafiki.png";
import "../styles/Home.css";
import "../styles/Buttons.css";

export default function Home() {
  return (
    <div className="home">
      <h1>
        Seja bem-vindo ao <strong>Voluteer</strong> - <strong>D</strong>oing
        <strong>B</strong>etter
      </h1>
      <p>
      Uma Plataforma Web que Conecta Solidariedade entre Gerações
      </p>
      <Link to="/about">
        <button type="button" className="btn btn-secondary">
        Saiba Mais Sobre Nós
        </button>
      </Link>
      <section className="container">
        <div className="conteiner-beneficiary">
        <div className="row">
          <div className="col">
            <img
              src={ajuda}
              className="col-md-6"
              alt="Imagem de uma pessoa sendo ajudada"
            />
          </div>
          <div className="col">
            <div className= "col-info">
              <h2>Precisa de auxílio?</h2>
              <p>
                Se você precisa de ajuda, você pode se cadastrar e solicitar
                ajuda.
              </p>
              <Link to="/beneficiaries">
                <button type="button" className="btn btn-primary">
                  Clique aqui para solicitar ajuda
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="container">
        <div className="conteiner-volunteer">
          <div className="row">
            <div className="col">
              <div className= "col-info">
                <h2>Quer ajudar?</h2>
                <p>
                  Se você é um voluntário, você pode se cadastrar e oferecer seus
                  serviços.
                </p>
                <Link to="/volunteers">
                  <button type="button" className="btn btn-secondary">
                    Clique aqui para ajudar
                  </button>
                </Link>
              </div>
            </div>
            <div className="col">
              <img
                src={ajudar}
                className="col-md-6"
                alt="Imagem de uma pessoa ajudando"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
