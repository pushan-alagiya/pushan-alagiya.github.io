/**
 * Reusable render functions - inject content from data.js arrays
 */

function getNavHTML() {
  if (typeof NAV_LINKS === "undefined") return "";
  const items = NAV_LINKS.map(
    (link) =>
      `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.label}</a></li>`
  ).join("");
  return `<nav class="navbar navbar-expand-lg navbar-forge py-3">
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
      `<div class="card experience-card-forge mb-5">
        <div class="row align-items-center gx-5">
          <div class="col-lg-5 text-center mb-4 mb-lg-0">
            <a href="${p.githubUrl}" target="_blank" rel="noopener" class="d-block position-relative">
              <div class="position-absolute top-0 end-0 m-2" style="z-index: 2;">
                <span class="badge bg-primary text-white rounded-pill px-3 py-2 shadow-sm">
                  <i class="bi bi-box-arrow-up-right me-1"></i> View Project
                </span>
              </div>
              <img src="${p.image}" alt="${p.title}" class="img-fluid ${p.imageClass} rounded-4 shadow-sm" style="object-fit: cover; width: 100%; max-height: 280px;" />
            </a>
          </div>
          <div class="col-lg-7">
            <h2 class="h3 fw-bolder app-text-primary mb-3">${p.title}</h2>
            <p class="app-text-secondary mb-4" style="line-height: 1.6;">${p.description}</p>
            <div>
              <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-outline-primary rounded-pill px-4 fw-semibold btn-sm">
                Source Code <i class="bi bi-github ms-2"></i>
              </a>
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
      `<div class="col-md-6 mb-4">
        <div class="card experience-card-forge h-100 p-4 d-flex flex-column justify-content-between">
          <div>
            <div class="cert-logo-frame mb-3">
              <a href="${a.link}" target="_blank" rel="noopener">
                <img class="border-rad noinverseimgages cert-img-forge" src="${a.image}" alt="${a.title}">
              </a>
            </div>
            <h3 class="h5 fw-bold mb-1"><span class="text-gradient small-awards d-inline">${a.title}</span></h3>
            <div class="text-sm awards-text text-muted mb-3">Facilitation of Toppers • <span class="text-primary">${a.subtitle}</span></div>
          </div>
          <div class="pt-3 border-top border-secondary border-opacity-10 text-end">
            <a href="${a.link}" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fw-semibold">
              <span>View Award</span> <i class="bi bi-box-arrow-up-right ms-1 small"></i>
            </a>
          </div>
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
      `<div class="card experience-card-forge mb-4">
        <div class="p-0">
          <div class="row align-items-center gx-5">
            <div class="col-lg-4 text-center mb-4 mb-lg-0">
              <div class="cert-logo-frame">
                <a href="${c.link}" target="_blank" rel="noopener">
                  <img class="border-rad noinverseimgages cert-img-forge" src="${c.image}" alt="${c.name}">
                </a>
              </div>
            </div>
            <div class="col-lg-8">
              <h3 class="h4 fw-bold mb-2 app-text-primary">${c.name}</h3>
              <div class="text-sm app-text-secondary mb-3">${c.description}</div>
              <div class="fw-semibold text-primary small mb-2"><i class="bi bi-check2-circle me-1"></i>Skills Validated</div>
              <div class="d-flex flex-wrap gap-1 mb-3">
                ${(c.skills || []).map((s) => `<span class="forge-pill small">${s}</span>`).join("")}
              </div>
              <a href="${c.link}" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fw-semibold">
                <i class="bi bi-shield-check me-1"></i>Verify Credential <i class="bi bi-box-arrow-up-right ms-1 small"></i>
              </a>
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
  el.innerHTML = EXPERIENCE_DATA.map((e) => {
    const projectCount = (e.projects || []).length;
    const techTags = (e.techStack || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 8)
      .map((t) => `<span class="forge-pill small me-1 mb-1">${t}</span>`)
      .join("");

    return `<div class="card experience-card-forge mb-4" data-bs-toggle="modal" data-bs-target="#${e.modalId}">
      <div class="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3 mb-3">
        <div>
          <h3 class="h4 fw-bold mb-1 app-text-primary" style="font-family: 'Space Grotesk', sans-serif;">${e.role}</h3>
          <div class="d-flex align-items-center flex-wrap gap-2 fs-6">
            <a href="${e.companyUrl}" onclick="event.stopPropagation();" target="_blank" rel="noopener" class="exp-company-link">
              <i class="bi bi-building me-1"></i>${e.companyName} <i class="bi bi-box-arrow-up-right small"></i>
            </a>
            <span class="text-muted small">•</span>
            <span class="text-muted small"><i class="bi bi-geo-alt me-1"></i>${e.location}</span>
          </div>
        </div>
        <div class="d-flex flex-wrap align-items-center gap-2">
          <span class="exp-period-pill"><i class="bi bi-calendar3 me-1"></i>${e.period}</span>
          ${projectCount ? `<span class="exp-projects-pill"><i class="bi bi-folder-check me-1"></i>${projectCount} Projects</span>` : ""}
        </div>
      </div>

      <p class="exp-desc mb-3">${e.description}</p>

      <div class="d-flex align-items-center flex-wrap gap-1 mb-4 pt-2">
        <span class="small text-muted fw-semibold me-2">Core Stack:</span>
        ${techTags}
      </div>

      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-3 border-top border-secondary border-opacity-10">
        <div class="d-flex align-items-center text-muted small">
          <i class="bi bi-check-circle-fill text-success me-2 fs-5"></i>
          <span>Full-lifecycle ownership & production deployments</span>
        </div>
        <div class="btn btn-outline-primary btn-sm px-3 py-2 rounded-pill fw-semibold">
          <span>Explore Engineering Impact</span>
          <i class="bi bi-arrow-right ms-1"></i>
        </div>
      </div>
    </div>`;
  }).join("");
}

