import BeneficiaryRegistration from "./BeneficiaryRegistration";
import { useState } from 'react';
import ajudar from "../assets/Next option-pana (1).png"; 
import ajuda from "../assets/Volunteering-pana (1).png"; 
import "../styles/users.css";


export default function Beneficiary() {

  const [showModalAddBeneficiary, setShowModalAddBeneficiary] = useState(false);

  const openModalAddBeneficiary = () => { setShowModalAddBeneficiary(true); };
  const closeModalAddBeneficiary = () => { setShowModalAddBeneficiary(false); };


  return (
    <div className="user"> 
    <h1>Olá Beneficiário!</h1>
    <p>
      Se você deseja solicitar um voluntário para te ajudar com diversas atividades, você pode se cadastrar e solicitar a sua ajuda.
    </p>
    <section className="container">
      <div className="conteiner-beneficiary">
        <div className="row">
          <div className="col">
            <h2>Está precisando de ajuda?</h2>
            <p>
              Se você deseja solicitar um voluntário para te ajudar, você pode se cadastrar e pedir ajuda.
            </p>
            <button type="button" className="btn btn-primary" onClick={openModalAddBeneficiary}>
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
      <div className="conteiner-beneficiary">
        <div className="row">
        <div className="col">
          <img
                src={ajuda}
                className="col-md-6"
                alt="Imagem de uma pessoa ajudando"
              />
          </div>
          <div className="col">
            <h2>Já é nosso beneficiário?</h2>
            <p>
              Se você é um beneficiário, você pode solicitar a sua ajuda e conectar-se a pessoas que podem te ajudar.
            </p>
            <button type="button" className="btn btn-primary">
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </section>

    <BeneficiaryRegistration showModalAddBeneficiary={showModalAddBeneficiary} closeModal={closeModalAddBeneficiary} />
  </div>
);
}
