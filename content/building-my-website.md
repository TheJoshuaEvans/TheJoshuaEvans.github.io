# Building My Personal Website

This site is built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies beyond a single markdown renderer.

---

## The Stack

- **HTML/CSS/JS** only. No React, no Vue, no bundler.
- **[marked.js](https://marked.js.org/)** for rendering markdown, self-hosted in `public/js/`.
- **GitHub Pages** for hosting — push to `master` and it's live.

---

## The Markdown Trick

Content is written as `.md` files and fetched client-side. Clicking a sidebar link fetches the file, runs it through `marked.parse()`, and swaps the content in — no page reload.

For the home page, a synchronous `<script type="text/markdown">` tag was originally used so the browser never sees raw markdown before the first paint. Browsers silently ignore any `<script>` with an unknown `type`, which makes it a handy inert data container.

---

## More to come!
