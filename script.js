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

  // Create an intersection observer to monitor when the section comes into view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the class 'show' when the section is in view
          projectsSection.classList.add("show");
        } else {
          // Optionally, remove the 'show' class when the section is out of view, to re-trigger animation
          projectsSection.classList.remove("show");
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  // Start observing the Projects Section
  observer.observe(projectsSection);
}

// Trigger animations on page load and scroll
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("splash-screen").classList.add("show");

  // Wait for the splash screen to disappear before showing the content
  setTimeout(() => {
    document.getElementById("splash-screen").classList.remove("show");
    document.body.classList.remove("no-scroll"); // Re-enable scrolling after splash screen
    document.getElementById("main-content").classList.remove("hidden"); // Show the main content
  }, 2000); // Hide splash screen after 2 seconds

  // Start the observer for Projects Section
  animateProjectsSection();
});

//For button
const button = document.getElementById("Downloa-cv-button");
button.addEventListener("click", DownloadCV);

function DownloadCV() {
  // console.log("Button is cliked");
  //here we will write the code for download cv
}
window.addEventListener("scroll", animateOnScroll);
