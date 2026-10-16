(function () {
  "use strict";

  function placement(anchor) {
    var node = anchor;

    while (node && node !== document.documentElement) {
      if (node.tagName === "HEADER" || (node.classList && node.classList.contains("topbar"))) {
        return "header";
      }
      if (node.tagName === "FOOTER") {
        return "footer";
      }
      if (node.tagName === "MAIN") {
        return "body";
      }
      node = node.parentElement;
    }

    return "body";
  }

  document.addEventListener("click", function (event) {
    var anchor = event.target && event.target.closest ? event.target.closest("a") : null;
    var href;

    if (!anchor || typeof window.gtag !== "function") {
      return;
    }

    href = anchor.getAttribute("href") || "";

    if (href.slice(0, 4).toLowerCase() === "tel:") {
      window.gtag("event", "phone_click", {
        link_url: anchor.href,
        page_path: window.location.pathname,
        placement: placement(anchor),
        transport_type: "beacon"
      });
      return;
    }

    if (href.slice(0, 7).toLowerCase() === "mailto:") {
      window.gtag("event", "email_click", {
        page_path: window.location.pathname,
        transport_type: "beacon"
      });
    }
  });
}());
