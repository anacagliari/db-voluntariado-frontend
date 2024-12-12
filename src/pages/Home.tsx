import { Link } from "react-router";
import ajudar from "../assets/Volunteering-pana.png";
import ajuda from "../assets/Medical care-rafiki.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <hr style={{ border: "1px solid #333", margin: "1px 0" }} />
      <h1>
        Seja bem-vindo ao <strong>Voluteer</strong> - <strong>D</strong>oing
        <strong>B</strong>etter
      </h1>
      <p>
        O Volunteer é uma plataforma que conecta voluntários a pessoas que
        precisam de ajuda.{" "}
      </p>
      <section className="container">
        <div className="row">
          <div className="col">
            <img
              src={ajuda}
              className="col-md-6"
              alt="Imagem de uma pessoa sendo ajudada"
            />
          </div>
          <div className="col">
            <h2>Precisa de auxílio?</h2>
            <p>
              Se você precisa de ajuda, você pode se cadastrar e solicitar
              ajuda.
            </p>
            <button type="button" className="btn btn-outline-dark laranja">
              Clique aqui para solicitar ajuda
            </button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col">
            <h2>Quer ajudar?</h2>
            <p>
              Se você é um voluntário, você pode se cadastrar e oferecer seus
              serviços.{" "}
            </p>
            <Link to="/volunteers">
              <button type="button" className="btn btn-outline-dark azul" >
                Clique aqui para ajudar
              </button>
            </Link>
          </div>
          <div className="col">
            <img
              src={ajudar}
              className="col-md-6"
              alt="Imagem de uma pessoa ajudando"
            />
          </div>
        </div>
      </section>
      <hr style={{ border: "1px solid #333", margin: "1px 0" }} />
    </div>
  );
}
