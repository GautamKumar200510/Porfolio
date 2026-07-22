import { personalInfo, internships, projects, educationHistory, certifications, achievements, expertiseCategories } from '../data/resumeData';

export function downloadResumePDF() {
  // Create printable standard resume HTML content
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download/print the resume PDF.');
    return;
  }

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GAUTAM KUMAR - Resume</title>
  <style>
    @page {
      size: letter;
      margin: 12mm 15mm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #1e293b;
      margin: 0;
      padding: 20px;
      line-height: 1.4;
      font-size: 11pt;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
    .name {
      font-size: 22pt;
      font-weight: 800;
      letter-spacing: 0.5px;
      margin: 0;
      color: #0f172a;
      text-transform: uppercase;
    }
    .title {
      font-size: 11pt;
      font-weight: 600;
      color: #334155;
      margin-top: 3px;
    }
    .contact-info {
      font-size: 9.5pt;
      color: #475569;
      margin-top: 5px;
    }
    .contact-info a {
      color: #1e293b;
      text-decoration: none;
    }
    .section-title {
      font-size: 11pt;
      font-weight: 700;
      text-transform: UPPERCASE;
      letter-spacing: 0.5px;
      color: #0f172a;
      border-bottom: 1px solid #0f172a;
      padding-bottom: 2px;
      margin-top: 12px;
      margin-bottom: 6px;
    }
    .summary {
      font-size: 10pt;
      color: #334155;
      margin-bottom: 10px;
      text-align: justify;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 10.5pt;
      color: #0f172a;
      margin-top: 6px;
    }
    .item-sub {
      display: flex;
      justify-content: space-between;
      font-style: italic;
      font-size: 9.5pt;
      color: #475569;
      margin-bottom: 3px;
    }
    ul {
      margin: 3px 0 6px 18px;
      padding: 0;
      font-size: 9.5pt;
      color: #334155;
    }
    li {
      margin-bottom: 2px;
    }
    .skills-block {
      font-size: 9.5pt;
      line-height: 1.5;
    }
    .skills-block strong {
      color: #0f172a;
    }
    .cert-list {
      font-size: 9.5pt;
      line-height: 1.5;
    }
    @media print {
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">${personalInfo.name}</div>
    <div class="title">${personalInfo.title}</div>
    <div class="contact-info">
      ${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email} | linkedin.com/in/gautamkumar | github.com/gautamkumar
    </div>
  </div>

  <div class="section-title">Professional Summary</div>
  <div class="summary">${personalInfo.summary}</div>

  <div class="section-title">Education</div>
  ${educationHistory.map(edu => `
    <div class="item-header">
      <span>${edu.degree} | ${edu.grade}</span>
      <span>${edu.period}</span>
    </div>
    <div class="item-sub">
      <span>${edu.institution}</span>
    </div>
  `).join('')}

  <div class="section-title">Professional Experience</div>
  ${internships.map(exp => `
    <div class="item-header">
      <span>${exp.role}</span>
      <span>${exp.startDate} – ${exp.endDate}</span>
    </div>
    <div class="item-sub">
      <span>${exp.company}</span>
      <span>${exp.location}</span>
    </div>
    <ul>
      ${exp.description.map(bullet => `<li>${bullet}</li>`).join('')}
    </ul>
  `).join('')}

  <div class="section-title">Projects</div>
  ${projects.map(proj => `
    <div class="item-header">
      <span>${proj.title}</span>
    </div>
    <div class="item-sub">
      <span>${proj.keySkills.join(' · ')}</span>
    </div>
    <ul>
      ${proj.detailedDescription.split('. ').filter(b => b.trim().length > 0).map(bullet => `<li>${bullet.endsWith('.') ? bullet : bullet + '.'}</li>`).join('')}
    </ul>
  `).join('')}

  <div class="section-title">Skills</div>
  <div class="skills-block">
    <p><strong>Technical:</strong> Java, JavaScript, SQL, React.js, Next.js, Flask, Node.js, HTML5, CSS3, Tailwind CSS, REST APIs, Git, GitHub, Power BI, AWS</p>
    <p><strong>Core Concepts:</strong> OOP, Data Structures & Algorithms, DBMS, Software Engineering, Workflow Automation</p>
    <p><strong>Soft Skills:</strong> Analytical Thinking, Leadership, Problem Solving, Team Collaboration, Business Communication, Time Management</p>
  </div>

  <div class="section-title">Certifications</div>
  <div class="cert-list">
    ${certifications.map(c => `${c.title} – ${c.provider}`).join(' | ')}
  </div>

  <div class="section-title">Achievements</div>
  <ul>
    ${achievements.map(a => `<li><strong>${a.title}:</strong> ${a.description}</li>`).join('')}
  </ul>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
}
