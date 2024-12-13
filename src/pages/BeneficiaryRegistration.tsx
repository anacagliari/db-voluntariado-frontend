import { useState } from "react";
import styles from "../styles/VolunteesRegistration.module.css";
import { BeneficiaryRegistrationProps } from "../props/BeneficiaryRegistrationProps";
import { createBeneficiary } from "../services/BeneficiaryService";
import { BeneficiaryDto } from "../models/BeneficiaryDto";


export default function BeneficiaryRegistration({ showModalAddBeneficiary, closeModal }: BeneficiaryRegistrationProps): JSX.Element | null {
  const [beneficiaryDto, setBeneficiaryDto] = useState<BeneficiaryDto>(
    new BeneficiaryDto()
  );

  if (!showModalAddBeneficiary) {
    return null;
  }

  async function addBeneficiary() {
    try {
      await createBeneficiary(beneficiaryDto);
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
              <input type="text" placeholder="Ex: João" className={`${styles.input}`} value={beneficiaryDto.name} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, name: e.target.value })}/>
            </div>
            
            <div className="col">
              <label>Sexo: </label>
              <select className={`${styles.input}`} value={beneficiaryDto.gender} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, gender: e.target.value })}>
                  <option value="" disabled> Selecione seu gênero </option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="prefiro-nao-informar">Prefiro não informar</option>
                </select>
            </div>

            <div className="col">
              <label>Idade: </label>
              <input type="number" placeholder="Ex: 18" className={`${styles.input}`} value={beneficiaryDto.age} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, age: Number(e.target.value) })}/>
            </div>

            <div className="col">
              <label>CPF: </label>
              <input type="number" placeholder="Ex: 000.000.000-00" className={`${styles.input}`} value={beneficiaryDto.cpf} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, cpf: e.target.value })}/>
            </div>

            <div className="col">
              <label>Telefone: </label>
              <input type="number" placeholder="Ex: (00) 00000-0000" className={`${styles.input}`} value={beneficiaryDto.phone} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, phone: e.target.value })}/>
            </div>

            <div className="col">
              <label>E-mail: </label>
              <input type="email" placeholder="Ex: email@email.com" className={`${styles.input}`} value={beneficiaryDto.email} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, email: e.target.value })}/>
            </div>

            <div className="col">
              <label>CEP: </label>
              <input type="number" placeholder="Ex: 00000-000" className={`${styles.input}`} value={beneficiaryDto.cep} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, cep: e.target.value })}/>
            </div>

            <div className="col">
              <label>Cidade: </label>
              <input type="text" placeholder="Ex: São Paulo" className={`${styles.input}`} value={beneficiaryDto.city} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, city: e.target.value })}/>
            </div>

            <div className="col">
              <label>Endereço: </label>
              <input type="text" placeholder="Ex: Rua, nº" className={`${styles.input}`} value={beneficiaryDto.address} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, address: e.target.value })}/>
            </div>

            <div className="col">
              <label>Áreas de Suporte: </label>
              <select className={`${styles.input}`} value={beneficiaryDto.areasDeSuporte} onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, areasDeSuporte: [e.target.value] })}>
                <option value="" disabled> Selecione sua área de suporte </option>
                <option value="Aprendizado de Tecnologia">Aprendizado de Tecnologia</option>
                <option value="Realização de Tarefas Cotidianas">Realização de Tarefas Cotidianas</option>
                <option value="Participação em Atividades Recreativas">Participação em Atividades Recreativas</option>
              </select>
            </div>
            <div className="col">
              <label>Período da Solicitação: </label>
              <div className={`${styles.inputGroup}`}>
                <input
                  type="date"
                  placeholder="Data de início"
                  className={`${styles.input}`}
                  value={beneficiaryDto.dateFrom}
                  onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, dateFrom: e.target.value })}
                />
                <input
                  type="date"
                  placeholder="Data de fim"
                  className={`${styles.input} ms-2`}
                  value={beneficiaryDto.dateTo}
                  onChange={(e) => setBeneficiaryDto({ ...beneficiaryDto, dateTo: e.target.value })}
                />
              </div>
            </div>
            <div className="col">
              <button title="Cadastrar" type="button" className="btn btn-outline-dark laranja" onClick={addBeneficiary}>
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
