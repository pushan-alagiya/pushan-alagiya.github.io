/**
 * Reusable render functions - inject content from data.js arrays
 */

function getNavHTML() {
  if (typeof NAV_LINKS === "undefined") return "";
  const items = NAV_LINKS.map(
    (link) =>
      `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.label}</a></li>`
  ).join("");
  return `<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
  <div class="container px-5">
    <a class="navbar-brand" href="index.html"><span class="fw-bolder text-primary">My Portfolio</span></a>
    <button class="text-gradient night-toggler">
      <i class="bi bi-moon-stars-fill"></i>
    </button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">${items}</ul>
    </div>
  </div>
</nav>`;
}

function getFooterHTML() {
  return `<footer class="bg-white py-4 mt-auto">
  <div class="container px-5">
    <div class="d-flex justify-content-center">
      <div class="col-auto">
        <div class="small m-0">Copyright &copy;</div>
      </div>
    </div>
  </div>
</footer>`;
}

function getLoaderHTML() {
  return `<div id="loadOverlay" style="background-color: rgb(54, 54, 54); position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2000;">
  <div style="display: flex; width: 100%; height: 100%; margin: auto; align-items: center; color: white; justify-content: center; font-size: 24px; font-weight: bold; animation: pulse 1s infinite alternate;">
    <div class="loading-spinner">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</div>`;
}

function renderNav(containerId) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = getNavHTML();
}

function renderFooter(containerId) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = getFooterHTML();
}

function renderLoader(containerId) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = getLoaderHTML();
}

function hideLoaderAfter(delayMs) {
  setTimeout(function () {
    const overlay = document.getElementById("loadOverlay");
    if (overlay) overlay.style.display = "none";
  }, delayMs);
}

function renderTechTrack(items, trackClass) {
  if (!items || !items.length) return "";
  const itemHTML = (item) =>
    `<div class="tech-item"><img src="${item.src}" alt="${item.alt}" /><span>${item.label}</span></div>`;
  const all = [...items, ...items].map(itemHTML).join("");
  return `<div class="${trackClass}">${all}</div>`;
}

function renderTechTrackInto(containerId, items) {
  if (!items || !items.length) return;
  const el = document.getElementById(containerId);
  if (!el) return;
  const itemHTML = (item) =>
    `<div class="tech-item"><img src="${item.src}" alt="${item.alt}" /><span>${item.label}</span></div>`;
  el.innerHTML = [...items, ...items].map(itemHTML).join("");
}

function renderTechCarousel(title, items, carouselClass, trackClass) {
  const track = renderTechTrack(items, trackClass);
  return `<div class="mb-5"><div class="${carouselClass}"><h4 class="text-center mb-4">${title}</h4>${track}</div></div>`;
}

