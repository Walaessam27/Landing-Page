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


function showSection(event) {
  if (event.target.tagName === "LI") {
    const sectionId = event.target.dataset.link;

    // Remove active class from all nav buttons
    const navItems = navbar.querySelectorAll("li");
    navItems.forEach((item) => item.classList.remove("active"));

    // Highlight the clicked button
    event.target.classList.add("active");

    // Hide all  and show the wanted
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block"; // Show the wanted section
        section.style.opacity = "1";
        section.style.visibility = "visible";
      } else {
        section.style.display = "none"; // Hide  sections
      }
    });

    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Function for scrolling 
function scrolling() {
  let currentSectionId = "";
  let smallestOffset = window.innerHeight; 

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offset = Math.abs(rect.top);

    if (offset < smallestOffset) {
      smallestOffset = offset;
      currentSectionId = section.id;
    }
  });

  if (currentSectionId) {
    // Show the wanted section
    sections.forEach((section) => {
      if (section.id === currentSectionId) {
        section.style.display = "block"; // Show section when it's in view
        section.style.opacity = "1";
        section.style.visibility = "visible";
      } else {
        section.style.display = "none"; // Hide sections
      }
    });
    const navItems = navbar.querySelectorAll("li");
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.dataset.link === currentSectionId) {
        item.classList.add("active");
      }
    });
  }
}

//  the page with only Section 1 
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
