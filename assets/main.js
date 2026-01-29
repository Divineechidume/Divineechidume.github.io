/* Minimal JS: navigation polish + writing data rendering */

const prefersReducedMotion =
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

function smoothScrollToHash(hash) {
  if (!hash || hash.length < 2) return;
  const id = decodeURIComponent(hash.slice(1));
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

document.addEventListener("click", (e) => {
  const a = e.target?.closest?.("a[href^='#']");
  if (!a) return;
  const href = a.getAttribute("href");
  if (!href || href === "#") return;

  const targetId = decodeURIComponent(href.slice(1));
  if (!document.getElementById(targetId)) return;

  e.preventDefault();
  history.pushState(null, "", href);
  smoothScrollToHash(href);
});

window.addEventListener("popstate", () => smoothScrollToHash(location.hash));

// Writing entries (edit freely)
const WRITING = [
  {
    title: "Trust is infrastructure, not a vibe",
    date: "2026",
    tag: "Trust",
    blurb:
      "How credibility is built through systems, incentives, and legible accountability — not tone.",
    href: "#contact",
  },
  {
    title: "AI judgment: what we delegate, what we keep",
    date: "2026",
    tag: "AI & Judgment",
    blurb:
      "A framework for deciding where models help — and where humans remain the point of the system.",
    href: "#contact",
  },
  {
    title: "Women shaping invisible systems",
    date: "2026",
    tag: "Power",
    blurb:
      "Why agency lives upstream: in standards, defaults, and the rules people don’t notice until they do.",
    href: "#contact",
  },
];

function renderWriting() {
  const list = document.querySelector("[data-writing-list]");
  if (!list) return;

  list.innerHTML = "";

  for (const item of WRITING) {
    const a = document.createElement("a");
    a.className = "essay";
    a.href = item.href || "#";

    const left = document.createElement("div");

    const title = document.createElement("p");
    title.className = "essay__title";
    title.textContent = item.title;

    const blurb = document.createElement("p");
    blurb.style.margin = "8px 0 0";
    blurb.style.color = "color-mix(in oklab, var(--ink) 74%, transparent)";
    blurb.style.lineHeight = "1.6";
    blurb.textContent = item.blurb;

    left.appendChild(title);
    left.appendChild(blurb);

    const meta = document.createElement("div");
    meta.className = "essay__meta";

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item.tag;

    const date = document.createElement("span");
    date.textContent = item.date;

    meta.appendChild(tag);
    meta.appendChild(date);

    a.appendChild(left);
    a.appendChild(meta);

    list.appendChild(a);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    renderWriting();
    if (location.hash) smoothScrollToHash(location.hash);
  });
} else {
  renderWriting();
  if (location.hash) smoothScrollToHash(location.hash);
}
