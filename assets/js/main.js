(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden");
      document.body.classList.toggle("overflow-hidden", !isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Quote form: AJAX submit to Netlify Forms, with graceful fallback to a
  // normal POST if JavaScript or the fetch call fails for any reason.
  var form = document.getElementById("quoteForm");
  if (form) {
    // Language helpers (provided by i18n.js; harmless fallbacks if it is missing)
    var LG = window.LG || {};
    var tr = LG.t || function (s) { return s; };
    var setText = LG.setText || function (el, s) { el.textContent = s; };

    var status = document.getElementById("formStatus");

    function handleSubmit(e) {
      e.preventDefault();

      var submitBtn = form.querySelector('button[type="submit"]');
      // Ignore repeated clicks/Enter while a submission is in progress
      if (submitBtn && submitBtn.disabled) return;
      // Remember the real label once, so it can always be restored
      if (submitBtn && !submitBtn.dataset.label) {
        submitBtn.dataset.label = submitBtn.getAttribute("data-en") || submitBtn.textContent;
      }
      var originalLabel = submitBtn ? submitBtn.dataset.label : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        setText(submitBtn, "Sending…");
      }
      if (status) {
        status.removeAttribute("data-i18n");
        status.removeAttribute("data-en");
        status.textContent = "";
        status.className = "text-sm text-white/80";
      }

      var data = new FormData(form);
      var body = new URLSearchParams();
      data.forEach(function (value, key) {
        body.append(key, value);
      });

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Network response was not ok");
          form.reset();
          if (status) {
            setText(status, "Thank you! Your request has been sent — we'll be in touch shortly.");
            status.className = "text-sm text-gold font-semibold";
          }
        })
        .catch(function () {
          // Fall back to a standard form submission (works even without fetch support)
          form.removeEventListener("submit", handleSubmit);
          form.submit();
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            setText(submitBtn, originalLabel);
          }
        });
    }

    form.addEventListener("submit", handleSubmit);
  }
})();
