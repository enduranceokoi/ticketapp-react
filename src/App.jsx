import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Landing from './pages/Landing'
import AuthLogin from './pages/AuthLogin'
import AuthSignup from './pages/AuthSignup'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import ProtectedRoute from './routes/ProtectedRoute'
import Footer from './components/Footer'
import NavBar from './components/NavBar'



<h1 className="text-4xl font-bold text-blue-600">Tailwind Test</h1>


export default function App(){
  return (
    <AuthProvider>
      <div className="app-shell">
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/auth/login" element={<AuthLogin/>} />
            <Route path="/auth/signup" element={<AuthSignup/>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/tickets" element={<ProtectedRoute><Tickets/></ProtectedRoute>} />
            <Route path="*" element={<Landing/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}