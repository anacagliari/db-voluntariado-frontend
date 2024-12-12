import { useState } from "react";
import { VolunteerDto } from "../models/VolunteerDto";
import styles from "../styles/VolunteesRegistration.module.css";
import { VolunteersRegistrationProps } from "../props/VolunteersRegistrationProps";
import {  createVolunteer } from "../services/VolunteerService";

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
    <div className={styles.modalBackground}>
      
      <div className="card">

        <div className="card-body">
          <h3 className="card-title">Cadastro</h3>
          <div>

            <div className="col">
              <label>Nome: </label>
              <input type="text" placeholder="Ex: João" className={`${styles.input}`} value={volunteerDTO.name} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, name: e.target.value })}/>
            </div>
            
            <div className="col">
              <label>Sexo: </label>
              <select className={`${styles.input}`} value={volunteerDTO.gender} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, gender: e.target.value })}>
                  <option value="" disabled> Selecione seu gênero </option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="prefiro-nao-informar">Prefiro não informar</option>
                </select>
            </div>

            <div className="col">
              <label>Idade: </label>
              <input type="number" placeholder="Ex: 18" className={`${styles.input}`} value={volunteerDTO.age} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, age: Number(e.target.value) })}/>
            </div>

            <div className="col">
              <label>CPF: </label>
              <input type="number" placeholder="Ex: 000.000.000-00" className={`${styles.input}`} value={volunteerDTO.cpf} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, cpf: e.target.value })}/>
            </div>

            <div className="col">
              <label>Telefone: </label>
              <input type="number" placeholder="Ex: (00) 00000-0000" className={`${styles.input}`} value={volunteerDTO.phone} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, phone: e.target.value })}/>
            </div>

            <div className="col">
              <label>E-mail: </label>
              <input type="email" placeholder="Ex: email@email.com" className={`${styles.input}`} value={volunteerDTO.email} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, email: e.target.value })}/>
            </div>

            <div className="col">
              <label>CEP: </label>
              <input type="number" placeholder="Ex: 00000-000" className={`${styles.input}`} value={volunteerDTO.cep} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, cep: e.target.value })}/>
            </div>

            <div className="col">
              <label>Cidade: </label>
              <input type="text" placeholder="Ex: São Paulo" className={`${styles.input}`} value={volunteerDTO.city} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, city: e.target.value })}/>
            </div>

            <div className="col">
              <label>Endereço: </label>
              <input type="text" placeholder="Ex: Rua, nº" className={`${styles.input}`} value={volunteerDTO.address} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, address: e.target.value })}/>
            </div>

            <div className="col">
              <label>Áreas de Suporte: </label>
              <select className={`${styles.input}`} value={volunteerDTO.areasDeSuporte} onChange={(e) => setVolunteerDTO({ ...volunteerDTO, areasDeSuporte: [e.target.value] })}>
                <option value="" disabled> Selecione sua área de suporte </option>
                <option value="Aprendizado de Tecnologia">Aprendizado de Tecnologia</option>
                <option value="Realização de Tarefas Cotidianas">Realização de Tarefas Cotidianas</option>
                <option value="Participação em Atividades Recreativas">Participação em Atividades Recreativas</option>
              </select>
            </div>

            <div className="col">
              <button title="Cadastrar" type="button" className="btn btn-outline-dark laranja" onClick={addVolunteer}>
                Cadastrar
              </button>
            </div>
            <button title="Cancelar" type="button" className="btn btn-sm btn-secondary ms-2" onClick={() => closeModal()}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
