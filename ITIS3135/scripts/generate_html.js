document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const generateHTMLBtn = document.getElementById("generateHTML");

  generateHTMLBtn.addEventListener("click", () => {
    const formData = new FormData(form);

    // Collect course info
    const courses = [];
    const courseDivs = document.querySelectorAll("#courses .course");
    courseDivs.forEach((div) => {
      const dept = div.querySelector('input[name="dept[]"]').value;
      const num = div.querySelector('input[name="number[]"]').value;
      const name = div.querySelector('input[name="name[]"]').value;
      const reason = div.querySelector('input[name="reason[]"]').value;
      courses.push({ dept, num, name, reason });
    });

    // Build HTML output
    const htmlOutput = `
<h2>Introduction HTML</h2>
<h3>${formData.get("firstName")} ${formData.get("middleName") ? formData.get("middleName")[0] + ". " : ""}${formData.get("nickname") ? '"' + formData.get("nickname") + '" ' : ""}${formData.get("lastName")} ★ ${formData.get("mascotAdj")} ${formData.get("mascotAnimal")}</h3>
<figure>
  <img src="${document.getElementById("preview").src}" alt="Headshot of ${formData.get("firstName")} ${formData.get("lastName")}">
  <figcaption>${formData.get("caption")}</figcaption>
</figure>
<ul>
  <li><strong>Acknowledgment:</strong> ${formData.get("acknowledge")} (${formData.get("ackDate")})</li>
  <li><strong>Personal Statement:</strong> ${formData.get("statement")}</li>
  <li><strong>Courses:</strong>
    <ul>
      ${courses.map((c) => `<li>${c.dept} ${c.num} - ${c.name}: ${c.reason}</li>`).join("")}
    </ul>
  </li>
  <li><strong>Quote:</strong> "${formData.get("quote")}" — ${formData.get("author")}</li>
</ul>
<section>
  <h3>Links</h3>
  <ul>
    ${[1, 2, 3, 4, 5]
      .map((i) => {
        const link = formData.get(`link${i}`);
        return link ? `<li><a href="${link}" target="_blank">${link}</a></li>` : "";
      })
      .join("")}
  </ul>
</section>
`;

    const container = form.parentElement;
    container.innerHTML = `
      <h2>Introduction HTML</h2>
      <section>
        <pre><code class="language-html">${htmlOutput.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
      </section>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
    `;
  });
});
