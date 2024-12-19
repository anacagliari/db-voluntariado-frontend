import '../styles/MyFooter.css';

export default function MyFooter() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
            <img
            src="../src/assets/logo1.png"
            alt="Logo"
            className="img-fluid"
            style={{ height: "30px" }}
            />
        </div>
        <div className="footer-text">
            <p className="mb-1">
                {" "} Desenvolvido por{" "}
                <a href="https://www.linkedin.com/in/ana-caroline-cagliari-cappellari/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i> Ana Cagliari
                </a>
                {" "}e{" "}
                <a href="https://www.linkedin.com/in/suene-souza/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i> Suene Souza
                </a>
                {" "}|{" "}
                <a href="https://start.db.tec.br/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Programa Start DB
                </a>
                {" "}em parceria com a{" "}
                <a href="https://portal.pucrs.br/"
                    target="_blank"
                    rel="noopener noreferrer">
                    PUCRS
                </a>
            </p>
            <p className="mb-0">Repositórios disponíveis em{" "}
                <a href="https://github.com/anacagliari/db-voluntariado-frontend" target="_blank">
                    <i className="bi bi-github"></i> GitHub Frontend
                </a>
                {" "}e{" "}
                <a href="https://github.com/anacagliari/db-voluntariado-backend" target="_blank">
                    <i className="bi bi-github"></i> GitHub Backend
                </a>
                {" "}| © 2024
            </p>
        </div>
      </div>
    </footer>
  );
}
