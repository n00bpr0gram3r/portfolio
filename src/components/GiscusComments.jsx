'use client';

import { useEffect, useRef } from 'react';

export default function GiscusComments() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear the container in case React mounts it twice (strict mode/HMR)
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', process.env.NEXT_PUBLIC_GISCUS_REPO || 'n00bpr0gram3r/portfolio');
    script.setAttribute('data-repo-id', process.env.NEXT_PUBLIC_GISCUS_REPO_ID || 'R_kgDOS5hXDw');
    script.setAttribute('data-category', process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'Announcements');
    script.setAttribute('data-category-id', process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || 'DIC_kwDOS5hXD84C_FIn');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="comments-container">
      <h3 className="card-title" style={{ borderBottom: '1px solid var(--border-dim)', paddingBottom: '12px', marginBottom: '24px' }}>
        SYSTEM COMMENTS & REACTION INTERFACE
      </h3>
      <div ref={containerRef} />
    </div>
  );
}
