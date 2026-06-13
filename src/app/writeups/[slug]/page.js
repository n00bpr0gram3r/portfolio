import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getWriteupData, getSortedWriteupsData } from '@/lib/writeups';
import GiscusComments from '@/components/GiscusComments';

// Generate static params for all markdown writeups at build time
export async function generateStaticParams() {
  const writeups = getSortedWriteupsData();
  return writeups.map((w) => ({
    slug: w.slug,
  }));
}

export default async function WriteupPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const writeup = getWriteupData(slug);

  if (!writeup) {
    notFound();
  }

  // Parse markdown content to HTML
  const contentHtml = marked(writeup.content);

  return (
    <div className="writeup-container">
      <Link href="/writeups" className="writeup-back-btn">
        ← BACK TO ARCHIVE
      </Link>

      <header className="dashboard-header" style={{ marginTop: '16px' }}>
        <h1 className="dashboard-title">{writeup.title}</h1>
        <p className="dashboard-subtitle">Disclosed Vulnerability Log</p>
      </header>

      <div className="writeup-meta-card">
        <div className="writeup-meta-item">
          <span className="writeup-meta-label">REPORT ID</span>
          <span className="writeup-meta-val">{writeup.id}</span>
        </div>
        <div className="writeup-meta-item">
          <span className="writeup-meta-label">DATE INDEXED</span>
          <span className="writeup-meta-val">{writeup.date}</span>
        </div>
        <div className="writeup-meta-item">
          <span className="writeup-meta-label">SEVERITY LEVEL</span>
          <span className={`severity-badge ${writeup.severity}`} style={{ width: 'fit-content' }}>
            {writeup.severity}
          </span>
        </div>
        <div className="writeup-meta-item">
          <span className="writeup-meta-label">CATEGORY</span>
          <span className="writeup-meta-val">{writeup.category}</span>
        </div>
        <div className="writeup-meta-item">
          <span className="writeup-meta-label">RESOLUTION</span>
          <span className="writeup-meta-val" style={{ color: '#10b981' }}>{writeup.status}</span>
        </div>
        <div className="writeup-meta-item">
          <span className="writeup-meta-label">AUDITOR CODE</span>
          <span className="writeup-meta-val">ABDUL BASIT</span>
        </div>
      </div>

      <article 
        className="writeup-article"
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />

      <section className="sponsor-card">
        <div className="sponsor-info">
          <h4 className="sponsor-title">Support Independent Vulnerability Research</h4>
          <p className="sponsor-desc">
            Vulnerability hunting, audits, and disclosure coordination require significant time and expertise. Support my work or request a custom audit engagement.
          </p>
        </div>
        <div className="sponsor-actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a 
            href={process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL || "https://buymeacoffee.com/gemsabdul"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sponsor-btn"
          >
            ☕ Buy Me a Coffee
          </a>
          <a 
            href="mailto:gemsabdul@gmail.com?subject=Audit%20Engagement%20Request" 
            className="sponsor-btn"
            style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-dim)' }}
          >
            Request Audit
          </a>
        </div>
      </section>

      {/* Giscus Comments block */}
      <GiscusComments />
    </div>
  );
}
