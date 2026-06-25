type Props = {
  technologies: string[];
};

const DesignTechnology = ({
  technologies,
}: Props) => {
  return (
    <section
      className="
        rounded-[30px]
        border
        border-slate-800
        bg-slate-900
        p-7
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        Technologies Used
      </h2>

      <div
        className="
          mt-7
          flex
          flex-wrap
          gap-3
        "
      >
        {technologies.map(
          (tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-slate-700
                bg-slate-800
                px-5
                py-2
                text-sm
                text-slate-300
              "
            >
              {tech}
            </span>
          )
        )}
      </div>
    </section>
  );
};

export default DesignTechnology;