export default function MyFooter() {
  return (
    <footer>
      <div>
        <br/>
        <br/>
        <br/>  
        <p>
            <img
            src="../src/assets/logo1.png"
            alt="Volunteer - Doing Better"
            style={{ maxWidth: "150px", marginBottom: "10px" }}
            />
            <strong>Volunteer - Doing Better</strong> | Desenvolvido por{" "}
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
        <p>Repositórios disponíveis em{" "}
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
    </footer>
  );
}
