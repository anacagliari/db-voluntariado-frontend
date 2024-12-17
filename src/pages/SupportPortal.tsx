import { useEffect, useState } from "react";
import { BeneficiaryDto } from "../models/BeneficiaryDto";
import "../styles/SupportPortal.css";
import { getBeneficiary } from "../services/BeneficiaryService";
import "../styles/Buttons.css";

export default function SupportPortal() {
  const [requests, setRequests] = useState<BeneficiaryDto[]>([]); 
  const [connections, setConnections] = useState<BeneficiaryDto[]>([]);
  const [requestSearch, setRequestSearch] = useState(""); 
  const [connectionSearch, setConnectionSearch] = useState("");

  const mockConnections: BeneficiaryDto[] = [
    {
      name: "Carlos Alberto",
      gender: "masculino",
      age: 40,
      cpf: "45678912300",
      phone: "(31) 98765-6789",
      email: "carlos@email.com",
      cep: "54321-000",
      address: "Avenida C, 789",
      city: "Belo Horizonte",
      dateFrom: "2024-03-01",
      dateTo: "2024-03-15",
      supportArea: ["Assistência Jurídica"],
    },
    {
      name: "Ana Clara",
      gender: "feminino",
      age: 28,
      cpf: "12378945600",
      phone: "(41) 91234-5678",
      email: "ana@email.com",
      cep: "65432-100",
      address: "Rua D, 321",
      city: "Curitiba",
      dateFrom: "2024-04-01",
      dateTo: "2024-04-20",
      supportArea: ["Suporte Psicológico"],
    },
  ];

  useEffect(() => {

    setConnections(mockConnections);


    const fetchBeneficiaries = async () => {
      try {
        const beneficiaries = await getBeneficiary();
        setRequests(beneficiaries); 
        console.log("Beneficiários carregados:", beneficiaries);
      } catch (error) {
        console.error("Erro ao carregar beneficiários:", error);
      }
    };
    fetchBeneficiaries();
  }, []);


const filteredConnections = connections.filter((connection) =>
  connection.name.toLowerCase().includes(connectionSearch.toLowerCase())
);

const filteredRequests = requests.filter((request) =>
  request.supportArea.some((area) =>
    area.toLowerCase().includes(requestSearch.toLowerCase())
  )
);

  return (
    <div className="portal">
      <h1>Portal de Solicitações</h1>
      <p>Área de acesso exclusivo do voluntário.</p>
    <section className="portal.requests">
      <h5>Veja abaixo as solicitações disponíveis.</h5>
      <input
        type="text"
        placeholder="Pesquisar por área de suporte"
        className="searchBox"
        value={requestSearch}
        onChange={(e) => setRequestSearch(e.target.value)}
      />
      <div className="requestsList">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request, index) => (
            <div key={index} className="requestCard">
              <h3>{request.supportArea.join(", ")}</h3>
              <p>
                <strong>Período de Suporte: </strong>
                {request.dateFrom} a {request.dateTo}
              </p>
              <p>
                <strong>Beneficiário: </strong>
                {request.name}
              </p>
              <p>
                <strong>Região: </strong>
                {request.city} - {request.address}
              </p>
              <button
                className="saberMaisBtn"
                onClick={() => alert(`Detalhes sobre ${request.name}`)}
              >
                Saber mais detalhes.
              </button>
              <button
                className="saberMaisBtn"
                onClick={() => alert(`Conecte-se ${request.name}`)}
              >
                Conectar
              </button>
            </div>
          ))
        ) : (
          <p>Não há solicitações disponíveis no momento.</p>
        )}
      </div>
    </section>
    <section className="portal">
      <h5>Minhas conexões</h5>
      <input
        type="text"
        placeholder="Pesquisar beneficiário"
        className="searchBox"
        value={connectionSearch}
        onChange={(e) => setConnectionSearch(e.target.value)}
      />
      <table className="connectionsTable">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Período</th>
          </tr>
        </thead>
        <tbody>
          {filteredConnections.length > 0 ? (
            filteredConnections.map((connection) => (
              <tr key={connection.cpf}>
                <td>{connection.name}</td>
                <td>{connection.dateFrom} a {connection.dateTo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="noConnections">
                Não há conexões correspondentes à busca.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  </div>
    );
  }