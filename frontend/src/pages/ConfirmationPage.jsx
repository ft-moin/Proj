export default function ConfirmationPage({ referenceId, onHome }) {
  return <section className="panel center"><div className="success-icon">✓</div>
    <h1>Thank you for your feedback!</h1><p>Your response has been recorded.</p>
    <p>Reference ID: <strong>{referenceId}</strong></p><button className="primary" onClick={onHome}>Back to home</button>
  </section>;
}
