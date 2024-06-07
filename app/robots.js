export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/records/',
        '/analysis/',
        '/settings/',
      ],
    },
    sitemap: 'https://finance-tracker.iistw.com/sitemap.xml',
  }
}