/**
 * REQ-SCHEMA-01 + REQ-SCHEMA-09. /privacy-policy/ and /terms/ carry a WebPage
 * and a BreadcrumbList that reference #org and #website by @id, but neither
 * node is defined on those pages — an orphaned schema island, and the only two
 * pages on the site without an Organization. Copy the canonical Organization
 * and WebSite nodes from /about/, which the other eight pages already share.
 */
import fs from 'node:fs';

const src = fs.readFileSync('about/index.html', 'utf8');
const graph = JSON.parse(src.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const org = graph.find((n) => String(n['@type']).includes('Organization'));
const site = graph.find((n) => n['@type'] === 'WebSite');
if (!org || !site) { console.error('could not find Organization/WebSite in about/'); process.exit(1); }

for (const page of ['privacy-policy', 'terms']) {
  const f = `${page}/index.html`;
  let h = fs.readFileSync(f, 'utf8');
  const m = h.match(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/);
  const parsed = JSON.parse(m[2]);
  if (parsed['@graph'].some((n) => String(n['@type']).includes('Organization'))) { console.log(`  ${page}: already has Organization`); continue; }

  parsed['@graph'].push(org, site);
  const rebuilt = m[1] + '\n  ' + JSON.stringify(parsed, null, 2).split('\n').join('\n  ') + '\n  ' + m[3];
  h = h.replace(m[0], rebuilt);
  fs.writeFileSync(f, h, 'utf8');

  const check = JSON.parse(fs.readFileSync(f, 'utf8').match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const ids = new Set(check.map((n) => n['@id']).filter(Boolean));
  const refs = [...JSON.stringify(check).matchAll(/"@id":"(https:\/\/[^"]+#[^"]+)"/g)].map((x) => x[1]);
  const dangling = refs.filter((r) => !ids.has(r));
  console.log(`  ${page}: nodes = ${check.map((n) => n['@type']).join(', ')}  |  dangling @id refs: ${dangling.length}`);
}
