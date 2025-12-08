interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-700 mb-4">{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-600 font-semibold underline"
        >
          Ver Projeto
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
