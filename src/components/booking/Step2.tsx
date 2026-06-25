import type { StepProps } from "../../types/stepProps";

const projectTypes = [
  {
    name: "Frontend Website",
    price: 1500,
    description:
      "Responsive websites built using React, TypeScript and modern UI technologies.",
    icon: "🌐",
  },
  {
    name: "Full Stack Application",
    price: 3000,
    description:
      "Frontend, backend, database and authentication in one complete solution.",
    icon: "🚀",
  },
  {
    name: "Backend API",
    price: 1500,
    description:
      "REST APIs, authentication, databases and server-side architecture.",
    icon: "⚙️",
  },
  {
    name: "Mobile Application",
    price: 3000,
    description:
      "Android and cross-platform mobile applications with modern UI.",
    icon: "📱",
  },
];

const Step2 = ({
  formData,
  setFormData,
}: StepProps) => {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h3 className="text-xl font-semibold text-white">
          Select Project Type
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          Choose the type of project you want
          to build.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-4">
        {projectTypes.map((project) => (
          <label
            key={project.name}
            className={`
              cursor-pointer
              border
              rounded-2xl
              p-4
              md:p-5
              transition-all
              duration-300

              ${
                formData.projectType ===
                project.name
                  ? `
                    border-blue-500
                    bg-blue-500/10
                    shadow-lg
                    shadow-blue-500/10
                  `
                  : `
                    border-slate-700
                    bg-slate-800
                    hover:border-slate-500
                  `
              }
            `}
          >
            <input
              type="radio"
              name="projectType"
              checked={
                formData.projectType ===
                project.name
              }
              onChange={() =>
                setFormData({
                  ...formData,
                  projectType:
                    project.name,
                })
              }
              className="hidden"
            />

            <div className="flex justify-between items-start gap-4">

              {/* Left */}

              <div className="flex gap-4">

                <div className="text-3xl">
                  {project.icon}
                </div>

                <div>
                  <h3
                    className="
                      text-white
                      font-semibold
                      text-base
                      md:text-lg
                    "
                  >
                    {project.name}
                  </h3>

                  <p
                    className="
                      text-slate-400
                      text-sm
                      mt-2
                      leading-6
                    "
                  >
                    {project.description}
                  </p>

                  <p
                    className="
                      text-blue-400
                      font-medium
                      mt-3
                      text-sm
                    "
                  >
                    Starting from ₹
                    {project.price}
                  </p>
                </div>

              </div>

              {/* Right */}

              <div
                className={`
                  w-6
                  h-6
                  rounded-full
                  border-2
                  flex
                  items-center
                  justify-center

                  ${
                    formData.projectType ===
                    project.name
                      ? `
                        border-blue-500
                        bg-blue-500
                      `
                      : `
                        border-slate-600
                      `
                  }
                `}
              >
                {formData.projectType ===
                  project.name && (
                  <div
                    className="
                      w-2
                      h-2
                      bg-white
                      rounded-full
                    "
                  />
                )}
              </div>

            </div>
          </label>
        ))}
      </div>

    </div>
  );
};

export default Step2;