import { useEffect, useState } from "react";

import ProjectGrid from "../components/projects/ProjectGrid.jsx";
import { getProjects } from "../services/projectApi.js";
import styles from "./ProjectsPage.module.css";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadProjects() {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadProjects();
  }, []);

  let pageContent;

  if (isLoading) {
    pageContent = (
      <div className={styles.message} role="status">
        Loading projects...
      </div>
    );
  } else if (errorMessage) {
    pageContent = (
      <div className={styles.errorMessage} role="alert">
        <h2>Projects could not be loaded</h2>
        <p>{errorMessage}</p>
      </div>
    );
  } else if (projects.length === 0) {
    pageContent = (
      <div className={styles.message}>
        <h2>No projects are currently available</h2>
        <p>Check back later or create the first SideQuest project.</p>
      </div>
    );
  } else {
    pageContent = <ProjectGrid projects={projects} />;
  }

  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Project discovery</p>
          <h1>Browse Projects</h1>
          <p className={styles.introduction}>
            Explore student projects, discover open roles, and find a
            team that matches your interests and skills.
          </p>
        </div>

        {!isLoading && !errorMessage && projects.length > 0 && (
          <p className={styles.projectCount}>
            {projects.length}{" "}
            {projects.length === 1 ? "project" : "projects"}
          </p>
        )}
      </header>

      {pageContent}
    </section>
  );
}

export default ProjectsPage;