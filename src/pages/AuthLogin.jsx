import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Toast from '../components/Toast'

export default function AuthLogin(){
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    if(!email || !password) {
      setError('Email and password required.')
      return
    }
    const res = login({email, password})
    if(res.ok) {
      navigate('/dashboard')
    } else {
      setError(res.message || 'Failed to login.')
    }
  }

  return (
    <section className="auth">
      <form className="card form-card" onSubmit={handleSubmit} noValidate aria-labelledby="login-heading">
        <h2 id="login-heading">Login</h2>
        <label>Email
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required/>
        </label>
        <label>Password
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required/>
        </label>
        {error && <div className="inline-error" role="alert">{error}</div>}
        <button className="btn" type="submit">Sign in</button>
      </form>
      <Toast />
    </section>
  )
}
