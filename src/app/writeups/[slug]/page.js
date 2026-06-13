import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getWriteupData, getSortedWriteupsData } from '@/lib/writeups';
import GiscusComments from '@/components/GiscusComments';
import SponsorCard from '@/components/SponsorCard';

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

      {/* Sponsor Options (Ko-fi & UPI) */}
      <SponsorCard />

      {/* Giscus Comments block */}
      <GiscusComments />
    </div>
  );
}
