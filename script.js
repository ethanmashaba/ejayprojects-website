const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const quoteForm = document.getElementById("quoteForm");
const formNote = document.getElementById("formNote");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const subject = encodeURIComponent("Quote Request - EJay Projects Website");
    const body = encodeURIComponent(
`Good day EJay Projects,

Please assist with the following quote request:

Full Name: ${data.get("name") || ""}
Company: ${data.get("company") || ""}
Email: ${data.get("email") || ""}
Phone / WhatsApp: ${data.get("phone") || ""}
Service Required: ${data.get("service") || ""}
Project Location: ${data.get("location") || ""}
Estimated Start Date: ${data.get("startDate") || ""}

Brief Scope of Work:
${data.get("message") || ""}

Note: I will attach any RFQ, tender document, drawings or supporting files to this email if applicable.

Regards`
    );
    window.location.href = `mailto:admin@ejayprojects.com?subject=${subject}&body=${body}`;
    if (formNote) formNote.textContent = "Your email app should open. Please attach any RFQ or drawings before sending.";
  });
}
