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

    //Section 1 button as active by default
    if (index === 0) {
      navItem.classList.add("active");
    }

    fragment.appendChild(navItem);
  });
  navbar.appendChild(fragment);
}

// Show only the clicked section
function showSection(event) {
  if (event.target.tagName === "LI") {
    const sectionId = event.target.dataset.link;

    // Remove active class from all nav buttons
    const navItems = navbar.querySelectorAll("li");
    navItems.forEach((item) => item.classList.remove("active"));

    // Highlight the clicked button
    event.target.classList.add("active");

    // Hide all sections and show only the clicked one
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block"; // Show the clicked section
        section.style.opacity = "1"; // Ensure it's visible
        section.style.visibility = "visible"; // Ensure visibility
      } else {
        section.style.display = "none"; // Hide other sections
      }
    });

    // Scroll smoothly to the selected section
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Initialize the page with only Section 1 visible
function initializePage() {
  sections.forEach((section, index) => {
    if (index === 0) {
      section.style.display = "block"; // Show Section 1
      section.style.opacity = "1";
      section.style.visibility = "visible";
    } else {
      section.style.display = "none"; // Hide all other sections
    }
  });
}


navbar.addEventListener("click", showSection);


initializePage();
nav();
