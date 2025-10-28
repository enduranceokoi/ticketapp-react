import React, {useState, useEffect} from 'react'
const STATUS_OPTIONS = ['open','in_progress','closed']

export default function TicketForm({onCreate, editing, onUpdate, onCancel}) {
  const init = {title:'', description:'', priority:'low', status:'open'}
  const [form, setForm] = useState(init)
  const [errors, setErrors] = useState({})

  useEffect(()=> {
    if(editing) setForm({...editing})
    else setForm(init)
    setErrors({})
  },[editing])

  function validate() {
    const errs = {}
    if(!form.title || form.title.trim().length === 0) errs.title = 'Title is required.'
    if(!STATUS_OPTIONS.includes(form.status)) errs.status = 'Status must be open, in_progress, or closed.'
    if(form.description && form.description.length > 1000) errs.description = 'Description too long.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e){
    e?.preventDefault()
    if(!validate()) return
    if(editing) onUpdate(editing.id, form)
    else onCreate(form)
    setForm(init)
  }

  return (
    <form className="card form-card" onSubmit={handleSubmit} noValidate>
      <h3>{editing ? 'Edit Ticket' : 'Create Ticket'}</h3>
      <label>Title
        <input value={form.title} onChange={e=>setForm({...form, title:e.target.value})} aria-invalid={!!errors.title}/>
        {errors.title && <div className="inline-error">{errors.title}</div>}
      </label>
      <label>Status
        <select value={form.status} onChange={e=>setForm({...form, status:e.target.value})}>
          {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.status && <div className="inline-error">{errors.status}</div>}
      </label>
      <label>Description
        <textarea value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
      </label>
      <div className="form-actions">
        <button className="btn" type="submit">{editing ? 'Save' : 'Create'}</button>
        {editing && <button type="button" className="btn ghost" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  )
}
