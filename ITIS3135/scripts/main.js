// 1. Dynamic greeting functionality
function displayGreeting() {
    const greetingElement = document.createElement('p');
    greetingElement.id = 'dynamic-greeting';
    greetingElement.style.fontSize = '1.5rem';
    greetingElement.style.color = '#0077cc';
    greetingElement.textContent = 'Welcome to my ITIS3135 Website';

    const greetingContainer = document.getElementById('greeting-container');
    if (greetingContainer) {
        greetingContainer.appendChild(greetingElement);
    }
}

// 2. Change background color dynamically
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// 3. Footer nav hover interaction
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

// 4. Optional Easter egg overlay toggle
function setupEasterEgg() {
    const btn = document.getElementById('easter-egg');
    const overlay = document.getElementById('overlay');

    if (btn && overlay) {
        btn.addEventListener('click', () => {
            overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        });
    }
}

// DOMContentLoaded initialization
document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();
    setupNavLinks();
    setupEasterEgg();

    // Change background color on any click
    document.body.addEventListener('click', () => {
        changeBackgroundColor('#f5f9ff');
    });
});
