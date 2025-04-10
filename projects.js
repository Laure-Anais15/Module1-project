window.addEventListener("load", async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const data = await response.json();

    const mainProjectId = getQuerystringId();
    const mainProjectIndex = data.findIndex(
      (project) => project.uuid === mainProjectId //d'où sort project ici?
    );

    const mainProject = data[mainProjectIndex];
    addMainProject(mainProject);

    // Retire le projet principal de la liste et ajoute 3 autres projets
    data.splice(mainProjectIndex, 1);
    const otherProjects = data.slice(0, 3).reverse();
    console.log(otherProjects);
    addOtherProjects(otherProjects);
  } catch (error) {
    console.error("Error while loading", error);
  }
});

function getQuerystringId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function addMainProject(project) {
  if (!project) return;

  const mainHTML = `
    <h1 class="project-title">${project.name}</h1>
    <h4 class="project-subtitle">${project.description}</h4>
    <p class="right-side-p">Completed on <span class="subtitle-date">${project.completed_on}</span></p>
    <img src="${project.image}" alt="${project.name} image" class="simplify-page-image" />
    <p>${project.content}</p>
  `;

  const mainSection = document.getElementById("main-project");
  mainSection.innerHTML = mainHTML;
}

function addOtherProjects(projects) {
  const container = document.getElementById("projects");

  //probleme ?

  projects.forEach((project) => {
    const projectHTML = `
      <section>
      <h1 class="project-title">${project.name}</h1>
    <h4 class="project-subtitle">${project.description}</h4>
    <p class="right-side-p">Completed on <span class="subtitle-date">${project.completed_on}</span></p>
    <img src="${project.image}" alt="${project.name} image" class="simplify-page-image" />
    <p>${project.content}</p>
    `;
  });

  container.innerHTML = projectHTML;
  //return projectHTML;
}
