import Logo from '../../public/img/logo.png'

const CardForm = ({children, headline}) => {
  return (
  <div className="container">
    <div className="row align-items-center vh-100">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="col-2 offset-5 mt-4 mb-2">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="card-body">
            <h3 className="text-center mb-3">{headline}</h3>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardForm