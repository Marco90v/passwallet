interface SectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Section = ({icon, title, description, }: SectionProps) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export default Section;