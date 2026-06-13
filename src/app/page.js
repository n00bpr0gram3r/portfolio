import Link from 'next/link';
import { getSortedWriteupsData } from '../lib/writeups';

export default function Home() {
  const writeups = getSortedWriteupsData().slice(0, 5);

  return (
    <div>
      <header className="dashboard-header">
        <h1 className="dashboard-title">SECURITY OPERATIONS CENTER</h1>
        <p className="dashboard-subtitle">Vulnerability Research, Audits, and Disclosed Exploit Logs</p>
      </header>

      {/* Metrics Panel */}
      <section className="metrics-grid">
        <div className="metric-card">
          <span className="metric-value">12</span>
          <span className="metric-label">Audited Targets</span>
        </div>
        <div className="metric-card">
          <span className="metric-value">{getSortedWriteupsData().length}</span>
          <span className="metric-label">Disclosed Alerts</span>
        </div>
        <div className="metric-card">
          <span className="metric-value">14</span>
          <span className="metric-label">Verified Fixes</span>
        </div>
        <div className="metric-card">
          <span className="metric-value">48h</span>
          <span className="metric-label">Avg Triage Speed</span>
        </div>
      </section>

      {/* Main Grid */}
      <div className="dashboard-content">
        {/* Left: Alert Logs */}
        <section className="card-obsidian">
          <h3 className="card-title">RECENT ALERTS (WRITEUPS)</h3>
          <div className="alert-list">
            {writeups.length > 0 ? (
              writeups.map((w) => (
                <Link key={w.id} href={`/writeups/${w.slug}`} className="alert-row">
                  <div className="alert-info">
                    <span className="alert-id">{w.id}</span>
                    <span className="alert-title">{w.title}</span>
                  </div>
                  <div className="alert-tags">
                    <span className="alert-category">{w.category}</span>
                    <span className={`severity-badge ${w.severity}`}>{w.severity}</span>
                  </div>
                </Link>
              ))
            ) : (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>No alerts indexed in database.</p>
            )}
          </div>
        </section>

        {/* Right: Security stats & feeds */}
        <aside>
          {/* Stats Bar Card */}
          <section className="card-obsidian">
            <h3 className="card-title">VULNERABILITY TYPES</h3>
            <div className="stats-grid">
              <div className="stat-bar-container">
                <div className="stat-bar-label">
                  <span>SSRF / Redirects</span>
                  <span>42%</span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div className="stat-bar-container">
                <div className="stat-bar-label">
                  <span>Command Injection</span>
                  <span>28%</span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill" style={{ width: "28%" }}></div>
                </div>
              </div>
              <div className="stat-bar-container">
                <div className="stat-bar-label">
                  <span>Logic & Auth Bypasses</span>
                  <span>20%</span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill" style={{ width: "20%" }}></div>
                </div>
              </div>
              <div className="stat-bar-container">
                <div className="stat-bar-label">
                  <span>DNS Rebinding</span>
                  <span>10%</span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill" style={{ width: "10%" }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Activity Logs Feed */}
          <section className="card-obsidian">
            <h3 className="card-title">SYSTEM ACTIVITY FEED</h3>
            <div className="system-feed">
              <div className="feed-item">
                <span className="feed-time">10:48</span>
                <span className="feed-text">Dashboard server loaded. Host: <strong>abdulb4s1t.qd.je</strong></span>
              </div>
              {writeups.slice(0, 2).map((w) => (
                <div key={w.id} className="feed-item">
                  <span className="feed-time">09:12</span>
                  <span className="feed-text">Ingested report <strong>{w.id}</strong> ({w.title})</span>
                </div>
              ))}
              <div className="feed-item">
                <span className="feed-time">08:00</span>
                <span className="feed-text">Vulnerability validation complete: <strong>14 patches verified</strong></span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
