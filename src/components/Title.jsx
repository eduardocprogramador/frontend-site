import { Link } from "react-router-dom"

const Title = ({title}) => {
  return (
    <div className="d-flex align-items-center position-relative mb-4">
      <Link to="/" className="btn btn-color text-light">
        <i className="fa-solid fa-backward"></i> Voltar
      </Link>
      <h3 className="position-absolute start-50 translate-middle-x m-0">
        {title}
      </h3>
    </div>
  )
}

export default Title