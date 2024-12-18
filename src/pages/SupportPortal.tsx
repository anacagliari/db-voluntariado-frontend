import { useEffect, useState } from "react";
import { BeneficiaryDto } from "../models/BeneficiaryDto";
import "../styles/SupportPortal.css";
import { getBeneficiary } from "../services/BeneficiaryService";
import "../styles/Buttons.css";
import { BeneficiaryResponseDto } from "../models/BeneficiaryResponseDto";
import axios from 'axios';

// interface Connection {
//   volunteer: {
//     id: number;
//   };
//   beneficiary: {
//     id: number;
//   };
//   dateFrom: string;
//   dateTo: string;
//   supportArea: string;
// }

export default function SupportPortal() {
  const [requests, setRequests] = useState<BeneficiaryDto[]>([]); 
  const [beneficiaryResponses, setBeneficiaryResponses] = useState<BeneficiaryResponseDto[]>([]); 
  const [requestSearch, setRequestSearch] = useState(""); 
  //const [connections, setConnections] = useState<Connection[]>([]); 
  //const [connectionSearch, setConnectionSearch] = useState("");

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        //obter lista de solicitações dos beneficiários
        const beneficiaries = await getBeneficiary();
        setRequests(beneficiaries);

        // Para cada BeneficiaryDto, buscar informações detalhadas
        const responses = await Promise.all(
          beneficiaries.map(async (beneficiary: BeneficiaryDto) => {
            const response = await axios.get<BeneficiaryResponseDto>(`http://localhost:8080/beneficiaries/${beneficiary.id}`,{
                headers: {'Accept': 'application/json'}
            });
            return response.data;
          })
        );

        setBeneficiaryResponses(responses);
        console.log("Beneficiários detalhados carregados:", responses);
      } catch (error) {
        console.error("Erro ao carregar beneficiários:", error);
      }
    };
    fetchBeneficiaries();
  }, []);
  
  // obter lista de conexões
  // const fetchConnections = async () => {
  //     try {
  //       const supportsConnections = await getSupport();
  //       setConnections(supportsConnections); 
  //       console.log("Conexões carregadas:", supportsConnections);
  //     } catch (error) {
  //       console.error("Erro ao carregar as conexões:", error);
  //     }
  //   };
  //   fetchConnections();
  // }, []);

  // Filtra solicitações por área de suporte
  const filteredRequests = requests.filter((request) =>
    request.supportArea.toLowerCase().includes(requestSearch.toLowerCase())
  );

  // Filtra as conexões do voluntário
  // const filteredConnections = connections.filter((connection) =>
  //   connection.beneficiary.name.toLowerCase().includes(connectionSearch.toLowerCase())
  // );

  const handleConnect = async (beneficiary: BeneficiaryResponseDto) => {
    try {
      console.log("Conectando com o beneficiário:", beneficiary);

      // ID fixo do voluntário, simulando que o Voluntário está logado
      const volunteerId = 5; 

      // Criando o objeto de suporte com os dados necessários
      const supportData = {
        volunteer: { id: volunteerId }, // Usando o ID simulado do voluntário logado
        beneficiary: { id: beneficiary.id },
        supportArea: beneficiary.supportArea,
        dateFrom: beneficiary.dateFrom,
        dateTo: beneficiary.dateTo,
      };

      console.log("Dados enviados para o suporte:", supportData);

      // Enviando a requisição POST para criar a conexão
      await axios.post('http://localhost:8080/volunteers/support', supportData);

      alert(`Conectado com sucesso ao beneficiário: ${beneficiary.name}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro ao conectar ao suporte:", error.response || error.message);
      } else {
        console.error("Erro ao conectar ao suporte:", error);
      }
      alert("Não foi possível conectar. Tente novamente.");
    }
  };

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
            filteredRequests.map((request, index) => {
              const response = beneficiaryResponses.find(
                (res) => res.id === request.id
              );
              return (
                <div key={index} className="requestCard">
                  <h3>{request.supportArea}</h3>
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
                    onClick={() => response && handleConnect(response)}
                  >
                    Conectar
                  </button>
                </div>
              );
            })
          ) : (
            <p>Não há solicitações disponíveis no momento.</p>
          )}
        </div>
      </section>
      {/* <section className="portal">
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
              filteredConnections.map((connection, index) => (
                <tr key={index}>
                  <td>{connection.beneficiary.name}</td>
                  <td>
                    {connection.dateFrom} a {connection.dateTo}
                  </td>
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
      </section> */}
    </div>
  );
}
