import { useState } from "react";
import styles from "../styles/Registration.module.css";
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
      alert("Beneficiário cadastrado com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  return   (
    <div
      className={`${styles.modalBackground} d-flex justify-content-center align-items-center`}
    >
      <div className={`${styles.modalCard} card p-4 shadow-lg rounded`}>
        <div className="card-body">
          <div className={styles.cardTitleVolunteer}>
          <h3>Cadastro de Beneficiário</h3>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <label>Nome:</label>
              <input
                type="text"
                placeholder="Ex: João"
                className={`${styles.input} form-control`}
                value={beneficiaryDto.name}
                onChange={(e) =>
                  setBeneficiaryDto({ ...beneficiaryDto, name: e.target.value })
                }
              />
            </div>

            <div className="col-md-4">
              <label>Idade:</label>
              <input
                type="number"
                placeholder="Ex: 18"
                className={`${styles.input} form-control`}
                value={beneficiaryDto.age}
                onChange={(e) =>
                  setBeneficiaryDto({
                    ...beneficiaryDto,
                    age: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="col-md-4">
              <label>CPF:</label>
              <input
                type="text"
                placeholder="Ex: 000.000.000-00"
                className={`${styles.input} form-control`}
                value={beneficiaryDto.cpf}
                onChange={(e) =>
                  setBeneficiaryDto({ ...beneficiaryDto, cpf: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label>Telefone:</label>
              <input
                type="text"
                placeholder="Ex: (00) 00000-0000"
                className={`${styles.input} form-control`}
                value={beneficiaryDto.phone}
                onChange={(e) =>
                  setBeneficiaryDto({ ...beneficiaryDto, phone: e.target.value })
                }
              />
            </div>

            <div className="col-12">
              <label>Sexo:</label>
              <select
                className={`${styles.input} form-control`}
                value={beneficiaryDto.gender}
                onChange={(e) =>
                  setBeneficiaryDto({
                    ...beneficiaryDto,
                    gender: e.target.value.toUpperCase(),
                  })
                }
              >
                <option value="" disabled>
                  Selecione seu sexo
                </option>
                <option value="FEMININO">Feminino</option>
                <option value="MASCULINO">Masculino</option>
              </select>
            </div>

            <div className="col-12">
              <label>CEP:</label>
              <input
                type="text"
                placeholder="Ex: 00000-000"
                className={`${styles.input} form-control`}
                value={beneficiaryDto.cep}
                onChange={(e) =>
                  setBeneficiaryDto({ ...beneficiaryDto, cep: e.target.value })
                }
              />
            </div>

            <div className="col-12">
              <label>Cidade:</label>
              <input
                type="text"
                placeholder="Ex: São Paulo"
                className={`${styles.input} form-control`}
                value={beneficiaryDto.city}
                onChange={(e) =>
                  setBeneficiaryDto({ ...beneficiaryDto, city: e.target.value })
                }
              />
            </div>

            <div className="col-12">
              <label>Endereço:</label>
              <input
                type="text"
                placeholder="Ex: Rua, nº"
                className={`${styles.input} form-control`}
                value={beneficiaryDto.address}
                onChange={(e) =>
                  setBeneficiaryDto({
                    ...beneficiaryDto,
                    address: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-12">
              <label>Período da Solicitação:</label>
              <div className="d-flex gap-2">
                <input
                  type="date"
                  className={`${styles.input} form-control`}
                  value={beneficiaryDto.dateFrom}
                  onChange={(e) =>
                    setBeneficiaryDto({
                      ...beneficiaryDto,
                      dateFrom: e.target.value,
                    })
                  }
                />
                <input
                  type="date"
                  className={`${styles.input} form-control`}
                  value={beneficiaryDto.dateTo}
                  onChange={(e) =>
                    setBeneficiaryDto({
                      ...beneficiaryDto,
                      dateTo: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="col-12">
              <label>Áreas de Suporte:</label>
              <select
                className={`${styles.input} form-control`}
                value={beneficiaryDto.supportArea}
                onChange={(e) =>
                  setBeneficiaryDto({
                    ...beneficiaryDto,
                    supportArea: e.target.value.toUpperCase(), 
                  })
                }
              >
                <option value="" disabled>
                  Selecione sua área de suporte
                </option>
                <option value="APRENDIZADO_TECNOLOGIA">
                  Aprendizado de Tecnologia
                </option>
                <option value="REALIZACAO_TAREFAS">
                  Realização de Tarefas Cotidianas
                </option>
                <option value="PARTICIPACAO_ATIVIDADES">
                  Participação em Atividades Recreativas
                </option>
              </select>
            </div>


            <div className="col-12 text-center mt-3">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={addBeneficiary}
              >
                Cadastrar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => closeModal()}
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}