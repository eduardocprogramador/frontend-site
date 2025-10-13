import { Link } from "react-router-dom"

const Footer = () => {
  return (
  <footer>
    <div className="container text-center">
      <div>
        <p>&copy; 2025 - Site. Todos os direitos reservados.</p>
      </div>
      <div>
        <p>
          <i className="fa-brands fa-whatsapp fa-lg"></i> (98) 99111-8525 
          <span className="mx-2">|</span>
          <i className="fa-solid fa-phone"></i> (98) 99111-8525
          <span className="mx-2">|</span> 
          <i className="fa-solid fa-envelope"></i> eduardocosta-carvalho@hotmail.com
        </p>
      </div>
      <div>
        <p>Siga-nos:</p>
        <Link to="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-square-facebook fa-2xl"></i>
        </Link>
        <Link to="https://www.instagram.com/weduardoc/" target="_blank">
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </Link>
      </div>
  </div>
  </footer>
  )
}

export default Footer