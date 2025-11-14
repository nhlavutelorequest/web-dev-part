// script.js
document.addEventListener("DOMContentLoaded", () => {
  /* -----------------------------
     🔍 Service Search Functionality
  ----------------------------- */
  const searchInput = document.getElementById("serviceSearch");
  const serviceCards = document.querySelectorAll(".service-card");
  const noResultsMessage = document.getElementById("noResults");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      let matches = 0;

      serviceCards.forEach((card) => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        const isMatch = title.includes(query) || description.includes(query);

        if (isMatch) {
          card.style.display = "block";
          matches++;
        } else {
          card.style.display = "none";
        }
      });

      noResultsMessage.style.display =
        matches === 0 && query !== "" ? "block" : "none";
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        serviceCards.forEach((card) => (card.style.display = "block"));
        noResultsMessage.style.display = "none";
      }
    });
  }

  /* -----------------------------
     ❓ FAQ Accordion Functionality
  ----------------------------- */
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentlyActive = document.querySelector(".accordion-item.active");

      // Close any open accordion before opening another
      if (currentlyActive && currentlyActive !== header.parentElement) {
        currentlyActive.classList.remove("active");
        currentlyActive.querySelector(".accordion-content").style.maxHeight =
          null;
      }

      const item = header.parentElement;
      const content = header.nextElementSibling;

      if (item.classList.contains("active")) {
        item.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });

    // Enable keyboard accessibility
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });
  });

  const form = document.getElementById("enquiryForm");
  const orgType = document.getElementById("orgType");
  const npoOptions = document.getElementById("npoOptions");
  const successMessage = document.getElementById("successMessage");

  // Show NPO options only if "NPO" is selected
  if (orgType) {
    orgType.addEventListener("change", () => {
      if (orgType.value === "npo") {
        npoOptions.style.display = "block";
      } else {
        npoOptions.style.display = "none";
      }
    });
  }

  // Handle form submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // stop page reload

      // Optionally: validate data manually here before showing success

      // Simulate a successful submission
      successMessage.style.display = "block";
      successMessage.classList.add("show");

      // Clear form
      form.reset();
      npoOptions.style.display = "none";

      // Hide message after a few seconds
      setTimeout(() => {
        successMessage.classList.remove("show");
        successMessage.style.display = "none";
      }, 8000);
    });
  }

  const contactForm = document.getElementById("contactForm");
  const emailSuccessMessage = document.getElementById("emailSuccessMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent page reload

      // Optionally: perform validation or send data to a server here

      // Show success message
      emailSuccessMessage.style.display = "block";
      emailSuccessMessage.classList.add("show");

      // Clear form fields
      contactForm.reset();

      // Automatically hide message after 4 seconds
      setTimeout(() => {
        emailSuccessMessage.classList.remove("show");
        emailSuccessMessage.style.display = "none";
      }, 4000);
    });
  }
});
