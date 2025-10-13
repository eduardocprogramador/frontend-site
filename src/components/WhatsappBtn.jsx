import { Link } from "react-router-dom"
import Whatsapp from '../../public/img/whatsapp.png'

const WhatsappBtn = () => {
  return (
    <div className="position-fixed bottom-0 end-0 m-2 z-3">
        <Link to='https://api.whatsapp.com/send?phone=5598991118525'>
            <img src={Whatsapp} width="60" />
        </Link>
    </div>
  )
}

export default WhatsappBtn