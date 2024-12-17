import { useState } from "react";
import { VolunteerDto } from "../models/VolunteerDto";
import styles from "../styles/Registration.module.css";
import { VolunteersRegistrationProps } from "../props/VolunteersRegistrationProps";
import {  createVolunteer } from "../services/VolunteerService";
import "../styles/Buttons.css";

export default function VolunteersRegistration({ showModalAddVolunteer, closeModal }: VolunteersRegistrationProps): JSX.Element | null {
  const [volunteerDTO, setVolunteerDTO] = useState<VolunteerDto>(
    new VolunteerDto()
  );

  if (!showModalAddVolunteer) {
    return null;
  }

  async function addVolunteer() {
    try {
      await createVolunteer(volunteerDTO);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className={`${styles.modalBackground} d-flex justify-content-center align-items-center`}>
      <div className={`${styles.modalCard} card p-4 shadow-lg rounded`}>
        <div className="card-body">
          <div className={styles.cardTitleVolunteer}>
            <h3>Cadastro de Voluntário</h3>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <label>Nome:</label>
              <input
                type="text"
                placeholder="Ex: João"
                className={`${styles.input} form-control`}
                value={volunteerDTO.name}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, name: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <label>Sexo:</label>
              <select
                className={`${styles.input} form-control`}
                value={volunteerDTO.gender}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, gender: e.target.value })}
              >
                <option value="" disabled>Selecione seu sexo</option>
                <option value="FEMININO">Feminino</option>
                <option value="MASCULINO">Masculino</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Idade:</label>
              <input
                type="number"
                placeholder="Ex: 18"
                className={`${styles.input} form-control`}
                value={volunteerDTO.age}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, age: Number(e.target.value) })}
              />
            </div>

            <div className="col-md-6">
              <label>CPF:</label>
              <input
                type="text"
                placeholder="Ex: 000.000.000-00"
                className={`${styles.input} form-control`}
                value={volunteerDTO.cpf}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, cpf: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <label>Telefone:</label>
              <input
                type="text"
                placeholder="Ex: (00) 00000-0000"
                className={`${styles.input} form-control`}
                value={volunteerDTO.phone}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, phone: e.target.value })}
              />
            </div>

            <div className="col-12">
              <label>E-mail:</label>
              <input
                type="email"
                placeholder="Ex: email@email.com"
                className={`${styles.input} form-control`}
                value={volunteerDTO.email}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, email: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <label>CEP:</label>
              <input
                type="text"
                placeholder="Ex: 00000-000"
                className={`${styles.input} form-control`}
                value={volunteerDTO.cep}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, cep: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <label>Cidade:</label>
              <input
                type="text"
                placeholder="Ex: São Paulo"
                className={`${styles.input} form-control`}
                value={volunteerDTO.city}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, city: e.target.value })}
              />
            </div>

            <div className="col-12">
              <label>Endereço:</label>
              <input
                type="text"
                placeholder="Ex: Rua, nº"
                className={`${styles.input} form-control`}
                value={volunteerDTO.address}
                onChange={(e) => setVolunteerDTO({ ...volunteerDTO, address: e.target.value })}
              />
            </div>

            <div className="col-12 text-center mt-4">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={addVolunteer}
              >
                Cadastrar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => closeModal()}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

