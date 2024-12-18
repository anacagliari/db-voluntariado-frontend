import { useEffect, useState } from "react";
import { BeneficiaryDto } from "../models/BeneficiaryDto";
import "../styles/SupportPortal.css";
import { getBeneficiary } from "../services/BeneficiaryService";
import "../styles/Buttons.css";
import { createSupport } from "../services/SupportService";
import { SupportDto } from "../models/SupportDto";
import { BeneficiaryResponseDto } from "../models/BeneficiaryResponseDto";
import axios from "axios";



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
  const [beneficiaryResponses, setBeneficiaryResponses] = useState<BeneficiaryResponseDto[]>([]); // Respostas detalhadas do backend
  //const [connections, setConnections] = useState<Connection[]>([]); 
  const [requestSearch, setRequestSearch] = useState(""); 
 //onst [connectionSearch, setConnectionSearch] = useState("");

  useEffect(() => {
    //obter lista de solicitações dos beneficiários
    const fetchBeneficiaries = async () => {
      try {
        const beneficiaries = await getBeneficiary();
        setRequests(beneficiaries);

        // Para cada BeneficiaryDto, buscar informações detalhadas
        const responses = await Promise.all(
           beneficiaries.map(async (beneficiary: BeneficiaryDto) => {
          const response = await axios.get<BeneficiaryResponseDto>(`/beneficiaries/${beneficiary.id}`);
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

  //obter lista de conexões
  //   const fetchConnections = async () => {
  //     try {
  //       const supportsConnections = await getSupport();
  //       setConnections(supportsConnections); 
  //       console.log("Conexões carregadas:", supportsConnections);
  //     } catch (error) {
  //       console.error("Erro ao carregar as conexões:", error);
  //     }
  //   };
  //   fetchConnections();
   //}, []);

  //para filtrar solicitações por area de suporte
  const filteredRequests = requests.filter((request) =>
    request.supportArea.toLowerCase().includes(requestSearch.toLowerCase())
  );

//para filtrar as conexões
  //const filteredConnections = connections.filter((connection) =>
  //  connection.beneficiary.name.toLowerCase().includes(connectionSearch.toLowerCase())
 // );


 const handleConnect = async (response: BeneficiaryResponseDto) => {
  try {
    console.log("Conectando com o beneficiário:", response);

    // Criar objeto SupportDto com os dados necessários
    const supportData = new SupportDto();
    supportData.volunteerId = 1; // Simulando um voluntário logado com ID 1
    supportData.beneficiaryId = response.id;
    supportData.name = response.name;
    supportData.supportArea = response.supportArea;
    supportData.dateFrom = response.dateFrom;
    supportData.dateTo = response.dateTo;

    console.log("Dados enviados para o suporte:", supportData);

    // Enviar os dados ao backend
    await createSupport(supportData);

    alert(`Conectado com sucesso ao beneficiário: ${response.name}`);
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
              const response = beneficiaryResponses.find((res) => res.id === request.id);
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
    </section> */}
  </div>
  );
}