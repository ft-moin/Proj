export default function HomePage({ onFeedback }) {
  return <><section className="hero">
    <span className="eyebrow">YOUR VOICE MATTERS</span>
    <h1>Better campus life<br/><span>starts with your feedback.</span></h1>
    <p>Share your experience, help us understand what works, and shape a better learning environment for everyone.</p>
    <button className="primary" onClick={onFeedback}>Share your feedback <span>→</span></button>
  </section>
  <section className="feature-grid">
    <article className="feature"><div className="feature-icon">✦</div><h3>Quick & simple</h3><p>A clear form makes it easy to tell us about your campus experience.</p></article>
    <article className="feature"><div className="feature-icon">◉</div><h3>Your voice counts</h3><p>Ratings and comments help identify where improvements matter most.</p></article>
    <article className="feature"><div className="feature-icon">↗</div><h3>Meaningful change</h3><p>Feedback insights help administrators make informed decisions.</p></article>
  </section></>;
}
