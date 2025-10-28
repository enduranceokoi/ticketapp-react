import React, {useEffect, useState} from 'react'
import TicketCard from '../components/TicketCard'
import TicketForm from '../components/TicketForm'
import Toast from '../components/Toast'
const TICKETS_KEY = 'ticketapp_tickets'

function load() {
  try { return JSON.parse(localStorage.getItem(TICKETS_KEY) || '[]') } catch { return [] }
}

export default function Tickets(){
  const [tickets, setTickets] = useState(load())
  const [editing, setEditing] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(()=> localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets)), [tickets])

  function addTicket(ticket) {
    setTickets(prev => [{...ticket, id: Date.now()}, ...prev])
    setToast({type:'success', message:'Ticket created.'})
  }
  function updateTicket(id, updates) {
    setTickets(prev => prev.map(t => t.id === id ? {...t, ...updates} : t))
    setEditing(null)
    setToast({type:'success', message:'Ticket updated.'})
  }
  function deleteTicket(id) {
    if(!confirm('Delete ticket?')) return
    setTickets(prev => prev.filter(t => t.id !== id))
    setToast({type:'success', message:'Ticket deleted.'})
  }

  return (
    <div>
      <h1>Tickets</h1>
      <TicketForm onCreate={addTicket} editing={editing} onUpdate={updateTicket} onCancel={()=>setEditing(null)} />
      <div className="tickets-grid">
        {tickets.length === 0 && <div className="card">No tickets yet.</div>}
        {tickets.map(t => (
          <TicketCard key={t.id} ticket={t} onEdit={()=>setEditing(t)} onDelete={()=>deleteTicket(t.id)} />
        ))}
      </div>
      <Toast toast={toast} onClose={()=>setToast(null)} />
    </div>
  )
}
