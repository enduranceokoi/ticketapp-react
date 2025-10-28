import React from 'react'

const STATUS_CLASS = {
  open: 'status-open',
  in_progress: 'status-inprogress',
  closed: 'status-closed'
}

export default function TicketCard({ticket, onEdit, onDelete}) {
  return (
    <article className="card ticket-card" aria-labelledby={`t-${ticket.id}`}>
      <div className="ticket-head">
        <h4 id={`t-${ticket.id}`}>{ticket.title}</h4>
        <span className={`status ${STATUS_CLASS[ticket.status]}`}>{ticket.status}</span>
      </div>
      {ticket.description && <p className="muted">{ticket.description}</p>}
      <div className="ticket-actions">
        <button className="btn small" onClick={onEdit}>Edit</button>
        <button className="btn small ghost" onClick={onDelete}>Delete</button>
      </div>
    </article>
  )
}
