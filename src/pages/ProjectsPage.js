import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    name: 'Portfolio Website',
    description:
      'A responsive personal portfolio built with React to showcase profile, skills, and projects.',
    githubLink: 'https://github.com/your-username/portfolio-website',
  },
  {
    name: 'Smart Task Manager',
    description:
      'A task management app with prioritization, reminders, and progress tracking dashboards.',
    githubLink: 'https://github.com/your-username/smart-task-manager',
  },
];

function ProjectsPage() {
  return (
    <div>
      <h2 className="page-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
