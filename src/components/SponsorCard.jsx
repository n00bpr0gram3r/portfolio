'use client';

import { useState } from 'react';

export default function SponsorCard() {
  const [showUpi, setShowUpi] = useState(false);
  const [copied, setCopied] = useState(false);

  const kofiUrl = process.env.NEXT_PUBLIC_KO_FI_URL || 'https://ko-fi.com/gemsabdul';
  const upiId = process.env.NEXT_PUBLIC_UPI_ID || 'gemsabdul@okaxis';
  const operatorName = 'Abdul Basit';

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // UPI payment URI structure for launching mobile apps directly
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(operatorName)}&cu=INR&tn=Security%20Sponsorship`;

  return (
    <section className="sponsor-card" style={{ display: 'block' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
        <div className="sponsor-info" style={{ flex: 1, minWidth: '280px' }}>
          <h4 className="sponsor-title">Support Independent Vulnerability Research</h4>
          <p className="sponsor-desc">
            Vulnerability audits and disclosure coordination require significant time and expertise. Support my work or request a custom engagement.
          </p>
        </div>
        <div className="sponsor-actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}>
          <a 
            href={kofiUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sponsor-btn"
            style={{ backgroundColor: '#29abe2', color: '#ffffff', borderColor: '#29abe2' }}
          >
            ☕ Support on Ko-fi
          </a>
          <button 
            onClick={() => setShowUpi(!showUpi)} 
            className="sponsor-btn"
            style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-dim)' }}
          >
            ⚡ Pay via UPI (India)
          </button>
        </div>
      </div>

      {showUpi && (
        <div className="upi-details-box" style={{
          marginTop: '20px',
          padding: '16px',
          backgroundColor: 'var(--bg-primary)',
          border: '1px dashed var(--border-dim)',
          borderRadius: '6px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ color: 'var(--text-dim)' }}>UPI ID:</span>{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{upiId}</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={handleCopy}
                style={{
                  background: 'none',
                  border: '1px solid var(--border-dim)',
                  color: 'var(--text-secondary)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {copied ? '✓ Copied' : 'Copy ID'}
              </button>
              
              <a 
                href={upiDeepLink}
                style={{
                  border: '1px solid var(--border-dim)',
                  color: '#10b981',
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                Pay Direct (Mobile)
              </a>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            Note: Mobile deep-links resolve automatically if clicked on a smartphone with a UPI payment app installed (GPay, PhonePe, Paytm, BHIM, etc.).
          </div>
        </div>
      )}
    </section>
  );
}
