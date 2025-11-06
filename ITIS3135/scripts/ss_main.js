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

// Dark Mode Surprise toggle
document.getElementById('creepButton').addEventListener('click', () => {
  document.body.style.backgroundColor = "black";
  const creepImage = document.getElementById('creepImage');
  creepImage.style.display = "block";
});

document.addEventListener('DOMContentLoaded', () => {
  displayGreeting();
  setupNavLinks();
});
