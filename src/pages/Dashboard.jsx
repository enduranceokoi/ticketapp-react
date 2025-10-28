import React, {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const TICKETS_KEY = 'ticketapp_tickets'

function loadTickets() {
  try {
    return JSON.parse(localStorage.getItem(TICKETS_KEY) || '[]')
  } catch { return [] }
}

export default function Dashboard(){
  const tickets = loadTickets()
  const total = tickets.length
  const open = tickets.filter(t => t.status === 'open').length
  const inProgress = tickets.filter(t => t.status === 'in_progress').length
  const closed = tickets.filter(t => t.status === 'closed').length

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat card"><h3>Total</h3><p>{total}</p></div>
        <div className="stat card"><h3>Open</h3><p>{open}</p></div>
        <div className="stat card"><h3>In Progress</h3><p>{inProgress}</p></div>
        <div className="stat card"><h3>Resolved</h3><p>{closed}</p></div>
      </div>
      <div style={{marginTop:20}}>
        <Link className="btn" to="/tickets">Manage Tickets</Link>
      </div>
    </div>
  )
}
