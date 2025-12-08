interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-bold text-center my-8">
      {title}
    </h2>
  );
};

export default SectionTitle;
