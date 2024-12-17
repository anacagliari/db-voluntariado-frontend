import { useEffect, useState } from "react";
import { BeneficiaryDto } from "../models/BeneficiaryDto";
import "../styles/SupportPortal.css";
import { getBeneficiary } from "../services/BeneficiaryService";
import "../styles/Buttons.css";


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
 //onst [connections, setConnections] = useState<Connection[]>([]); 
  const [requestSearch, setRequestSearch] = useState(""); 
 //onst [connectionSearch, setConnectionSearch] = useState("");

  useEffect(() => {
    //obter lista de solicitações dos beneficiários
    const fetchBeneficiaries = async () => {
      try {
        const beneficiaries = await getBeneficiary();
        setRequests(beneficiaries); 
        console.log("Solicitações beneficiários carregados:", beneficiaries);
      } catch (error) {
        console.error("Erro ao carregar beneficiários:", error);
      }
    };
    fetchBeneficiaries();

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
   }, []);

  //para filtrar solicitações por area de suporte
  const filteredRequests = requests.filter((request) =>
    request.supportArea.toLowerCase().includes(requestSearch.toLowerCase())
  );

//para filtrar as conexões
  //const filteredConnections = connections.filter((connection) =>
  //  connection.beneficiary.name.toLowerCase().includes(connectionSearch.toLowerCase())
 // );


  // const handleConnect = async (request: BeneficiaryDto) => {

  //     const supportData = {
  //       volunteerId: 1 // Simulando um voluntário já logado com ID 1
  //     };

  //     // Chama a função createSupport para enviar os dados ao backend
  //     await createSupport(supportData);

  //     alert(`Conectado com sucesso ao beneficiário: ${request.name}`);
  //   } catch (error) {
  //     console.error("Erro ao conectar ao suporte:", error);
  //     alert("Não foi possível conectar. Tente novamente.");
  //   }
 //;

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
                onClick={() => alert(`Conecte-se ${request.name}`)} //AQUI TEM QUE FAZER A CHAMADA PARA CREATSUPORT PARA FAZER A CONEXÃO
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