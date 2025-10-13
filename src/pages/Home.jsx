import Carousel from "../components/Carousel"
import Slide from "../components/Slide"

const Home = () => {
  return (
    <Carousel>
      <Slide 
        img='nr_capa.jpg' 
        imgMobile='nr_capa_sm.JPG' 
        headline='Curso de Energia Solar'
        btnText='Saiba Mais'
        active
      />
      <Slide 
        img='nr_capa.jpg' 
        imgMobile='nr_capa_sm.JPG' 
        headline='Do Básico ao Avançado'
        btnText='Inscreva-se'
      />
    </Carousel>
  )
}

export default Home