import { Link } from "react-router";
import VolunteersRegistration from "./VolunteersRegistration";
import { useState } from 'react';
import "../styles/Buttons.css";

import ajudar from "../assets/Social biography-pana.png"; 
import ajuda from "../assets/Active elderly people-cuate (1).png"; 




export default function Volunteers() {

  const [showModalAddVolunteer, setShowModalAddVolunteer] = useState(false);

  const openModalAddVolunteer = () => { setShowModalAddVolunteer(true); };
  const closeModalAddVolunteer = () => { setShowModalAddVolunteer(false); };


  return (
  <div className="user">
      <h1>Olá Voluntário!</h1>
      <p>
        Se você deseja se tornar um voluntário ou já é um, você pode se cadastrar e oferecer seus serviços.
      </p>

      <section className="container">
        <div className="conteiner-volunteer">
          <div className="row">
            <div className="col">
              <h2>Torne-se um voluntário</h2>
              <p>
                Se você deseja se tornar um voluntário, você pode se cadastrar e
                oferecer seus serviços.
              </p>
              <button type="button" className="btn btn-secondary" onClick={openModalAddVolunteer}>
                Cadastre-se
              </button>
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
      <section className="container">
        <div className="conteiner-volunteer">
          <div className="row">
          <div className="col">
              <img
                src={ajuda}
                className="col-md-6"
                alt="Imagem de uma pessoa ajudando"
              />
            </div>
            <div className="col">
              <h2>Já é voluntário?</h2>
              <p>
                Se você já é voluntário, você pode conectar-se a pessoas que precisam de ajuda.
              </p>
              <Link to="/support-portal">
                <button type="button" className="btn btn-secondary">
                  Conectar-se
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VolunteersRegistration showModalAddVolunteer={showModalAddVolunteer} closeModal={closeModalAddVolunteer} />
    </div>
  );
}
