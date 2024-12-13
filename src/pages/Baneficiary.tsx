import BeneficiaryRegistration from "./BeneficiaryRegistration";
import { useState } from 'react';

export default function Beneficiary() {

  const [showModalAddBeneficiary, setShowModalAddBeneficiary] = useState(false);

  const openModalAddBeneficiary = () => { setShowModalAddBeneficiary(true); };
  const closeModalAddBeneficiary = () => { setShowModalAddBeneficiary(false); };


  return (
    <div>
      <div className="beneficiary">
        <hr style={{ border: "1px solid #333", margin: "1px 0" }} />
        <h1>Olá Beneficiário!</h1>
        <section className="container">
          <div className="row">
            <div className="col">
              <h2>Está precisando de ajuda?</h2>
              <p>
                Se você deseja solicitar um voluntário para te ajudar com diversas atividades, você pode se cadastrar e
                solicitar a sua ajuda.
              </p>
              <button type="button" className="btn btn-outline-dark laranja" onClick={() => {openModalAddBeneficiary()}}>
                Casdatre-se
              </button>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col">
              <h2>É nosso beneficiário?</h2>
              <p>
                  Se você é um beneficiário, você pode solicitar a sua ajuda e conectar-se a pessoas que podem te ajudar. 
              </p>
              <button type="button" className="btn btn-outline-dark azul">
                Solicitar
              </button>
            </div>
          </div>
        </section>
        <hr style={{ border: "1px solid #333", margin: "1px 0" }} />
      </div>

      <BeneficiaryRegistration showModalAddBeneficiary={showModalAddBeneficiary} closeModal={closeModalAddBeneficiary} />
      
    </div>
  );
}
