function Sitemap() {}

export async function getServerSideProps({ res }) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <!-- Paste your entire XML content here -->
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.sevenunique.com/</loc>
      <lastmod>2025-05-06T07:58:43+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <!-- Rest of your URLs -->
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;