function renderStats(containerId) {
  if (typeof STATS === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = STATS.map(
    (s) =>
      `<div class="col-lg-3 col-6 mb-4"><div class="stat-item"><div class="display-4 fw-bolder ${s.colorClass}">${s.value}</div><div class="text-muted fw-light">${s.label}</div></div></div>`
  ).join("");
}

function renderSocialLinks(containerSelector) {
  if (typeof SOCIAL_LINKS === "undefined") return;
  const el = document.querySelector(containerSelector);
  if (!el) return;
  el.innerHTML = SOCIAL_LINKS.map(
    (link) =>
      `<a class="text-gradient" href="${link.href}" target="_blank" rel="noopener"><i class="bi ${link.icon}"></i></a>`
  ).join("");
}

function renderProjects(containerId) {
  if (typeof PROJECTS_DATA === "undefined") return;
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = PROJECTS_DATA.map(
    (p) =>
      `<div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div class="card-body p-0">
          <div class="d-flex align-items-center row align-items-center gx-5">
            <div class="col text-center text-mg-start mb-4 mb-lg-0">
              <a href="${p.githubUrl}" target="_blank" rel="noopener">
                <img src="${p.image}" alt="${p.title}" width="100%" class="${p.imageClass}" />
              </a>
            </div>
            <div class="projects-5">
              <h2 class="fw-bolder text-gradient text-center">${p.title}</h2>
              <br />
              <p class="text-sm">${p.description}</p>
            </div>
          </div>
        </div>
      </div>`
  ).join("");
}

function renderAwards(containerId) {
  if (typeof AWARDS_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = AWARDS_DATA.map(
    (a) =>
      `<div class="col text-center text-mg-start mb-5 mb-lg-0">
        <div class="bg-light p-4 rounded-4">
          <h3 class="fw-bolder mb-0"><span class="text-gradient small-awards d-inline">${a.title}</span></h3>
          <br>
          <a href="${a.link}" target="_blank" rel="noopener"><img class="border-rad noinverseimgages" src="${a.image}" width="90%" alt="${a.title}"></a>
          <div class="text-sm awards-text">Facilitation of Toppers<br><div class="small text-muted lower-text">${a.subtitle}</div></div>
        </div>
      </div>`
  ).join("");
}

function renderCertifications(containerId) {
  if (typeof CERTIFICATIONS_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CERTIFICATIONS_DATA.map(
    (c) =>
      `<div class="card shadow border-0 rounded-4 mb-5">
        <div class="card-body p-5">
          <div class="row align-items-center gx-5">
            <div class="col text-center text-mg-start mb-4 mb-lg-0">
              <div class="bg-light p-4 rounded-4">
                <a href="${c.link}" target="_blank" rel="noopener"><img class="border-rad noinverseimgages" src="${c.image}" width="100%" alt="${c.name}"></a>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="text-sm">${c.description}</div>
              <br>
              <div class="text-gradient fw-bolder">Skills Learnt</div>
              <ul>${(c.skills || []).map((s) => `<li class="skills-learnt text-sm">${s}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </div>`
  ).join("");
}

function renderExperienceCards(containerId) {
  if (typeof EXPERIENCE_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = EXPERIENCE_DATA.map(
    (e) =>
      `<div class="card shadow border-0 rounded-4 experience-card" data-bs-toggle="modal" data-bs-target="#${e.modalId}" style="cursor: pointer;">
        <div class="card-body">
          <div class="row align-items-center gx-5">
            <div class="col text-center text-lg-start mb-4 mb-lg-0">
              <div class="bg-light p-4 rounded-4">
                <div class="text-secondary fw-bolder mb-2">${e.period}</div>
                <div class="small fw-bolder mb-2">${e.role}</div>
                <div class="small text-muted-title"><a href="${e.companyUrl}" onclick="event.stopPropagation();" target="_blank" rel="noopener">${e.companyName}</a></div>
                <div class="small text-muted">${e.location}</div>
                <hr>
                <div class="small text-muted">Tech Stack: </div>
                <div class="fw-bolder text-gradient">${e.techStack}</div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="text-sm experience-info">${e.description}
                <div class="mt-3 click-indicator"><i class="bi bi-arrow-right-circle me-2"></i><span class="text-primary fw-medium">Click to view detailed project information</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>`
  ).join("");
}

function renderExperienceModals(containerId) {
  if (typeof EXPERIENCE_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = EXPERIENCE_DATA.map(
    (e) => {
      const projectsList = (e.projects || [])
        .map(
          (p) =>
            `<li><div class="project-name">${p.name}</div><p class="mb-0 text-muted">${p.desc}</p></li>`
        )
        .join("");
      const techBadges = (e.technologies || [])
        .map((t) => `<span class="tech-badge">${t}</span>`)
        .join("");
      const impactSection = e.impact
        ? `<div class="project-info-card"><h6 class="fw-bold mb-2"><i class="bi bi-trophy me-2"></i>Professional Impact</h6><p class="mb-0">${e.impact}</p></div>`
        : "";
      return `<div class="modal fade" id="${e.modalId}" tabindex="-1" aria-labelledby="${e.modalId}Label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${e.modalId}Label"><i class="bi bi-building me-2"></i>${e.companyName} - ${e.role}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="company-info-section mb-4">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <h6 class="fw-bold mb-2">Position Details</h6>
                    <div class="text-muted mb-1"><i class="bi bi-calendar3 me-2"></i>${e.period}</div>
                    <div class="text-muted mb-1"><i class="bi bi-geo-alt me-2"></i>${e.location}</div>
                    <div class="text-muted"><i class="bi bi-briefcase me-2"></i>${e.role}</div>
                  </div>
                  <div class="col-md-6">
                    <h6 class="fw-bold mb-2">Technologies</h6>
                    <div class="d-flex flex-wrap gap-1">${techBadges}</div>
                  </div>
                </div>
              </div>
              <div class="project-info-card">
                <h6 class="fw-bold mb-3"><i class="bi bi-code-square me-2"></i>Key Projects & Contributions</h6>
                <ul class="project-list">${projectsList}</ul>
              </div>
              ${impactSection}
            </div>
            <div class="modal-footer">
              <a href="${e.websiteUrl}" target="_blank" rel="noopener" class="btn btn-primary"><i class="bi bi-globe me-1"></i>Visit Company Website</a>
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`;
    }
  ).join("");
}

function renderEducation(containerId) {
  if (typeof EDUCATION_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = EDUCATION_DATA.map(
    (ed) =>
      `<div class="card shadow border-0 rounded-4 mb-5">
        <div class="card-body p-5">
          <div class="row align-items-center gx-5">
            <div class="col text-center text-lg-start mb-4 mb-lg-0">
              <div class="bg-light p-4 rounded-4">
                <div class="text-secondary fw-bolder mb-2">${ed.period}</div>
                <div class="mb-2">
                  <div class="small fw-bolder"><a href="${ed.schoolUrl}" target="_blank" rel="noopener">${ed.schoolName}</a></div>
                  <div class="small text-muted">${ed.board}</div>
                </div>
                <div class="fst-italic">
                  <div class="small text-muted">${ed.degree}</div>
                  ${ed.details ? `<div class="small text-muted mt-2">${ed.details}</div>` : ""}
                </div>
              </div>
            </div>
            <div class="col-lg-8"><div class="text-sm">${ed.description}</div></div>
          </div>
        </div>
      </div>`
  ).join("");
}

function renderSkillsGrid(containerId, skills, visibleCount, additionalClass) {
  if (typeof skills === "undefined" || !skills.length) return;
  const el = document.getElementById(containerId);
  if (!el) return;
  const visible = skills.slice(0, visibleCount);
  const hidden = skills.slice(visibleCount);
  const visibleHTML = visible
    .map(
      (s) =>
        `<div class="col"><div class="d-flex align-items-center justify-content-center skills bg-light rounded-4 p-3 h-100 text-center">${s}</div></div>`
    )
    .join("");
  const hiddenHTML = hidden
    .map(
      (s) =>
        `<div class="col ${additionalClass}" style="display: none;"><div class="d-flex align-items-center justify-content-center skills bg-light rounded-4 p-3 h-100 text-center">${s}</div></div>`
    )
    .join("");
  el.innerHTML = visibleHTML + hiddenHTML;
}

function renderResumeAwards(containerId) {
  if (typeof AWARDS_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = AWARDS_DATA.map(
    (a) =>
      `<div class="col text-center text-mg-start mb-5 mb-lg-0">
        <div class="bg-light p-4 rounded-4">
          <h3 class="fw-bolder mb-0"><span class="text-gradient small-awards d-inline">${a.title}</span></h3>
          <br>
          <a href="${a.link}" target="_blank" rel="noopener"><img class="border-rad noinverseimgages" src="${a.image}" width="90%" alt="${a.title}"></a>
          <div class="text-sm awards-text">Facilitation of Toppers<br><div class="small text-muted lower-text">${a.subtitle}</div></div>
        </div>
      </div>`
  ).join("");
}

function renderExtracurricular(containerId) {
  if (typeof EXTRACURRICULAR_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = EXTRACURRICULAR_DATA.map(
    (ex) =>
      `<div class="card shadow border-0 rounded-4 mb-5">
        <div class="card-body p-5">
          <div class="row align-items-center gx-5">
            <div class="col text-center text-mg-start mb-4 mb-lg-0">
              <div class="bg-light p-4 rounded-4">
                <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">${ex.title}</span></h3>
                <br>
                ${ex.link ? `<a href="${ex.link}" target="_blank" rel="noopener"><img class="border-rad noinverseimgages" src="${ex.image}" width="90%" alt="${ex.title}"></a>` : `<img class="border-rad noinverseimgages" src="${ex.image}" width="90%" alt="${ex.title}">`}
              </div>
            </div>
            <div class="col-lg-8"><div class="text-sm">${ex.description}</div></div>
          </div>
        </div>
      </div>`
  ).join("");
}
