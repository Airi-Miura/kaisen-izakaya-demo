(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("globalNav");
  var backToTop = document.getElementById("backToTop");
  var modal = document.getElementById("reservationModal");
  var modalOpenButtons = document.querySelectorAll(".js-open-modal");
  var modalCloseElements = document.querySelectorAll("[data-close-modal]");
  var faqItems = document.querySelectorAll(".faq-list details");
  var lastFocusedElement = null;

  function updateHeader() {
    if (window.scrollY > 24) {
      header.classList.add("scrolled");
      backToTop.classList.add("visible");
    } else {
      header.classList.remove("scrolled");
      backToTop.classList.remove("visible");
    }
  }

  function closeNavigation() {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  function openModal() {
    lastFocusedElement = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    closeNavigation();

    var closeButton = modal.querySelector(".modal-close");
    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  navToggle.addEventListener("click", function () {
    var isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      closeNavigation();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      var targetElement = document.querySelector(targetId);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      var headerOffset = header.offsetHeight + 12;
      var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });

  var revealTargets = document.querySelectorAll(".reveal");
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14
  });

  revealTargets.forEach(function (target) {
    revealObserver.observe(target);
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  modalOpenButtons.forEach(function (button) {
    button.addEventListener("click", openModal);
  });

  modalCloseElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      closeModal();
    });
  });

  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) {
        return;
      }

      faqItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (modal.classList.contains("is-open")) {
        closeModal();
      }

      if (document.body.classList.contains("nav-open")) {
        closeNavigation();
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (!document.body.classList.contains("nav-open")) {
      return;
    }

    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      closeNavigation();
    }
  });
})();
