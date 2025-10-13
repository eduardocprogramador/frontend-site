import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Layout from "./utils/Layout"
import SobreNos from "./pages/SobreNos"
import Localizacao from "./pages/Localizacao"
import Private from "./utils/Private"

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={
        <Private>
          <Layout>
            <Home />
          </Layout>
        </Private>
      } 
      />
      <Route path="/contato" element={
        <Private>
          <Layout>
            <Contato />
          </Layout>
        </Private>
      } 
      />
      <Route path="/sobre_nos" element={
        <Private>
          <Layout>
            <SobreNos />
          </Layout>
        </Private>
      } 
      />
      <Route path="/local" element={
        <Private>
          <Layout>
            <Localizacao />
          </Layout>
        </Private>
      } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes> 
  )
}

export default RoutesApp