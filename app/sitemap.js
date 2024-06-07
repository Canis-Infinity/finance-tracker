export default async function sitemap() {
  const baseUrl = 'https://finance-tracker.iistw.com';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: `${baseUrl}/records`,
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: `${baseUrl}/analysis`,
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: `${baseUrl}/settings`,
      lastModified: new Date(),
      changeFrequency: 'always',
    },
  ];
}
