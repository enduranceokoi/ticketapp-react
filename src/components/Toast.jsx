import React, {useEffect} from 'react'
export default function Toast({toast, onClose}) {
  useEffect(()=> {
    if(!toast) return
    const t = setTimeout(()=> onClose?.(), 3000)
    return ()=> clearTimeout(t)
  }, [toast])
  if(!toast) return null
  return (
    <div className={`toast ${toast.type || 'info'}`} role="status" aria-live="polite">
      {toast.message}
    </div>
  )
}
