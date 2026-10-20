export default function DashboardPage() {
  return <section className="panel"><span className="eyebrow">OVERVIEW</span><h1>Feedback dashboard</h1>
    <p className="muted">Connect the protected admin API to display live statistics and feedback records.</p>
    <div className="stats"><article><span>Total responses</span><strong>—</strong></article><article><span>Average rating</span><strong>—</strong></article><article><span>Needs review</span><strong>—</strong></article></div>
    <p className="notice">Dashboard data is a placeholder until admin API integration and authentication are configured.</p>
  </section>;
}
