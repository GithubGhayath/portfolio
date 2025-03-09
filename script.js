// Function to add animation when in view
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-left, .animate-right");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      element.classList.add("show");
    } else {
      element.classList.remove("show"); // Reset when scrolled out
    }
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Function to trigger the animation for Projects Section when in view
function animateProjectsSection() {
  const projectsSection = document.getElementById("projects");

  if (!projectsSection) return; // Safety check in case the element is missing

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsSection.classList.add("show");
        } else {
          projectsSection.classList.remove("show");
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  observer.observe(projectsSection);
}

// Trigger animations on page load and scroll
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("splash-screen").classList.add("show");

  // Wait for the splash screen to disappear before showing the content
  setTimeout(() => {
    document.getElementById("splash-screen").classList.remove("show");
    document.body.classList.remove("no-scroll"); // Re-enable scrolling after splash screen
    document.getElementById("main-content").classList.remove("hidden"); // Show main content

    // Trigger animations and observers once content is revealed
    animateOnScroll();
    animateProjectsSection();
  }, 2000); // Hide splash screen after 2 seconds
});

// For Download CV button
const button = document.getElementById("Download-cv-button");
if (button) {
  button.addEventListener("click", DownloadCV);
}

function DownloadCV() {
  console.log("Download CV button clicked");
  // Code for downloading CV will go here
}

// Trigger animations on scroll
window.addEventListener("scroll", animateOnScroll);
