import PropTypes from "prop-types";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Ver projeto
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
