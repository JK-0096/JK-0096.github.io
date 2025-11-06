// Function to show the greeting
function displayGreeting() {
  const greetingElement = document.createElement('p');
  greetingElement.style.fontSize = "1.5rem";
  greetingElement.style.color = "#0077cc";

  const mainContent = document.querySelector('main');
  mainContent.appendChild(greetingElement);
}

// Function to toggle background color and reveal image
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Setup hover effect for footer nav links
function setupNavLinks() {
  const navLinks = document.querySelectorAll('footer nav a');
  navLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#ffffff'; 
    });

    link.addEventListener('mouseout', () => {
      link.style.color = '#cce6ff'; 
    });
  });
}

// Highlight the current page in the header navigation
function highlightCurrentPage() {
  const headerLinks = document.querySelectorAll('header nav a');
  headerLinks.forEach(link => {
    // Compare link href with current page URL
    if (link.href === window.location.href) {
      link.classList.add('current');
    }
  });
}

// Dark Mode Surprise toggle
document.getElementById('creepButton')?.addEventListener('click', () => {
  document.body.style.backgroundColor = "black";
  const creepImage = document.getElementById('creepImage');
  if (creepImage) creepImage.style.display = "block";
});

// Run functions after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  displayGreeting();
  setupNavLinks();
  highlightCurrentPage();
});
