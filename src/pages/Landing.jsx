import React from 'react'
import { Link } from 'react-router-dom'
// import './landing.css'

export default function Landing(){
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1>TicketMaster Lite</h1>
          <p className="lead">Lightweight ticket management — create, track, and close tickets fast.</p>
          <div className="cta">
            <Link className="btn" to="/auth/login">Login</Link>
            <Link className="btn ghost" to="/auth/signup">Get Started</Link>
          </div>
        </div>
        <div className="hero-right" aria-hidden>
          <img src="/shared-assets/decor-circle-1.svg" className="decor" alt="" />
        </div>
      </div>
      <div className="hero-wave" aria-hidden>
        <img src="/shared-assets/wave-hero.svg" alt="" />
      </div>
    </section>
  )
}
