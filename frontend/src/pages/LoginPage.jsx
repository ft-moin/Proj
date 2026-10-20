import { useState } from 'react';
export default function LoginPage({ onLogin }) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('This starter screen needs the backend administrator account to be configured.');
  function submit(e){e.preventDefault(); setMessage('Admin authentication is not configured in this starter scaffold. Configure the backend admin account before using the dashboard.');}
  return <section className="panel form-panel narrow"><span className="eyebrow">ADMINISTRATION</span><h1>Administrator login</h1>
    <p className="muted">Sign in to review campus feedback and trends.</p>
    <form onSubmit={submit}><label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label>
      <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
      <button className="primary">Sign in</button></form>
    {message && <p className="notice">{message}</p>}
  </section>;
}
