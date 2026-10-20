import { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const [receipt, setReceipt] = useState(null);
  const go = (next) => { setPage(next); window.scrollTo(0, 0); };
  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#" onClick={(e) => {e.preventDefault(); go('home')}}>CampusVoice</a>
      <nav>
        <button onClick={() => go('home')}>Home</button>
        <button onClick={() => go('feedback')}>Give Feedback</button>
        <button onClick={() => go('login')}>Admin</button>
      </nav>
    </header>
    <main>
      {page === 'home' && <HomePage onFeedback={() => go('feedback')} />}
      {page === 'feedback' && <FeedbackPage onDone={(r) => {setReceipt(r); go('confirmation')}} />}
      {page === 'confirmation' && <section className="panel center">
        <div className="success-icon">✓</div><h1>Thank you for your feedback!</h1>
        <p>Your response has been recorded.</p><p className="reference">Reference ID: <strong>{receipt?.referenceId || 'DEMO-RECEIPT'}</strong></p>
        <button className="primary" onClick={() => go('home')}>Back to home</button>
      </section>}
      {page === 'login' && <LoginPage onLogin={() => go('dashboard')} />}
      {page === 'dashboard' && <DashboardPage />}
    </main>
    <footer>College Feedback System · Helping campuses listen and improve</footer>
  </div>;
}
