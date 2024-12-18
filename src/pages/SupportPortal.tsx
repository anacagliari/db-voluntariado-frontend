import { useEffect, useState } from "react";
import { BeneficiaryDto } from "../models/BeneficiaryDto";
import "../styles/SupportPortal.css";
import { getBeneficiary } from "../services/BeneficiaryService";
import "../styles/Buttons.css";
import axios from 'axios';
import { getSupport } from "../services/SupportService";
import { BeneficiaryResponseDto } from "../models/BeneficiaryResponseDto";

interface Connection {
  id: number;
  volunteer: {
    id: number;
  };
  beneficiary: {
    id: number;
    name: string;
  };
  dateFrom: string;
  dateTo: string;
  supportArea: string;
}

export default function SupportPortal() {
  const [requests, setRequests] = useState<BeneficiaryDto[]>([]); 
  const [beneficiaryResponses, setBeneficiaryResponses] = useState<BeneficiaryResponseDto[]>([]); 
  const [requestSearch, setRequestSearch] = useState(""); 
  const [connections, setConnections] = useState<Connection[]>([]); 
  const [connectionSearch, setConnectionSearch] = useState("");
  const [volunteerName, setVolunteerName] = useState<string | null>(null);

  // ID fixo do voluntário, simulando que o Voluntário está logado
  const volunteerId = 1; 

  useEffect(() => {

    // Buscar o nome do voluntário
    const fetchVolunteerName = async () => {
      try {
        const response = await axios.get<{ name: string }>(`http://localhost:8080/volunteers/${volunteerId}`);
        setVolunteerName(response.data.name);
      } catch (error) {
        console.error("Erro ao buscar o nome do voluntário:", error);
        setVolunteerName("Desconhecido");
      }
    };

    fetchVolunteerName();

    const fetchBeneficiaries = async () => {
      try {
        //obter lista de solicitações dos beneficiários
        const beneficiaries = await getBeneficiary();
        setRequests(beneficiaries);

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

    // obter lista de conexões
  const fetchConnections = async () => {
      try {
        const supportsConnections = await getSupport();
        setConnections(supportsConnections); 
        console.log("Conexões carregadas:", supportsConnections);
      } catch (error) {
        console.error("Erro ao carregar as conexões:", error);
      }
    };
    fetchConnections();
  }, []);
  

  // Filtra solicitações por área de suporte
  const filteredRequests = requests.filter((request) =>
    request.supportArea.toLowerCase().includes(requestSearch.toLowerCase())
  );

  //Filtra as conexões do voluntário
  const filteredConnections = connections.filter((connection) =>
    connection.beneficiary.name.toLowerCase().includes(connectionSearch.toLowerCase())
  );

  const handleConnect = async (beneficiary: BeneficiaryResponseDto) => {
    try {
      console.log("Conectando com o beneficiário:", beneficiary);


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


  const handleDeleteConnection = async (connection: Connection) => {
    if (window.confirm(`Tem certeza que deseja excluir a conexão com ${connection.beneficiary.name}?`)) {
      try {
        // Enviar requisição DELETE para o backend
        await axios.delete(`http://localhost:8080/volunteers/support/${connection.id}`);
        
        // Remover a conexão da lista local após exclusão bem-sucedida
        setConnections((prevConnections) =>
          prevConnections.filter((c) => c !== connection)
        );
  
        alert(`Conexão com ${connection.beneficiary.name} excluída com sucesso.`);
      } catch (error) {
        console.error("Erro ao excluir conexão:", error);
        alert("Não foi possível excluir a conexão. Tente novamente.");
      }
    }
  };

  return (
    <div className="portal">
      <h1>Portal de Solicitações</h1>
      <h3>Bem-vindo, <strong>{volunteerName || "Carregando..."}</strong>!</h3>
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
                  <h3>Nova Solicitação</h3>
                  <p>
                    <strong>Beneficiário: </strong>
                    {request.name}
                  </p>
                  <p>
                  <strong>Área de suporte: </strong>
                    {request.supportArea}
                  </p>
                  <p>
                    <strong>Período de Suporte: </strong>
                    {request.dateFrom} a {request.dateTo}
                  </p>
                  <p>
                    <strong>Região: </strong>
                    {request.city} - {request.address}
                  </p>
                  <button
                    className="supportBtn"
                    onClick={() => alert(`Detalhes sobre ${request.name}`)}
                  >
                    Saber mais detalhes.
                  </button>
                  <button
                    className="supportBtn"
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
              <th>Nome do Beneficiário</th>
              <th>Período do voluntariado</th>
              <th></th>
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
                  <td>
                    <button
                      className="supportBtn"
                      onClick={() => handleDeleteConnection(connection)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="noConnections">
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
