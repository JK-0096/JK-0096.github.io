// generate_html.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const generateBtn = document.getElementById("generateHTML");

  generateBtn.addEventListener("click", () => {
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

    // Construct the HTML string
    let htmlOutput = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${formData.get("firstName")} ${formData.get("lastName")}'s Introduction</title>
</head>
<body>
  <h2>${formData.get("firstName")} "${formData.get("nickname") || ""}" ${formData.get("lastName")}</h2>
  <p><strong>Acknowledgment:</strong> ${formData.get("acknowledge")} (${formData.get("ackDate")})</p>
  
  <section>
    <h3>Mascot</h3>
    <p>${formData.get("mascotAdj")} ${formData.get("mascotAnimal")}</p>
    <img src="${document.getElementById("preview").src}" alt="${formData.get("caption")}" width="150">
    <p>${formData.get("caption")}</p>
  </section>

  <section>
    <h3>Personal Statement</h3>
    <p>${formData.get("statement")}</p>
  </section>

  <section>
    <h3>Courses</h3>
    <ul>
      ${courses.map(c => `<li>${c.dept} ${c.num} - ${c.name}: ${c.reason}</li>`).join("")}
    </ul>
  </section>

  <section>
    <h3>Quote</h3>
    <blockquote>"${formData.get("quote")}" — ${formData.get("author")}</blockquote>
  </section>

  <section>
    <h3>Links</h3>
    <ul>
      ${[1,2,3,4,5].map(i => {
        const link = formData.get(`link${i}`);
        return link ? `<li><a href="${link}" target="_blank">${link}</a></li>` : "";
      }).join("")}
    </ul>
  </section>

  ${formData.get("funny") || formData.get("share") ? `
  <section>
    <h3>Optional Info</h3>
    ${formData.get("funny") ? `<p><strong>Funny Thing:</strong> ${formData.get("funny")}</p>` : ""}
    ${formData.get("share") ? `<p><strong>Something to Share:</strong> ${formData.get("share")}</p>` : ""}
  </section>
  ` : ""}
</body>
</html>
`;

    // Replace form with formatted HTML preview
    const container = form.parentElement;
    container.innerHTML = `
      <h2>Introduction HTML</h2>
      <section>
        <pre><code class="language-html">${escapeHTML(htmlOutput)}</code></pre>
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
