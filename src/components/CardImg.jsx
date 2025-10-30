const CardImg = ({src, title, desc}) => {
  return (
  <div className="card">
    <img src={`/img/${src}`} class="card-img-top" />
    <div className="card-body">
        <h6 class="card-title fw-bold">{title}</h6>
        <p className="card-text">{desc}</p>
    </div>
  </div>
  )
}

export default CardImg