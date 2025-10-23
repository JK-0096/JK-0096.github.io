document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const addCourseBtn = document.getElementById("addCourse");
  const clearBtn = document.getElementById("clear");
  const coursesDiv = document.getElementById("courses");

  // Prevent default submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayResults();
  });

  // Add a course
  addCourseBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("course");
    div.innerHTML = `
      <label>Department: <input type="text" name="dept[]" required></label>
      <label>Number: <input type="text" name="number[]" required></label>
      <label>Name: <input type="text" name="name[]" required></label>
      <label>Reason: <input type="text" name="reason[]" required></label>
      <button type="button" class="deleteCourse">Delete</button>
    `;
    coursesDiv.appendChild(div);
  });

  // Delete course
  coursesDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteCourse")) {
      e.target.parentElement.remove();
    }
  });

  // Clear form
  clearBtn.addEventListener("click", () => {
    Array.from(form.querySelectorAll("input, textarea")).forEach((input) => {
      if (input.type !== "file") input.value = "";
    });
  });

  // Preview image
  const picInput = document.getElementById("picture");
  const preview = document.getElementById("preview");
  picInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) preview.src = URL.createObjectURL(file);
  });

  // Display results
  function displayResults() {
    const data = new FormData(form);
    let html = `<h2>Introduction Form</h2><div class="result">`;

    for (const [key, value] of data.entries()) {
      html += `<p><strong>${key}:</strong> ${value}</p>`;
    }

    html += `<img src="${preview.src}" width="150" alt="User Image">`;
    html += `<br><button id="resetView">Reset Form</button></div>`;

    document.body.innerHTML = html;

    // Reset link
    document.getElementById("resetView").addEventListener("click", () => {
      window.location.reload();
    });
  }
});
