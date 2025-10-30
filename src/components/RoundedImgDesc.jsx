const RoundedImgDesc = ({src, title, desc}) => {
  return (
  <div className="mb-4">
    <div className="text-center">
      <img src={`/img/${src}`} className="rounded-circle img-fluid mb-3 w-50" />
    </div>
    <div>
      <h6 className="text-center mb-3 fw-bold">{title}</h6>
      <p className="text-center">{desc}</p>
    </div>
  </div>
  )
}

export default RoundedImgDesc