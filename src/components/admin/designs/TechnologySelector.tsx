type Props = {
  technologies: string[];

  setTechnologies: (
    value: string[]
  ) => void;
};

const availableTechnologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Redux",
  "Spring Boot",
  "Java",
];

const TechnologySelector = ({
  technologies,
  setTechnologies,
}: Props) => {
  const toggleTechnology = (
    tech: string
  ) => {
    if (
      technologies.includes(tech)
    ) {
      setTechnologies(
        technologies.filter(
          (item) =>
            item !== tech
        )
      );
    } else {
      setTechnologies([
        ...technologies,
        tech,
      ]);
    }
  };

  return (
    <div className="space-y-3">

      <label className="text-white font-medium">
        Technologies
      </label>

      <div className="flex flex-wrap gap-3">

        {availableTechnologies.map(
          (tech) => (
            <button
              key={tech}
              type="button"
              onClick={() =>
                toggleTechnology(
                  tech
                )
              }
              className={`
                px-4
                py-2
                rounded-full
                border
                transition

                ${
                  technologies.includes(
                    tech
                  )
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-slate-900 border-slate-700 text-slate-300 hover:border-blue-500"
                }
              `}
            >
              {tech}
            </button>
          )
        )}

      </div>

    </div>
  );
};

export default TechnologySelector;