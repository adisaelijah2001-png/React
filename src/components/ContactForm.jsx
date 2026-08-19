import { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''})
  const [status, setStatus] = useState(null)

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    // simple validation
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error', text:'Please fill name, email and message.'})
      return
    }
    setStatus({type:'success', text:'Thanks! Your message was sent (demo).'})
    setForm({name:'', email:'', phone:'', message:''})
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {status && <div className={`form-status ${status.type}`}>{status.text}</div>}
      <label>Full Name<input name="name" value={form.name} onChange={handleChange} /></label>
      <label>Email<input name="email" type="email" value={form.email} onChange={handleChange} /></label>
      <label>Phone<input name="phone" value={form.phone} onChange={handleChange} /></label>
      <label>Message<textarea name="message" value={form.message} onChange={handleChange} /></label>
      <button className="btn primary" type="submit">Send Message</button>
    </form>
  )
}
