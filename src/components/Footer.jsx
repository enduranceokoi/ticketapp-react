import React from 'react'

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f4f4f4' }}>
      <p>© {new Date().getFullYear()} Ticket App. All rights reserved.</p>
    </footer>
  )
}
