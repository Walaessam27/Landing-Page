// Elements
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// Build navigation 
function nav() {
  const fragment = document.createDocumentFragment();
  sections.forEach((section) => {
    const navItem = document.createElement("li");
    navItem.textContent = section.getAttribute("data-nav");
    navItem.dataset.link = section.id;
    fragment.appendChild(navItem);
  });
  navbar.appendChild(fragment);
}

// Show only the clicked
function showwantedsection(event) {
  if (event.target.tagName === "LI") {
    const sectionId = event.target.dataset.link;

    // Remove active class from all buttons
    const navItems = navbar.querySelectorAll("li");
    navItems.forEach((item) => item.classList.remove("active"));

    event.target.classList.add("active");

    // Hide all sections and show only the clicked one
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });

    // Scroll to the clicked section
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Reset all when scrolling to the top
function reseting() {
  const rect = document.body.getBoundingClientRect();
  if (rect.top === 0) {
    sections.forEach((section) => {
      section.style.display = "block";
    });

    // Remove active class from all buttons
    const navItems = navbar.querySelectorAll("li");
    navItems.forEach((item) => item.classList.remove("active"));
  }
}

navbar.addEventListener("click", showwantedsection);
document.addEventListener("scroll", reseting);

nav();
