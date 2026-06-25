import type { StepProps } from "../../types/stepProps";

const authOptions = [
  {
    name: "Email & Password",
    icon: "📧",
    price: 0,
    note: "Included",
    description:
      "Standard login system using email and password.",
  },
  {
    name: "Google Authentication",
    icon: "🔵",
    price: 500,
    description:
      "Allow users to sign in with their Google account.",
  },
  {
    name: "GitHub Authentication",
    icon: "🐙",
    price: 500,
    description:
      "Popular for developer and portfolio applications.",
  },
  {
    name: "Facebook Authentication",
    icon: "📘",
    price: 500,
    description:
      "Enable login using Facebook accounts.",
  },
  {
    name: "OTP Authentication",
    icon: "📱",
    price: 0,
    note:
      "Usage charges billed separately",
    description:
      "Login using mobile verification codes.",
  },
];

const Step4 = ({
  formData,
  setFormData,
}: StepProps) => {
  const handleChange = (
    option: string
  ) => {
    const exists =
      formData.authentication.includes(
        option
      );

    if (exists) {
      setFormData({
        ...formData,
        authentication:
          formData.authentication.filter(
            (item) =>
              item !== option
          ),
      });
    } else {
      setFormData({
        ...formData,
        authentication: [
          ...formData.authentication,
          option,
        ],
      });
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h3 className="text-xl font-semibold text-white">
          Authentication Options
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          Select one or more login methods
          required for your application.
        </p>
      </div>

      {/* Authentication Cards */}

      <div className="grid gap-4">

        {authOptions.map((option) => {
          const selected =
            formData.authentication.includes(
              option.name
            );

          return (
            <label
              key={option.name}
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
                checked={selected}
                onChange={() =>
                  handleChange(
                    option.name
                  )
                }
                className="hidden"
              />

              <div className="flex justify-between items-start gap-4">

                {/* Left Side */}

                <div className="flex gap-4">

                  <div className="text-3xl">
                    {option.icon}
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
                      {option.name}
                    </h3>

                    <p
                      className="
                        text-slate-400
                        text-sm
                        mt-2
                        leading-6
                      "
                    >
                      {option.description}
                    </p>

                    <p
                      className="
                        text-blue-400
                        font-medium
                        mt-3
                        text-sm
                      "
                    >
                      {option.price > 0
                        ? `+ ₹${option.price}`
                        : option.note}
                    </p>

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
        })}

      </div>

      {/* Selected Count */}

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
          Selected Authentication Methods:
          <span className="text-blue-400 font-semibold ml-2">
            {
              formData.authentication
                .length
            }
          </span>
        </p>
      </div>

      {/* Information Box */}

      <div
        className="
          p-4
          rounded-2xl
          bg-amber-500/10
          border
          border-amber-500/20
        "
      >
        <h4 className="text-amber-300 font-medium mb-2">
          Important Note
        </h4>

        <p
          className="
            text-sm
            text-slate-300
            leading-6
          "
        >
          OTP Authentication requires
          third-party SMS providers such as
          Twilio, MSG91 or Firebase Phone
          Authentication. SMS charges are
          determined by the provider and are
          not included in the estimated
          project cost.
        </p>
      </div>

    </div>
  );
};

export default Step4;