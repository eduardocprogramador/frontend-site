import Title from "../components/Title"

const Localizacao = () => {
  return (
  <div className="container mt-4 mb-3">
    <Title title='Nossa Localização' />
    <p className="mb-4 text-center">Endereço: Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.99144102522!2d2.291906374977073!3d48.85837360070965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1spt-BR!2sbr!4v1757180841693!5m2!1spt-BR!2sbr" 
          width="100%" height="350px" style={{border:0}} allowFullScreen="" 
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
  )
}

export default Localizacao