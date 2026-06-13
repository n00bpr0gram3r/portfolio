import Link from 'next/link';
import { getSortedWriteupsData } from '../../lib/writeups';

export default function WriteupsArchive() {
  const writeups = getSortedWriteupsData();

  return (
    <div>
      <header className="dashboard-header">
        <h1 className="dashboard-title">ALERT ARCHIVE</h1>
        <p className="dashboard-subtitle">All Disclosed Vulnerability Reports and Findings</p>
      </header>

      <section className="card-obsidian">
        <h3 className="card-title">VULNERABILITY RECORDS ({writeups.length})</h3>
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>No records found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
