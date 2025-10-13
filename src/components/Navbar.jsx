import { Link } from "react-router-dom"
import Logo from '../../public/img/logo.png'
import { AuthContext } from "../context/Auth"
import { useContext } from "react"

const Navbar = () => {
  const {logout} = useContext(AuthContext)
  return (
  <header>
    <nav className="navbar navbar-expand-md fixed-top">
        <Link to="/" className="navbar-brand ms-2">
            <img src={Logo} id="logo" width="60" />
        </Link>
        <button className="navbar-toggler me-2" data-bs-toggle="collapse" data-bs-target="#nav-principal">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav-principal">
            <ul className="navbar-nav d-flex justify-content-between w-100">
                <li className="nav-item mx-auto">
                    <Link to="/" className="nav-link">
                        <i className="fa-solid fa-house"></i> Início
                    </Link>
                </li>
                <li className="nav-item mx-auto">
                    <Link to="/contato" className="nav-link">
                        <i className="fa-solid fa-envelope"></i> Contato
                    </Link>
                </li>
                <li className="nav-item mx-auto">
                    <Link to="/sobre_nos" className="nav-link">
                        <i className="fa-solid fa-check"></i> Sobre Nós
                    </Link>
                </li>
                <li className="nav-item mx-auto">
                    <Link to="/local" className="nav-link">
                        <i className="fa-solid fa-location-dot"></i> Localização
                    </Link>
                </li>
                <li className="nav-item mx-auto">
                    <button onClick={logout} className="nav-link text-danger">
                        <i className="fa-solid fa-arrow-right"></i> Sair
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  </header>
  )
}

export default Navbar