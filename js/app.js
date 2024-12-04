// Elements
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// Build navigation dynamically
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

// Click and scrolling
function showSection(event) {
  if (event.target.tagName === "LI") {
    const sectionId = event.target.dataset.link;
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });

    event.preventDefault();
  }
}

// Update active states on scrolling
function scrolling() {
  let sectionId = ""; 
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -200 && rect.top <= 200) {
      sectionId = section.id; 
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  // Update active state in navbar
  const navsections = navbar.querySelectorAll("li");
  navsections.forEach((item) => {
    if (item.dataset.link === sectionId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function initializePage() {
  nav(); // Build navbar
  navbar.addEventListener("click", showSection);
  window.addEventListener("scroll", scrolling); 
}

initializePage();
