import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Again Coffee homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<title>Again Coffee/);
  assert.match(html, /HELLO FROM AGAIN/);
  assert.doesNotMatch(html, /ROASTED THIS WEEK|This season at Again/);
  assert.match(html, /Coffee for/);
  assert.match(html, /COME BY FOR COFFEE/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps the finished site responsive and free of starter dependencies", async () => {
  const [page, dynamicMoments, optimizedImage, dynamicMomentsCss, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/DynamicMoments.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/OptimizedImage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/dynamic-moments.module.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Again/);
  assert.match(page, /id="story"/);
  assert.doesNotMatch(page, /id="coffee"|coffee-card|coffee-tin/);
  assert.match(page, /id="visit"/);
  assert.match(page, /DynamicMoments/);
  assert.match(page, /href="#moments-gallery"/);
  assert.match(page, /again-jaffle-prep/);
  assert.match(page, /again-storefront/);
  assert.match(page, /again-interior-display/);
  assert.match(dynamicMoments, /again-rabbit-latte/);
  assert.match(dynamicMoments, /again-cinnamon-cloud/);
  assert.match(dynamicMoments, /again-cake-table/);
  assert.match(optimizedImage, /srcSet/);
  assert.match(optimizedImage, /loading=\{eager \? "eager" : "lazy"\}/);
  assert.match(dynamicMoments, /setInterval/);
  assert.match(dynamicMomentsCss, /prefers-reduced-motion: reduce/);
  assert.match(layout, /lang="en"/);
  assert.doesNotMatch(layout, /next\/font/);
  assert.match(layout, /again-coffee-og\.jpg/);
  assert.match(css, /@font-face/);
  assert.match(css, /cormorant-garamond-regular\.woff2/);
  assert.match(css, /montserrat-latin\.woff2/);
  assert.match(css, /hero-image/);
  assert.match(css, /@media \(max-width: 1020px\)/);
  assert.match(css, /@media \(max-width: 680px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /hero-breathe/);
  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
