import { Link } from "react-router-dom"
import CardForm from "../components/CardForm"
import { useState, useContext } from "react"
import { AuthContext } from "../context/Auth"

const Register = () => {
  const {loading, register} = useContext(AuthContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  async function handleSubmit(e){
    e.preventDefault()
    const user = {name, password, confirmPassword}
    await register(user)
  }
  return (
  <CardForm headline='Criar Conta'>
    <form onSubmit={handleSubmit}>
      <label className="mb-1">Username:</label>
      <input required type="text" value={name} onChange={e => setName(e.target.value)} className="form-control mb-3"/>
      <label className="mb-1">Senha:</label>
      <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control mb-3"/>
      <label className="mb-1">Confirmar Senha:</label>
      <input required type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="form-control mb-4"/>
      <div className="col-md-6 offset-md-3 col-8 offset-2">
        <input type="submit" value={loading ? 'Carregando...' : 'Cadastrar'} disabled={loading} className="form-control btn btn-color text-light mb-4" />
      </div>
    </form>
    <span>Já possui uma conta? </span>
    <Link to='/login'>faça login</Link>
  </CardForm>
  )
}

export default Register