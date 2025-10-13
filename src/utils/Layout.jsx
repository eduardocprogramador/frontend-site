import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WhatsappBtn from '../components/WhatsappBtn'

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
    <WhatsappBtn />
    </>
  )
}

export default Layout