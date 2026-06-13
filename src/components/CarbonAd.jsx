'use client';

import { useEffect, useRef } from 'react';

export default function CarbonAd() {
  const containerRef = useRef(null);

  const serveId = process.env.NEXT_PUBLIC_CARBON_SERVE;
  const placementId = process.env.NEXT_PUBLIC_CARBON_PLACEMENT;

  useEffect(() => {
    // Only fetch and run Carbon Ads script if both serve and placement IDs are configured
    if (!serveId || !placementId) {
      return;
    }

    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = `//cdn.carbonads.com/carbon.js?serve=${serveId}&placement=${placementId}`;
    script.id = '_carbonads_js';
    script.async = true;

    containerRef.current.appendChild(script);
  }, [serveId, placementId]);

  // Fallback layout if Carbon Ads is not configured
  if (!serveId || !placementId) {
    return (
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
    );
  }

  // Wrapper container where the Carbon script will inject the advertisement (#carbonads)
  return <div ref={containerRef} id="carbon-ad-container" style={{ minHeight: '130px' }} />;
}
