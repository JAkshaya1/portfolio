function ProjectCard({ name, description, githubLink }) {
  return (
    <article className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </article>
  );
}

export default ProjectCard;
