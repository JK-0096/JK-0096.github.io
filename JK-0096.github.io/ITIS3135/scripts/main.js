function displayGreeting() {
    const greetingElement = document.createElement('p');
    greetingElement.style.fontSize = "1.5rem";
    greetingElement.style.color = "#0077cc";
    
    const mainContent = document.querySelector('main');
    mainContent.appendChild(greetingElement);
}

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

document.addEventListener('DOMContentLoaded', () => {
    displayGreeting(); 
    setupNavLinks();
});

document.body.addEventListener('click', () => {
    changeBackgroundColor('#f5f9ff'); 
}); 
