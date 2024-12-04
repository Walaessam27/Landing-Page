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

// click and scrolling
function showSection(event) {
  if (event.target.tagName === "LI") {
    const sectionId = event.target.dataset.link;

    // scroll to wanted section
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });

    event.preventDefault();
  }
}

// update active states on scrolling
function scrolling() {
  let thisidd = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -200 && rect.top <= 200) {
      thisidd = section.id;
    }
  });

  // Update active state
  const navsections = navbar.querySelectorAll("li");
  navsections.forEach((item) => {
    if (item.dataset.link === thisidd) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function initializePage() {
  nav(); 
  navbar.addEventListener("click", showSection); 
    window.addEventListener("scroll", scrolling); 
}

initializePage();