function renderExperienceModals(containerId) {
  if (typeof EXPERIENCE_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = EXPERIENCE_DATA.map((e) => {
    const hasDetailedProjects = (e.projects || []).some(
      (p) => p.tech || p.highlights
    );
    const techBadges = (e.technologies || [])
      .map((t) => `<span class="tech-badge">${t}</span>`)
      .join("");

    const techDisplay = e.techCategories
      ? `<div class="modal-tech-categories">
          ${Object.entries(e.techCategories)
        .map(
          ([cat, items]) => `
              <div class="mb-2">
                <span class="small fw-bold text-primary me-2">${cat}:</span>
                <div class="d-inline-flex flex-wrap gap-1 align-items-center mt-1">
                  ${items
              .map((t) => `<span class="tech-badge tech-badge-sm">${t}</span>`)
              .join("")}
                </div>
              </div>`
        )
        .join("")}
        </div>`
      : `<div class="d-flex flex-wrap gap-1 modal-tech-badges">${techBadges}</div>`;

    const engineeringAreasSection =
      e.engineeringAreas && e.engineeringAreas.length
        ? `<div class="company-info-section mb-4">
            <h6 class="fw-bold mb-3"><i class="bi bi-diagram-3 me-2"></i>Core Engineering Areas</h6>
            <div class="d-flex flex-wrap gap-2">
              ${e.engineeringAreas
          .map(
            (area) =>
              `<span class="engineering-area-tag"><i class="bi bi-check-circle me-1 text-primary"></i>${area}</span>`
          )
          .join("")}
            </div>
          </div>`
        : "";

    const metricsSection =
      e.metrics && e.metrics.length
        ? `<div class="impact-metrics-section mb-4">
            <h6 class="fw-bold mb-3"><i class="bi bi-speedometer2 me-2"></i>${e.metricsTitle || "Key Impact & Scale Metrics"}</h6>
            <div class="row g-3">
              ${e.metrics
          .map(
            (m) => `
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="metric-card h-100">
                    <div class="metric-value">${m.value}</div>
                    <div class="metric-label">${m.label}</div>
                    ${m.subtext ? `<div class="metric-subtext">${m.subtext}</div>` : ""}
                  </div>
                </div>`
          )
          .join("")}
            </div>
          </div>`
        : "";

    const projectsContent = hasDetailedProjects
      ? `<div class="project-cards-section mb-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h6 class="fw-bold mb-0">
              <i class="bi bi-code-square me-2"></i>Featured Projects & Architecture
              <span class="badge rounded-pill bg-primary text-dark ms-2 fw-bold">${e.projects.length}</span>
            </h6>
            <span class="small text-muted d-none d-sm-inline">
              <i class="bi bi-arrows-expand me-1"></i>Click card to toggle details
            </span>
          </div>
          <div class="project-accordion-list">
            ${e.projects
        .map((p, idx) => {
          const collapseId = `collapse-${e.modalId}-${idx}`;
          const isExpanded = idx < 2 || p.prominent;
          const tagsHtml = (p.tech || [])
            .map((t) => {
              const isAi = /ai|rag|llm|agent/i.test(t);
              return `<span class="project-tag ${isAi ? "project-tag-ai" : ""}">${t}</span>`;
            })
            .join("");
          const highlightsHtml = (p.highlights || [])
            .map(
              (h) =>
                `<li><i class="bi bi-check2-circle me-2 text-primary"></i><span>${h}</span></li>`
            )
            .join("");
          const badgeText = p.prominentBadgeText || "Key Business Impact";
          const prominentBadge = p.prominent
            ? `<span class="badge bg-warning text-dark fw-bold me-2"><i class="bi bi-star-fill me-1"></i>${badgeText}</span>`
            : "";
          const techContributionHtml = p.technicalContribution
            ? `<div class="project-contribution-box p-3 rounded-3 mb-3">
                      <div class="fw-bold small text-primary mb-1"><i class="bi bi-gear-wide-connected me-2"></i>Technical Contribution</div>
                      <div class="small text-muted-subtle">${p.technicalContribution}</div>
                    </div>`
            : "";
          const impactCalloutHtml = p.impact
            ? `<div class="project-impact-box p-3 rounded-3 mb-3">
                      <div class="fw-bold small text-success mb-1"><i class="bi bi-graph-up-arrow me-2"></i>Measurable Impact</div>
                      <div class="small text-muted-subtle">${p.impact}</div>
                    </div>`
            : "";

          return `
                  <div class="project-card-collapsible ${p.prominent ? "project-card-prominent" : ""} mb-3">
                    <div class="project-card-header ${isExpanded ? "" : "collapsed"}" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isExpanded}" aria-controls="${collapseId}" role="button">
                      <div class="d-flex align-items-start justify-content-between">
                        <div class="project-title-area pe-2">
                          <div class="d-flex flex-wrap align-items-center gap-1 mb-1">
                            ${prominentBadge}
                            <span class="project-card-name">${p.name}</span>
                          </div>
                          <div class="project-tags-wrap mt-2">${tagsHtml}</div>
                        </div>
                        <div class="project-toggle-icon ms-2">
                          <i class="bi bi-chevron-down project-chevron"></i>
                        </div>
                      </div>
                    </div>
                    <div id="${collapseId}" class="collapse ${isExpanded ? "show" : ""}">
                      <div class="project-card-body">
                        ${p.desc ? `<p class="project-summary-desc mb-3">${p.desc}</p>` : ""}
                        ${techContributionHtml}
                        ${impactCalloutHtml}
                        ${highlightsHtml ? `<ul class="project-highlights-list mb-0">${highlightsHtml}</ul>` : ""}
                      </div>
                    </div>
                  </div>`;
        })
        .join("")}
          </div>
        </div>`
      : `<div class="project-info-card">
          <h6 class="fw-bold mb-3"><i class="bi bi-code-square me-2"></i>Key Projects & Contributions</h6>
          <ul class="project-list">
            ${(e.projects || [])
        .map(
          (p) =>
            `<li><div class="project-name">${p.name}</div><p class="mb-0 text-muted">${p.desc}</p></li>`
        )
        .join("")}
          </ul>
        </div>`;

    const impactSection = e.impact
      ? `<div class="project-info-card"><div class="d-flex align-items-center mb-2"><i class="bi bi-trophy text-primary me-2 fs-5"></i><h6 class="fw-bold mb-0 app-text-primary">Professional Impact</h6></div><p class="mb-0 text-muted-subtle">${e.impact}</p></div>`
      : "";

    return `<div class="modal fade" id="${e.modalId}" tabindex="-1" aria-labelledby="${e.modalId}Label" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${e.modalId}Label"><i class="bi bi-building me-2 text-primary"></i><span class="app-text-primary fw-bold">${e.companyName}</span> <span class="text-muted fw-normal fs-6">/</span> <span class="text-primary">${e.role}</span></h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="company-info-section mb-4">
              <div class="row g-4 align-items-center">
                <div class="col-md-5">
                  <h6 class="fw-bold mb-3"><i class="bi bi-person-workspace me-2"></i>Position Details</h6>
                  <div class="text-muted mb-2"><i class="bi bi-calendar3 me-2"></i>${e.period}</div>
                  <div class="text-muted mb-2"><i class="bi bi-geo-alt me-2"></i>${e.location}</div>
                  <div class="text-muted"><i class="bi bi-briefcase me-2"></i>${e.role}</div>
                </div>
                <div class="col-md-7">
                  <h6 class="fw-bold mb-2"><i class="bi bi-cpu me-2"></i>Technologies & Specializations</h6>
                  ${techDisplay}
                </div>
              </div>
            </div>
            ${engineeringAreasSection}
            ${metricsSection}
            ${projectsContent}
            ${impactSection}
          </div>
          <div class="modal-footer app-bg border-top app-border px-4 py-3">
            <a href="${e.websiteUrl}" target="_blank" rel="noopener" class="btn btn-primary px-4 py-2 fw-semibold rounded-3"><i class="bi bi-globe me-2"></i>Visit Company Website</a>
            <button type="button" class="btn btn-outline-secondary px-4 py-2 rounded-3" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join("");
}

function renderEducation(containerId) {
  if (typeof EDUCATION_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = EDUCATION_DATA.map((ed) => {
    if (ed.isCurrent) {
      const coreAreasHtml = (ed.coreAreas || [])
        .map((a) => {
          const isAgentic = /agent/i.test(a);
          return `<span class="project-tag ${isAgentic ? "project-tag-ai" : ""}">${a}</span>`;
        })
        .join("");

      return `<div class="card experience-card-forge mb-4 education-card-current">
          <div class="row align-items-start gx-5">
            <div class="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
              <div class="h-100">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="text-secondary fw-bolder">${ed.period}</span>
                  <span class="badge bg-success text-white px-2 py-1"><i class="bi bi-circle-fill me-1" style="font-size: 0.45rem;"></i>${ed.status || "Ongoing"}</span>
                </div>
                <div class="mb-2">
                  <div class="small fw-bolder fs-6"><a href="${ed.schoolUrl}" target="_blank" rel="noopener">${ed.schoolName}</a></div>
                  <div class="small text-muted"><i class="bi bi-geo-alt me-1"></i>${ed.location || ed.board}</div>
                </div>
                <div class="mb-2">
                  <div class="fw-bold text-primary">${ed.degree}</div>
                </div>
                ${ed.focusHighlight
          ? `<div class="academic-focus-box p-3 rounded-3 mt-3 text-start">
                        <div class="small fw-bold text-primary mb-1"><i class="bi bi-bullseye me-1"></i>Focus:</div>
                        <div class="small text-muted-subtle" style="font-size: 0.8rem; line-height: 1.4;">${ed.focusHighlight}</div>
                      </div>`
          : ""
        }
              </div>
            </div>
            <div class="col-lg-8">
              <div class="text-sm">
                <p class="education-lead-desc mb-3">${ed.description}</p>
                ${coreAreasHtml
          ? `<div class="mb-4">
                        <div class="small fw-bold text-primary mb-2"><i class="bi bi-book me-1"></i>Core Areas of Study:</div>
                        <div class="d-flex flex-wrap gap-2">${coreAreasHtml}</div>
                      </div>`
          : ""
        }
                ${ed.scholarship || ed.achievement
          ? (() => {
            const ach = ed.scholarship || ed.achievement;
            return `<div class="scholarship-achievement-card p-3 rounded-3 mt-3">
                          <div class="d-flex align-items-center gap-3">
                            <div class="scholarship-badge-icon">
                              <i class="bi ${ach.icon || "bi-award-fill"} text-warning fs-3"></i>
                            </div>
                            <div>
                              <div class="fw-bold text-primary" style="font-size: 0.95rem;">${ach.title}</div>
                              <div class="small text-muted">${ach.organization}</div>
                            </div>
                          </div>
                        </div>`;
          })()
          : ""
        }
              </div>
            </div>
          </div>
      </div>`;
    }

    const ach = ed.scholarship || ed.achievement;
    const achievementHtml = ach
      ? `<div class="scholarship-achievement-card p-3 rounded-3 mt-3">
          <div class="d-flex align-items-center gap-3">
            <div class="scholarship-badge-icon">
              <i class="bi ${ach.icon || "bi-award-fill"} text-warning fs-3"></i>
            </div>
            <div>
              <div class="fw-bold text-primary" style="font-size: 0.95rem;">${ach.title}</div>
              <div class="small text-muted">${ach.organization}</div>
            </div>
          </div>
        </div>`
      : "";

    return `<div class="card experience-card-forge mb-4">
        <div class="row align-items-center gx-5">
          <div class="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
            <div class="h-100">
              <div class="text-secondary fw-bolder mb-2">${ed.period}</div>
              <div class="mb-2">
                <div class="small fw-bolder fs-6"><a href="${ed.schoolUrl}" target="_blank" rel="noopener">${ed.schoolName}</a></div>
                <div class="small text-muted">${ed.board ? `<i class="bi bi-geo-alt me-1"></i>${ed.board}` : ""}</div>
              </div>
              <div>
                <div class="fw-bold text-primary">${ed.degree}</div>
                ${ed.details ? `<div class="small text-muted mt-1"><i class="bi bi-star-fill text-warning me-1"></i>${ed.details}</div>` : ""}
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="text-sm">
              <p class="education-lead-desc mb-3">${ed.description}</p>
              ${achievementHtml}
            </div>
            </div>
          </div>
      </div>`;
  }).join("");
}

function renderSkills(containerId) {
  if (typeof SKILLS_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;

  const cardsHtml = SKILLS_DATA.map((cat) => {
    const isAi =
      cat.category.toLowerCase().includes("ai") ||
      cat.category.toLowerCase().includes("llm");
    const pillsHtml = cat.skills
      .map((s) => {
        const isAiSkill =
          isAi ||
          /agent|rag|llm|vector|prompt|lang|llama|pinecone|orchestration/i.test(s);
        return `<span class="skill-pill ${isAiSkill ? "skill-pill-ai" : ""}">${s}</span>`;
      })
      .join("");

    return `<div class="col-12 col-lg-6">
      <div class="card experience-card-forge h-100 ${isAi ? "skill-category-featured" : ""}">
        <div class="d-flex align-items-center mb-3">
          <div class="skill-category-icon me-2">
            <i class="bi ${cat.icon} text-primary fs-5"></i>
          </div>
          <h5 class="fw-bold mb-0 text-primary d-flex align-items-center" style="font-size: 1.05rem;">
            ${cat.emoji ? `<span class="me-2">${cat.emoji}</span>` : ""}${cat.category}
          </h5>
        </div>
        <div class="d-flex flex-wrap gap-2">
          ${pillsHtml}
        </div>
      </div>
    </div>`;
  }).join("");

  el.innerHTML = `<div class="row g-4 mb-2">${cardsHtml}</div>`;
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

function renderResumeCertifications(containerId) {
  if (typeof CERTIFICATIONS_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  const topCertifications = CERTIFICATIONS_DATA.slice(0, 2);
  el.innerHTML = topCertifications
    .map(
      (c) =>
        `<div class="col-md-6 mb-4">
          <div class="card cert-forge-card h-100 p-4 d-flex flex-column justify-content-between">
            <div>
              <div class="cert-logo-frame mb-3">
                <a href="${c.link}" target="_blank" rel="noopener">
                  <img class="border-rad noinverseimgages cert-img-forge" src="${c.image}" alt="${c.name}">
                </a>
              </div>
              <div class="cert-issuer-badge mb-2">
                <i class="bi bi-patch-check-fill text-primary me-1"></i>
                ${c.name.includes("AWS") ? "Amazon Web Services (AWS)" : "MongoDB University"}
              </div>
              <h3 class="h5 fw-bold text-light mb-2">${c.name}</h3>
              <p class="text-muted small mb-3">${c.name.includes("AWS") ? "Validated knowledge in architecting, developing, and deploying cloud applications on AWS." : "Validated proficiency in building production applications with MongoDB and Node.js."}</p>
            </div>
            <div class="pt-3 border-top border-secondary border-opacity-10 d-flex align-items-center justify-content-between">
              <span class="badge bg-success-subtle text-success small fw-semibold px-2 py-1"><i class="bi bi-check-circle me-1"></i>Verified</span>
              <a href="${c.link}" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fw-semibold">
                <span>Verify Credential</span> <i class="bi bi-box-arrow-up-right ms-1 small"></i>
              </a>
            </div>
          </div>
        </div>`
    )
    .join("");
}

function renderResumeAwards(containerId) {
  if (typeof AWARDS_DATA === "undefined") return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = AWARDS_DATA.map(
    (a) =>
      `<div class="col-md-6 mb-4">
        <div class="card cert-forge-card h-100 p-4 d-flex flex-column justify-content-between">
          <div>
            <div class="cert-logo-frame mb-3">
              <a href="${a.link}" target="_blank" rel="noopener">
                <img class="border-rad noinverseimgages cert-img-forge" src="${a.image}" alt="${a.title}">
              </a>
            </div>
            <h3 class="h5 fw-bold mb-1"><span class="text-gradient small-awards d-inline">${a.title}</span></h3>
            <div class="text-sm awards-text text-muted mb-3">Facilitation of Toppers • <span class="text-primary">${a.subtitle}</span></div>
          </div>
          <div class="pt-3 border-top border-secondary border-opacity-10 text-end">
            <a href="${a.link}" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fw-semibold">
              <span>View Award</span> <i class="bi bi-box-arrow-up-right ms-1 small"></i>
            </a>
          </div>
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
      `<div class="card experience-card-forge mb-4">
          <div class="row align-items-center gx-5">
            <div class="col-lg-5 text-center mb-4 mb-lg-0">
              <div class="position-relative">
                ${ex.link ? `<a href="${ex.link}" target="_blank" rel="noopener" class="d-block text-decoration-none">` : ""}
                <img class="img-fluid rounded-3" src="${ex.image}" alt="${ex.title}" style="object-fit: cover; width: 100%; border-radius: 8px;">
                ${ex.link ? `</a>` : ""}
              </div>
            </div>
            <div class="col-lg-7">
              <div class="mb-3">
                <h3 class="fw-bolder mb-1 app-text-primary">${ex.title}</h3>
                ${ex.link ? `<a href="${ex.link}" target="_blank" class="small fw-semibold text-primary text-decoration-none"><i class="bi bi-link-45deg"></i> View Certificate/Event</a>` : ""}
              </div>
              <p class="app-text-secondary mb-0" style="line-height: 1.6;">${ex.description}</p>
            </div>
          </div>
      </div>`
  ).join("");
}

function renderPrintableResume(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const summary = typeof RESUME_SUMMARY !== "undefined"
    ? RESUME_SUMMARY
    : "Software Engineer with 6+ years of experience building scalable full-stack, backend, cloud-native, and AI-powered applications. Experienced in Node.js, NestJS, React, Next.js, TypeScript, microservices, REST APIs, AWS, and real-time systems. Hands-on experience building Agentic AI and LLM-powered applications using LangChain, LangGraph, RAG, and intelligent workflow orchestration. Currently pursuing an M.Sc. in Computer Science at the University of Helsinki.";

  el.innerHTML = `
    <!-- PRINT PAGE 1 -->
    <div class="print-page print-page-1">
      <header class="print-header mb-3 pb-2 border-bottom border-dark">
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <h1 class="print-name m-0 fw-bold">Pushan Alagiya</h1>
            <div class="print-role text-muted fw-semibold">Software Engineer • Full Stack, Backend & Agentic AI Systems</div>
          </div>
          <div class="print-contact text-end small">
            <div><i class="bi bi-geo-alt"></i> Helsinki, Finland / India</div>
            <div><i class="bi bi-envelope"></i> pushanalagiya@gmail.com</div>
            <div><i class="bi bi-globe"></i> pushan-alagiya.github.io</div>
            <div><i class="bi bi-linkedin"></i> linkedin.com/in/pushan-alagiya • <i class="bi bi-github"></i> github.com/pushan-alagiya</div>
          </div>
        </div>
      </header>

      <section class="print-section mb-3">
        <h2 class="print-section-title">Professional Summary</h2>
        <p class="print-summary-text mb-0">${summary}</p>
      </section>

      <section class="print-section mb-0">
        <h2 class="print-section-title">Professional Experience</h2>

        <!-- Crest Infosystems -->
        <div class="print-exp-item mb-3">
          <div class="d-flex justify-content-between align-items-baseline">
            <span class="fw-bold print-item-title">Crest Infosystems / NuVista AI</span>
            <span class="print-item-date">January 2024 – July 2026</span>
          </div>
          <div class="d-flex justify-content-between align-items-baseline small text-muted mb-1">
            <span class="fst-italic fw-semibold">SDE L2 / Software Engineer</span>
            <span>Surat, Gujarat, India</span>
          </div>
          <div class="small fw-semibold text-dark mb-1">
            <span class="text-secondary">Core Stack:</span> React.js, Next.js, TypeScript, Node.js, NestJS, Express.js, PostgreSQL, MongoDB, Redis, DynamoDB, AWS Lambda, S3, Docker, BullMQ, WebSockets, REST APIs, Microservices
          </div>
          <ul class="print-bullet-list">
            <li>Architected and scaled production full-stack microservices, event-driven backends, and serverless applications handling multi-tenant real-time workloads.</li>
            <li>Engineered Agentic AI workflows using LangChain, LangGraph, RAG, and LLM orchestration for automated document processing, multi-agent tasks, and contextual retrieval.</li>
            <li>Designed and maintained complex database models across PostgreSQL, MongoDB, and Redis with optimized compound indexing, connection pooling, and sub-second latencies.</li>
            <li>Led technical implementation across 8 commercial projects including Digifama, Intarp, Adbox, Kindertales, Pikhaul, and Wakabay 3PL logistics.</li>
          </ul>
        </div>

        <!-- Wholetax -->
        <div class="print-exp-item mb-3">
          <div class="d-flex justify-content-between align-items-baseline">
            <span class="fw-bold print-item-title">Wholetax Pvt. Ltd.</span>
            <span class="print-item-date">July 2023 – December 2023</span>
          </div>
          <div class="d-flex justify-content-between align-items-baseline small text-muted mb-1">
            <span class="fst-italic fw-semibold">Software Engineer</span>
            <span>Surat, Gujarat, India</span>
          </div>
          <div class="small fw-semibold text-dark mb-1">
            <span class="text-secondary">Core Stack:</span> Node.js, Express.js, React.js, Next.js, PostgreSQL, MongoDB, Redis, Docker, AWS, REST APIs, QR Tracking
          </div>
          <ul class="print-bullet-list">
            <li>Engineered enterprise supply chain management and automated logistics platforms with end-to-end QR code tracking and parcel movement monitoring.</li>
            <li>Reduced physical inventory reconciliation time by ~60% through automated scanning workflows and centralized event logging pipelines.</li>
            <li>Architected role-based RESTful APIs and real-time operational dashboards for warehouse dispatch and business-critical asset visibility.</li>
          </ul>
        </div>

        <!-- TuteDude -->
        <div class="print-exp-item mb-0">
          <div class="d-flex justify-content-between align-items-baseline">
            <span class="fw-bold print-item-title">TuteDude</span>
            <span class="print-item-date">June 2020 – July 2023</span>
          </div>
          <div class="d-flex justify-content-between align-items-baseline small text-muted mb-1">
            <span class="fst-italic fw-semibold">Software Engineer</span>
            <span>India</span>
          </div>
          <div class="small fw-semibold text-dark mb-1">
            <span class="text-secondary">Core Stack:</span> React.js, Node.js, Express.js, MongoDB, REST APIs, JWT, AWS, Docker, Video Streaming Microservices
          </div>
          <ul class="print-bullet-list">
            <li>Built core functionality for a production EdTech online course delivery platform, including video lesson playback and progress tracking.</li>
            <li>Architected dedicated video streaming microservice with secure media access controls, chunked streaming, and instructor upload workflows.</li>
            <li>Designed administrative portals, curriculum authoring tools, and MongoDB aggregation pipelines tracking student engagement and course completions.</li>
          </ul>
        </div>
      </section>
    </div>

    <!-- PRINT PAGE 2 -->
    <div class="print-page print-page-2">
      <section class="print-section mb-3">
        <h2 class="print-section-title">Education</h2>

        <!-- Master's -->
        <div class="print-edu-item mb-2">
          <div class="d-flex justify-content-between align-items-baseline">
            <span class="fw-bold print-item-title">University of Helsinki</span>
            <span class="print-item-date">August 2026 – Present</span>
          </div>
          <div class="d-flex justify-content-between align-items-baseline small text-muted">
            <span class="fst-italic fw-semibold">Master of Science (M.Sc.) in Computer Science</span>
            <span>Helsinki, Finland • Ongoing</span>
          </div>
          <div class="small mt-1">
            <span class="fw-semibold">Core Focus:</span> Mix of software development and Agentic systems, combining advanced software engineering with autonomous AI agents and scalable distributed architecture.
          </div>
          <div class="small text-success fw-bold mt-1">
            ★ Awarded 100% Merit-Based Tuition Scholarship (University of Helsinki — 2026)
          </div>
        </div>

        <!-- Bachelor's -->
        <div class="print-edu-item mb-0">
          <div class="d-flex justify-content-between align-items-baseline">
            <span class="fw-bold print-item-title">GTU - Gujarat Technological University</span>
            <span class="print-item-date">2020 – 2024</span>
          </div>
          <div class="d-flex justify-content-between align-items-baseline small text-muted">
            <span class="fst-italic fw-semibold">Bachelor of Engineering (B.E.) in Information Technology</span>
            <span>Gujarat, India</span>
          </div>
          <div class="small mt-1">
            <span class="fw-semibold">Academic Excellence:</span> CGPA: 9.45 / 10.0 • Graduated as <strong class="text-dark">College Topper</strong> with highest academic distinction.
          </div>
        </div>
      </section>

      <section class="print-section mb-3">
        <h2 class="print-section-title">Technical Skills & Competencies</h2>
        <div class="print-skills-grid">
          <div class="print-skill-row">
            <strong class="print-skill-label">🤖 AI & LLM Engineering:</strong>
            <span class="print-skill-vals">Agentic AI, AI Agents, LLM Applications, RAG, LLM Orchestration, AI Workflow Automation, Tool Calling, Prompt Engineering, Context Engineering, Multi-Agent Systems, Vector Search, AI Solution Architecture</span>
          </div>
          <div class="print-skill-row">
            <strong class="print-skill-label">🧠 AI Frameworks:</strong>
            <span class="print-skill-vals">LangChain, LangGraph, LlamaIndex, pgvector, Pinecone, LLM APIs</span>
          </div>
          <div class="print-skill-row">
            <strong class="print-skill-label">⚙️ Software Engineering:</strong>
            <span class="print-skill-vals">Backend Engineering, Full Stack Development, Microservices, Distributed Systems, REST & GraphQL APIs, Real-Time Systems, Software Architecture, Performance Engineering, Automation</span>
          </div>
          <div class="print-skill-row">
            <strong class="print-skill-label">☁️ Cloud & Infrastructure:</strong>
            <span class="print-skill-vals">AWS (Lambda, EC2, S3, RDS, SQS, SES), Docker, CI/CD, Serverless, Cloud-Native Architecture</span>
          </div>
          <div class="print-skill-row">
            <strong class="print-skill-label">💻 Programming Languages:</strong>
            <span class="print-skill-vals">Python, TypeScript, JavaScript, SQL, Go, C/C++, Solidity</span>
          </div>
          <div class="print-skill-row">
            <strong class="print-skill-label">🧩 Frameworks & Libraries:</strong>
            <span class="print-skill-vals">Node.js, NestJS, Express, React, Next.js, Socket.IO, BullMQ, Tailwind CSS, MUI</span>
          </div>
          <div class="print-skill-row">
            <strong class="print-skill-label">🗄️ Databases & Storage:</strong>
            <span class="print-skill-vals">PostgreSQL, MongoDB, Redis, MySQL, DynamoDB, pgvector, Pinecone</span>
          </div>
          <div class="print-skill-row">
            <strong class="print-skill-label">⛓️ Additional / Web3:</strong>
            <span class="print-skill-vals">Ethereum, Solidity, Ethers.js, Web3</span>
          </div>
        </div>
      </section>

      <section class="print-section mb-3">
        <h2 class="print-section-title">Certifications</h2>
        <div class="row g-2">
          <div class="col-6">
            <div class="print-cert-box p-2 border rounded">
              <div class="fw-bold small">AWS Certified Developer - Associate</div>
              <div class="text-muted" style="font-size: 0.75rem;">Amazon Web Services • Verified Credential (Credly)</div>
            </div>
          </div>
          <div class="col-6">
            <div class="print-cert-box p-2 border rounded">
              <div class="fw-bold small">MongoDB Node.js Developer</div>
              <div class="text-muted" style="font-size: 0.75rem;">MongoDB Official Certification • Verified Credential</div>
            </div>
          </div>
        </div>
      </section>

      <section class="print-section mb-0">
        <h2 class="print-section-title">Honors & Achievements</h2>
        <div class="print-award-item small">
          <strong>Devang Mehta IT Awards (2022 & 2023):</strong> Facilitation of Toppers — Recognized with state-level IT award for academic excellence and graduating as College Topper.
        </div>
      </section>
    </div>
  `;
}
