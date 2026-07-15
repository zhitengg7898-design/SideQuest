import { useParams } from "react-router-dom";

function ProjectDetailsPage() {
  const { id } = useParams();

  return (
    <section>
      <h1>Project Details</h1>
      <p>Project ID: {id}</p>
    </section>
  );
}

export default ProjectDetailsPage;