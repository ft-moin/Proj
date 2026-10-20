import { useState } from 'react';
import RatingStars from '../components/RatingStars.jsx';
import { submitFeedback } from '../services/api.js';

export default function FeedbackPage({ onDone }) {
  const [form, setForm] = useState({ studentName:'', studentEmail:'', department:'', category:'Teaching quality', rating:0, comments:'' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const update = (e) => setForm({...form, [e.target.name]:e.target.value});
  async function submit(e) {
    e.preventDefault(); setError('');
    if (!form.rating) return setError('Please select a star rating.');
    setBusy(true);
    try {
      const result = await submitFeedback(form);
      onDone(result || { referenceId: `DEMO-${Date.now().toString().slice(-6)}` });
    } catch (err) {
      setError(err.message || 'Could not submit feedback. Make sure the backend is running.');
    } finally { setBusy(false); }
  }
  return <section className="panel form-panel">
    <span className="eyebrow">STUDENT FEEDBACK</span><h1>Tell us about your experience</h1>
    <p className="muted">Your comments help make our college better.</p>
    <form onSubmit={submit}>
      <div className="form-row">
        <label>Full name<input name="studentName" value={form.studentName} onChange={update} required maxLength="100" placeholder="Your name"/></label>
        <label>Email address<input type="email" name="studentEmail" value={form.studentEmail} onChange={update} required placeholder="you@example.com"/></label>
      </div>
      <div className="form-row">
        <label>Department<input name="department" value={form.department} onChange={update} required placeholder="e.g. Computer Science"/></label>
        <label>Feedback category<select name="category" value={form.category} onChange={update}>
          {['Teaching quality','Campus facilities','Library','Administration','Canteen','Other'].map(x=><option key={x}>{x}</option>)}
        </select></label>
      </div>
      <label>Overall rating <RatingStars value={Number(form.rating)} onChange={(rating)=>setForm({...form,rating})}/></label>
      <label>Your comments<textarea name="comments" value={form.comments} onChange={update} required rows="5" maxLength="3000" placeholder="Tell us what went well and what could improve..."/></label>
      {error && <p className="error">{error}</p>}
      <button className="primary" disabled={busy}>{busy ? 'Submitting…' : 'Submit feedback →'}</button>
    </form>
  </section>;
}
