export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://abdulb4s1t.qd.je/sitemap.xml',
  };
}
