import Title from "../components/Title"
import { useState, useRef } from "react"
import { handlePhoneChange } from "../utils/handlePhoneChange"
import { toast } from "react-toastify"
import api from "../utils/api"

const Contato = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [startedAt] = useState(Date.now())
  const msgRef = useRef()
  async function handleSubmit(e) { 
    e.preventDefault()
    const website = e.target.website.value
    if(website) {
      return
    }
    setLoading(true)
    const msg = msgRef.current.value
    try {
      const response = await api.post('/email/send', {
        name, phone, msg, website, startedAt    
      })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
    setName('')
    setPhone('')
    msgRef.current.value = ''
    setLoading(false)
  }
  return (
  <div className="container my-4">
    <Title title='Contato' />
    <form onSubmit={handleSubmit}>
      <input type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" style={{position: 'absolute', left: '-10000px'}} />
      <input type="hidden" name="startedAt" value={startedAt} />
      <div className="row mb-4">
        <div className="col-md-6">
          <label className="mb-1">Nome:</label>
          <input required type="text" value={name} onChange={e => setName(e.target.value)} className="form-control mb-3"/>
        </div>
        <div className="col-md-6">
          <label className="mb-1">Telefone:</label>
          <input required type="text" value={phone} onChange={e => handlePhoneChange(e, setPhone)} className="form-control mb-3" placeholder="(XX) XXXXX-XXXX"/>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12">
          <label className="mb-1">Mensagem:</label>
          <textarea required ref={msgRef} className="form-control" rows={3}></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4 col-8 offset-2">
          <input type="submit" value={loading ? 'Enviando...' : 'Enviar'} disabled={loading} className="form-control btn btn-color text-light" />
        </div>
      </div>
    </form>
  </div>
  )
}

export default Contato
