// Elements
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// Build navigation dynamically
function nav() {
  const fragment = document.createDocumentFragment();
  sections.forEach((section, index) => {
    const navItem = document.createElement("li");
    navItem.textContent = section.getAttribute("data-nav");
    navItem.dataset.link = section.id;

    // Section 1 button as active by default
    if (index === 0) {
      navItem.classList.add("active");
    }

    fragment.appendChild(navItem);
  });
  navbar.appendChild(fragment);
}

// Show the clicked section
function showSection(event) {
  if (event.target.tagName === "LI") {
    const sectionId = event.target.dataset.link;

    // Remove active class from all nav buttons
    const navItems = navbar.querySelectorAll("li");
    navItems.forEach((item) => item.classList.remove("active"));

    // Highlight the clicked
    event.target.classList.add("active");

    // Hide all show the clicked 
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block"; 
        section.style.opacity = "1";
        section.style.visibility = "visible";
      } else {
        section.style.display = "none"; // Hide other 
      }
    });

    // Scroll smoothly to the selected section
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
}

//section in view as the user scrolls
function scrolling() {
  let currentSectionId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });

  if (currentSectionId) {
    const navItems = navbar.querySelectorAll("li");
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.dataset.link === currentSectionId) {
        item.classList.add("active");
      }
    });
  }
}


function initializePage() {
  sections.forEach((section, index) => {
    if (index === 0) {
      section.style.display = "block"; 
      section.style.opacity = "1";
      section.style.visibility = "visible";
    } else {
      section.style.display = "none"; 
    }
  });
}


navbar.addEventListener("click", showSection);
window.addEventListener("scroll", scrolling);

initializePage();
nav();
