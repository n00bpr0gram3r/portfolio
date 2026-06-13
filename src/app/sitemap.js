import { getSortedWriteupsData } from '@/lib/writeups';

export default async function sitemap() {
  const baseUrl = 'https://abdulb4s1t.qd.je';

  // Base routes
  const routes = ['', '/writeups', '/cv'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic writeup routes parsed from markdown files
  const writeups = getSortedWriteupsData().map((w) => ({
    url: `${baseUrl}/writeups/${w.slug}`,
    lastModified: w.date || new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...routes, ...writeups];
}
