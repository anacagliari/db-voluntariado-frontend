import { Link } from "react-router";
import VolunteersRegistration from "./VolunteersRegistration";
import { useState } from 'react';

export default function Volunteers() {

  const [showModalAddVolunteer, setShowModalAddVolunteer] = useState(false);

  const openModalAddVolunteer = () => { setShowModalAddVolunteer(true); };
  const closeModalAddVolunteer = () => { setShowModalAddVolunteer(false); };


  return (
    <div>
      <div className="volunteer">
        <hr style={{ border: "1px solid #333", margin: "1px 0" }} />
        <h1>Olá Voluntário!</h1>
        <section className="container">
          <div className="row">
            <div className="col">
              <h2>Torne-se um voluntário</h2>
              <p>
                Se você deseja se tornar um voluntário, você pode se cadastrar e
                oferecer seus serviços.
              </p>
              <button type="button" className="btn btn-outline-dark laranja" onClick={() => {openModalAddVolunteer()}}>
                Casdatre-se
              </button>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col">
              <h2>É nosso voluntário?</h2>
              <p>
                  Se você é um voluntário, você pode conectar-se a pessoas que precisam de ajuda. 
              </p>
              <Link to="/support-portal">
              <button type="button" className="btn btn-outline-dark azul">
                  Conectar-se 
              </button>
              </Link>
            </div>
          </div>
        </section>
        <hr style={{ border: "1px solid #333", margin: "1px 0" }} />
      </div>

      <VolunteersRegistration showModalAddVolunteer={showModalAddVolunteer} closeModal={closeModalAddVolunteer} />
      
    </div>
  );
}
