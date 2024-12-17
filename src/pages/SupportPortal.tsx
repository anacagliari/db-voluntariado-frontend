import { useEffect, useState } from "react";
import { BeneficiaryDto } from "../models/BeneficiaryDto";
import styles from "../styles/SupportPortal.module.css";
import { getBeneficiary } from "../services/BeneficiaryService";
import { SupportDto } from "../models/SupportDto";
import { getSupport } from "../services/SupportService";

export default function SupportPortal() {
  const [requests, setRequests] = useState<BeneficiaryDto[]>([]); 
  const [connections, setConnections] = useState<SupportDto[]>([]);
  const [requestSearch, setRequestSearch] = useState(""); 
  const [connectionSearch, setConnectionSearch] = useState("");

  useEffect(() => {

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
  const fetchSupports = async () => {
    try {
      const supports = await getSupport();
      setConnections(supports); 
      console.log("Suportes carregados:", supports);
    } catch (error) {
      console.error("Erro ao carregar suportes:", error);
    }
  };
  fetchSupports();
}, []);


const filteredConnections = connections.filter((connection) =>
  connection.beneficiary.name.toLowerCase().includes(connectionSearch.toLowerCase())
);

const filteredRequests = requests.filter((request) =>
  request.supportArea.some((area) =>
    area.toLowerCase().includes(requestSearch.toLowerCase())
  )
);

  return (
    <>
    <section className={styles.portal}>
      <h1>Portal de Solicitações</h1>
      <p>Area de acesso exclusivo do voluntário.</p>
      <h5>Veja abaixo as solicitações disponíveis.</h5>
      <input
        type="text"
        placeholder="Pesquisar por área de suporte"
        className={styles.searchBox}
        value={requestSearch}
        onChange={(e) => setRequestSearch(e.target.value)}
      />
      <div className={styles.requestsList}>
        {filteredRequests.length > 0 ? (
            filteredRequests.map((request, index) => (
              <div key={index} className={styles.requestCard}>
                <h3>{request.supportArea.join(", ")}</h3>
              <p>
                <strong>Período de Suporte: </strong>{request.dateFrom} a {request.dateTo}
              </p>
              <p>
                <strong>Beneficiário: </strong>{request.name}
              </p>
              <p>
                <strong>Região: </strong>{request.city} - {request.address}
              </p>
              <button
                className={styles.saberMaisBtn}
                onClick={() => alert(`Detalhes sobre ${request.name}`)} 
              >
                Saber mais detalhes.
              </button>
              <button
                className={styles.saberMaisBtn}
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
    <section>
      <h5>Minhas conexões</h5>
      <input
    type="text"
    placeholder="Pesquisar beneficiário"
    className={styles.searchBox}
    value={connectionSearch}
    onChange={(e) => setConnectionSearch(e.target.value)}
  />
  <table className={styles.connectionsTable}>
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
      <td colSpan={2} style={{ textAlign: "center" }}>
        Não há conexões correspondentes à busca.
      </td>
    </tr>
  )}
</tbody>
  </table>
    </section>
    </>
  );
}