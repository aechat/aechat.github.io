import fs from "node:fs";

import path from "node:path";

import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/client/index.html"), "utf8");

const {render} = await import("./dist/server/EntryServer.js");

const routesToPrerender = ["/", "/aefaq", "/prfaq", "/psfaq", "/rules", "/links", "/404"];

function extractMetadata(html, helmet) {
  if (helmet) {
    return {
      headTags: `${helmet.meta.toString()}${helmet.link.toString()}`,
      pageHtml: html,
      titleTag: helmet.title.toString(),
    };
  }

  let pageHtml = html;

  let titleTag = "";

  const titleMatch = pageHtml.match(/<title>([^<]*)<\/title>/);

  if (titleMatch) {
    titleTag = titleMatch[0];
    pageHtml = pageHtml.replace(titleTag, "");
  }

  const allMeta = pageHtml.match(/<meta\b[^>]*\/?>/gi) || [];

  const metaTags = allMeta.filter(
    (tag) => tag.includes("name=") || tag.includes("property=")
  );

  const allLinks = pageHtml.match(/<link\b[^>]*\/?>/gi) || [];

  const linkTags = allLinks.filter((tag) => tag.includes('rel="icon"'));

  const headTags = [...metaTags, ...linkTags].join("");

  for (const tag of [...metaTags, ...linkTags]) {
    pageHtml = pageHtml.replace(tag, "");
  }

  return {
    headTags,
    pageHtml,
    titleTag,
  };
}

function applyPageTransforms(html, url) {
  let transformed = html;

  if (url.endsWith("404")) {
    transformed = transformed.replace(
      '<meta name="prerender-status-code" content="200">',
      '<meta name="prerender-status-code" content="404">'
    );
  }

  if (["/aefaq", "/prfaq", "/psfaq"].includes(url)) {
    transformed = transformed.replaceAll("<details", "<details open");
  }

  return transformed;
}

(async () => {
  for (const url of routesToPrerender) {
    const context = {};

    const {html} = await render(url, context);

    const {headTags, pageHtml, titleTag} = extractMetadata(html, context.helmet);

    let htmlWithMeta = template;

    if (titleTag) {
      htmlWithMeta = htmlWithMeta.replace(/<title>.*<\/title>/, titleTag);
    }

    if (headTags) {
      htmlWithMeta = htmlWithMeta.replace("</head>", `${headTags}</head>`);
    }

    htmlWithMeta = htmlWithMeta.replace("<!--app-html-->", pageHtml);
    htmlWithMeta = applyPageTransforms(htmlWithMeta, url);

    const filePath = toAbsolute(
      url === "/" ? "dist/client/index.html" : `dist/client${url}.html`
    );

    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, {recursive: true});
    }

    fs.writeFileSync(filePath, htmlWithMeta);
    console.log(`prerendered: ${url} to ${path.relative(__dirname, filePath)}`);
  }
})();
