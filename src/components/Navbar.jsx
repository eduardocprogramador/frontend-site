import { Link } from "react-router-dom"
import Logo from '../../public/img/logo.png'
import Foto from '../../public/img/perfil.png'
import { AuthContext } from "../context/Auth"
import { useContext } from "react"

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const userImgURL = user?.img ? `${import.meta.env.VITE_API}/img/user/${user.img}` : null
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
                        <li className="nav-item mx-auto d-flex align-items-center">
                            <Link to="/perfil" className="nav-link p-0">
                                <img src={userImgURL ? userImgURL : Foto} width="45" height="45" className="rounded-circle" alt="Perfil" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar