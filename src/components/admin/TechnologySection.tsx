import type { ProjectFormData } from "../../types/project";

type Props = {
  project: ProjectFormData;
  setProject: React.Dispatch<
    React.SetStateAction<ProjectFormData>
  >;
};

const TechnologySection = ({
  project,
  setProject,
}: Props) => {
  const addTechnology = () => {
    setProject((prev) => ({
      ...prev,
      technologies: [
        ...prev.technologies,
        "",
      ],
    }));
  };

  const updateTechnology = (
    index: number,
    value: string
  ) => {
    const updated = [
      ...project.technologies,
    ];

    updated[index] = value;

    setProject((prev) => ({
      ...prev,
      technologies: updated,
    }));
  };

  const removeTechnology = (
    index: number
  ) => {
    setProject((prev) => ({
      ...prev,
      technologies:
        prev.technologies.filter(
          (_: string, i: number) =>
            i !== index
        ),
    }));
  };

  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-4
        md:p-6
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              text-white
            "
          >
            Technologies
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Add technologies used in this project
          </p>
        </div>

        <button
          type="button"
          onClick={addTechnology}
          className="
            bg-blue-600
            hover:bg-blue-700
            transition
            px-4
            py-2
            rounded-xl
            text-white
            text-sm
            md:text-base
            font-medium
          "
        >
          + Add Tech
        </button>

      </div>

      {/* Empty State */}

      {project.technologies.length === 0 && (
        <div
          className="
            border
            border-dashed
            border-slate-700
            rounded-2xl
            p-8
            text-center
          "
        >
          <p className="text-slate-400">
            No technologies added yet
          </p>
        </div>
      )}

      {/* Technology List */}

      <div className="space-y-4">

        {project.technologies.map(
          (tech, index) => (
            <div
              key={index}
              className="
                bg-slate-950
                border
                border-slate-800
                rounded-2xl
                p-4
              "
            >
              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  gap-3
                "
              >
                <input
                  type="text"
                  value={tech}
                  placeholder="React"
                  onChange={(e) =>
                    updateTechnology(
                      index,
                      e.target.value
                    )
                  }
                  className="
                    flex-1
                    bg-slate-900
                    border
                    border-slate-700
                    rounded-xl
                    p-3
                    text-white
                    text-sm
                    focus:outline-none
                    focus:border-blue-500
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    removeTechnology(
                      index
                    )
                  }
                  className="
                    bg-red-600
                    hover:bg-red-700
                    transition
                    rounded-xl
                    px-5
                    py-3
                    text-white
                    text-sm
                    font-medium
                    md:w-auto
                    w-full
                  "
                >
                  Remove
                </button>
              </div>
            </div>
          )
        )}

      </div>

      {/* Preview */}

      {project.technologies.filter(
        (tech) => tech.trim() !== ""
      ).length > 0 && (
        <div className="mt-6">

          <h3 className="text-slate-300 text-sm mb-3">
            Preview
          </h3>

          <div className="flex flex-wrap gap-2">

            {project.technologies
              .filter(
                (tech) =>
                  tech.trim() !== ""
              )
              .map((tech, index) => (
                <span
                  key={index}
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    text-blue-400
                    text-xs
                    md:text-sm
                  "
                >
                  {tech}
                </span>
              ))}

          </div>

        </div>
      )}

    </div>
  );
};

export default TechnologySection;