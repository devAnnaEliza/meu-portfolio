import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Portfólio",
    description: "Meu site pessoal",
    tech: "React + CSS"
  },
];

export default function Home() {
  return (
    <section>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </section>
  );
}
