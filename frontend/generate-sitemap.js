import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

async function generateSitemap() {
  const links = [
    { url: "/", changefreq: "monthly", priority: 1.0 },
    { url: "/projects", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "yearly", priority: 0.5 },
    { url: "/about", changefreq: "yearly", priority: 0.5 },
  ];

  const stream = new SitemapStream({ hostname: "https://k3xxv1n.com" });

  // Aquí en vez de forEach usamos un for..of
  for (const link of links) {
    stream.write(link);
  }

  stream.end();

  const xml = (await streamToPromise(stream)).toString();
  writeFileSync("./public/sitemap.xml", xml);

  console.log("✅ Sitemap generado en /public/sitemap.xml");
}

generateSitemap();