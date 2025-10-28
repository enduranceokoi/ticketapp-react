import React, {createContext, useState, useEffect} from 'react'
const SESSION_KEY = 'ticketapp_session'
export const AuthContext = createContext()

export function AuthProvider({children}) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem(SESSION_KEY)
    if (raw) {
      try { setUser(JSON.parse(raw)) } catch { localStorage.removeItem(SESSION_KEY) }
    }
  }, [])

  function login({email, password}) {
    // example static user
    if (email === 'test@ticketapp.local' && password === 'Password123!') {
      const token = {email, token: 'fake-jwt-token', createdAt: Date.now()}
      localStorage.setItem(SESSION_KEY, JSON.stringify(token))
      setUser(token)
      return { ok: true }
    }
    return { ok: false, message: 'Invalid credentials' }
  }

  function signup({email, password}) {
    // create user in localStorage for demo (simple)
    // Accept anything but enforce basic validation in UI
    const token = {email, token: 'fake-jwt-token', createdAt: Date.now()}
    localStorage.setItem(SESSION_KEY, JSON.stringify(token))
    setUser(token)
    return { ok: true }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, login, signup, logout, SESSION_KEY}}>
      {children}
    </AuthContext.Provider>
  )
}
