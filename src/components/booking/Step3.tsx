import type { StepProps } from "../../types/stepProps";

const platforms = [
  {
    name: "Web Application",
    price: 0,
    icon: "🌐",
    description:
      "Runs in any modern browser and can be deployed online.",
  },
  {
    name: "Android Application",
    price: 300,
    icon: "🤖",
    description:
      "Native Android application for phones and tablets.",
  },
  {
    name: "iOS Application",
    price: 400,
    icon: "🍎",
    description:
      "Application optimized for iPhone and iPad devices.",
  },
  {
    name: "Cross Platform Application",
    price: 700,
    icon: "📱",
    description:
      "Single codebase supporting both Android and iOS.",
  },
];

const Step3 = ({
  formData,
  setFormData,
}: StepProps) => {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h3 className="text-xl font-semibold text-white">
          Select Platform
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          Choose where your project will run.
        </p>
      </div>

      {/* Platform Cards */}

      <div className="grid gap-4">

        {platforms.map((platform) => (
          <label
            key={platform.name}
            className={`
              cursor-pointer
              border
              rounded-2xl
              p-4
              md:p-5
              transition-all
              duration-300

              ${
                formData.platform ===
                platform.name
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
              name="platform"
              checked={
                formData.platform ===
                platform.name
              }
              onChange={() =>
                setFormData({
                  ...formData,
                  platform:
                    platform.name,
                })
              }
              className="hidden"
            />

            <div className="flex justify-between items-start gap-4">

              {/* Left Side */}

              <div className="flex gap-4">

                <div className="text-3xl">
                  {platform.icon}
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
                    {platform.name}
                  </h3>

                  <p
                    className="
                      text-slate-400
                      text-sm
                      mt-2
                      leading-6
                    "
                  >
                    {platform.description}
                  </p>

                  <p
                    className="
                      text-blue-400
                      font-medium
                      mt-3
                      text-sm
                    "
                  >
                    {platform.price === 0
                      ? "Included"
                      : `+ ₹${platform.price}`}
                  </p>

                </div>

              </div>

              {/* Selection Indicator */}

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
                    formData.platform ===
                    platform.name
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
                {formData.platform ===
                  platform.name && (
                  <div
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-white
                    "
                  />
                )}
              </div>

            </div>
          </label>
        ))}

      </div>

      {/* Information Box */}

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
          Platform Selection
        </h4>

        <p
          className="
            text-sm
            text-slate-300
            leading-6
          "
        >
          Web applications are included by
          default. Mobile applications require
          additional setup, testing and deployment
          support which may affect pricing.
        </p>
      </div>

    </div>
  );
};

export default Step3;