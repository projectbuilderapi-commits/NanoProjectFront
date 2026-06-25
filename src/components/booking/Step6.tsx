import type { StepProps } from "../../types/stepProps";

const requirements = [
  {
    name: "Project Report",
    icon: "📄",
    price: 500,
    description:
      "Professional project report with objectives, methodology and implementation details.",
  },
  {
    name: "PowerPoint Presentation",
    icon: "📊",
    price: 200,
    description:
      "Presentation slides for project demonstration and review.",
  },
  {
    name: "Deployment Support",
    icon: "🚀",
    price: 500,
    description:
      "Deploy your project to cloud hosting platforms.",
  },
  {
    name: "Technical Documentation",
    icon: "📚",
    price: 300,
    description:
      "Complete setup guide, architecture and technical documentation.",
  },
  {
    name: "Viva & Project Guidance",
    icon: "🎓",
    price: 500,
    description:
      "Help with project explanation, architecture and viva preparation.",
  },
  {
    name: "No Additional Requirements",
    icon: "⭕",
    price: 0,
    description:
      "Continue with only the project deliverables.",
  },
];

const Step6 = ({
  formData,
  setFormData,
}: StepProps) => {
  const handleRequirement = (
    requirement: string
  ) => {
    if (
      requirement ===
      "No Additional Requirements"
    ) {
      setFormData({
        ...formData,
        requirements: [
          "No Additional Requirements",
        ],
      });

      return;
    }

    let updatedRequirements =
      formData.requirements.filter(
        (item) =>
          item !==
          "No Additional Requirements"
      );

    const exists =
      updatedRequirements.includes(
        requirement
      );

    if (exists) {
      updatedRequirements =
        updatedRequirements.filter(
          (item) =>
            item !== requirement
        );
    } else {
      updatedRequirements.push(
        requirement
      );
    }

    setFormData({
      ...formData,
      requirements:
        updatedRequirements,
    });
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h3 className="text-xl font-semibold text-white">
          Additional Services
          {formData.requirements.length >
            0 && (
            <span className="text-blue-400 ml-2">
              (
              {
                formData.requirements
                  .length
              }{" "}
              Selected)
            </span>
          )}
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          Select optional services to
          complement your project.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-4">

        {requirements.map(
          (requirement) => {
            const selected =
              formData.requirements.includes(
                requirement.name
              );

            return (
              <label
                key={
                  requirement.name
                }
                className={`
                  cursor-pointer
                  border
                  rounded-2xl
                  p-4
                  md:p-5
                  transition-all
                  duration-300

                  ${
                    selected
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
                  type="checkbox"
                  checked={
                    selected
                  }
                  onChange={() =>
                    handleRequirement(
                      requirement.name
                    )
                  }
                  className="hidden"
                />

                <div className="flex justify-between items-start gap-4">

                  <div className="flex gap-4">

                    <div className="text-3xl">
                      {
                        requirement.icon
                      }
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
                        {
                          requirement.name
                        }
                      </h3>

                      <p
                        className="
                          text-slate-400
                          text-sm
                          mt-2
                          leading-6
                        "
                      >
                        {
                          requirement.description
                        }
                      </p>

                      <p
                        className="
                          text-blue-400
                          font-medium
                          mt-3
                          text-sm
                        "
                      >
                        {requirement.price >
                        0
                          ? `+ ₹${requirement.price}`
                          : "Included"}
                      </p>

                      {requirement.name ===
                        "Deployment Support" && (
                        <p
                          className="
                            text-amber-300
                            text-xs
                            mt-2
                          "
                        >
                          Hosting,
                          domain and
                          third-party
                          services are
                          billed
                          separately.
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Checkbox */}

                  <div
                    className={`
                      w-6
                      h-6
                      rounded-md
                      border-2
                      flex
                      items-center
                      justify-center
                      shrink-0

                      ${
                        selected
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
                    {selected && (
                      <span className="text-white text-xs">
                        ✓
                      </span>
                    )}
                  </div>

                </div>
              </label>
            );
          }
        )}

      </div>

      {/* Summary */}

      <div
        className="
          bg-slate-800
          border
          border-slate-700
          rounded-2xl
          p-4
        "
      >
        <p className="text-slate-300 text-sm">
          Selected Services:
          <span className="text-blue-400 font-semibold ml-2">
            {
              formData.requirements
                .length
            }
          </span>
        </p>
      </div>

      {/* Info Box */}

      <div
        className="
          p-4
          rounded-2xl
          bg-blue-500/10
          border
          border-blue-500/20
        "
      >
        <h4 className="text-blue-300 font-medium mb-2">
          Additional Services Information
        </h4>

        <p
          className="
            text-sm
            text-slate-300
            leading-6
          "
        >
          These services are optional and
          can help with project submission,
          presentations, deployment and
          final-year project reviews.
        </p>
      </div>

    </div>
  );
};

export default Step6;