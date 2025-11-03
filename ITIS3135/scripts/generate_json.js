// generate_json.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const generateJSONBtn = document.getElementById("generateJSON");

  generateJSONBtn.addEventListener("click", () => {
    // Gather all form data
    const formData = new FormData(form);

    // Get all course info
    const courses = [];
    const courseDivs = document.querySelectorAll("#courses .course");
    courseDivs.forEach(div => {
      const dept = div.querySelector('input[name="dept[]"]').value;
      const num = div.querySelector('input[name="number[]"]').value;
      const name = div.querySelector('input[name="name[]"]').value;
      const reason = div.querySelector('input[name="reason[]"]').value;
      courses.push({ dept, num, name, reason });
    });

    // Construct the JSON object
    const jsonOutput = {
      "firstName": formData.get("firstName"),
      "preferredName": formData.get("nickname") || "",
      "middleInitial": formData.get("middleName") || "",
      "lastName": formData.get("lastName"),
      "divider": formData.get("divider"),
      "mascotAdjective": formData.get("mascotAdj"),
      "mascotAnimal": formData.get("mascotAnimal"),
      "image": document.getElementById("preview").src,
      "imageCaption": formData.get("caption"),
      "personalStatement": formData.get("statement"),
      "personalBackground": "Grew up north of Charlotte, and have always had a love of computers.",
      "professionalBackground": "This is my first semester as an Instructional Assistant/Teachers Assistant.",
      "academicBackground": "I’m currently a Junior at UNC Charlotte studying computer science.",
      "subjectBackground": "I enjoy programming and problem solving.",
      "primaryComputer": "Macbook Pro M2 14 inch.",
      "courses": courses,
      "links": [
        { "name": "LinkedIn", "href": formData.get("link1") },
        { "name": "GitHub", "href": formData.get("link2") },
        { "name": "Portfolio", "href": formData.get("link3") },
        { "name": "Twitter", "href": formData.get("link4") },
        { "name": "Other", "href": formData.get("link5") }
      ]
    };

    // Convert JSON object to string
    const jsonString = JSON.stringify(jsonOutput, null, 2);

    // Replace form with formatted JSON preview
    const container = form.parentElement;
    container.innerHTML = `
      <h2>Introduction JSON</h2>
      <section>
        <pre><code class="language-json">${escapeHTML(jsonString)}</code></pre>
      </section>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
    `;
  });

  // Helper function to escape special characters for display
  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
});
