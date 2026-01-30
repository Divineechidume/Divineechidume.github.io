/**
 * Minimal script for Divinee Chidume personal site.
 * - Smooth scroll for in-page anchor links
 * - Resources/Writing content is managed in index.html
 */
(function () {
  "use strict";

  // Smooth scroll when clicking nav or hero links to section anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
