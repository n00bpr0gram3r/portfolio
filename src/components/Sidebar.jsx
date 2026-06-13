import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="brand-icon">🛡️</span>
          <h2>BBP MONITOR</h2>
        </div>
        
        <div className="system-status">
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span className="status-text">SYSTEM: OK</span>
          </div>
          <div className="status-item">
            <span className="status-indicator active"></span>
            <span className="status-text">AGENT: ACTIVE</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link href="/" className="nav-link">
            <span className="nav-icon">▰</span>
            Dashboard
          </Link>
          <Link href="/writeups" className="nav-link">
            <span className="nav-icon">▰</span>
            Alert Logs
          </Link>
          <Link href="/cv" className="nav-link">
            <span className="nav-icon">▰</span>
            Experience
          </Link>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="carbon-ad-placeholder">
          <span className="ad-tag">OPERATOR ENGAGEMENTS</span>
          <div className="ad-content-box">
            <p className="ad-title">Request Code Audit</p>
            <p className="ad-desc">Operator is available for private API, network, and source code security audits.</p>
            <a href="mailto:gemsabdul@gmail.com?subject=Audit%20Engagement%20Request" className="ad-link-btn">
              SECURE TARGET
            </a>
          </div>
        </div>
        <div className="sidebar-footer">
          <p>© 2026 Abdul Basit</p>
        </div>
      </div>
    </aside>
  );
}
