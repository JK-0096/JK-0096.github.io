// Easter egg functionality
document.addEventListener("DOMContentLoaded", () => {
  const creepyButton = document.getElementById("creepyButton");
  const creepyOverlay = document.getElementById("creepyOverlay");

  if (creepyButton && creepyOverlay) {
    creepyButton.addEventListener("click", () => {
      creepyOverlay.style.display = "block";

      setTimeout(() => {
        creepyOverlay.style.display = "none";
      }, 4000); // overlay lasts 4 seconds
    });
  }
});
