import { Link } from "react-router-dom"

const Slide = ({img, imgMobile, headline, btnText, active}) => {
  return (
  <div className={`carousel-item ${active ? 'active' : ''}`}>
    <img src={`/img/${img}`} className="d-none d-sm-block w-100 c-img" style={{filter: "brightness(0.6)"}}  />
    <img src={`/img/${imgMobile}`} className="d-block d-sm-none w-100 c-img" style={{filter: "brightness(0.6)"}} />
    <div className="carousel-caption d-flex flex-column flex-md-row align-items-center justify-content-center h-100">
      <button className="btn btn-lg btn-warning text-light py-2 px-3">
        {headline}
      </button>
      <Link to="/contato" className="btn btn-lg btn-primary text-light py-2 px-3">
        {btnText}
        <i className="fa-solid fa-play ms-2"></i>
      </Link>
    </div>
  </div>
  )
}

export default Slide