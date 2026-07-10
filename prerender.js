import fs from "node:fs";

import path from "node:path";

import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/client/index.html"), "utf8");

const {render} = await import("./dist/server/EntryServer.js");

const routesToPrerender = ["/", "/aefaq", "/prfaq", "/psfaq", "/rules", "/links", "/404"];

(async () => {
  for (const url of routesToPrerender) {
    const context = {};

    const {html} = await render(url, context);

    const {helmet} = context;

    let htmlWithMeta = template
      .replace(/<title>.*<\/title>/, `${helmet.title.toString()}`)
      .replace(/<\/head>/, `${helmet.meta.toString()}${helmet.link.toString()}</head>`)
      .replace("<!--app-html-->", html);

    if (url.endsWith("404")) {
      htmlWithMeta = htmlWithMeta.replace(
        '<meta name="prerender-status-code" content="200">',
        '<meta name="prerender-status-code" content="404">'
      );
    }

    if (["/aefaq", "/prfaq", "/psfaq"].includes(url)) {
      htmlWithMeta = htmlWithMeta.replaceAll("<details", "<details open");
    }

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
