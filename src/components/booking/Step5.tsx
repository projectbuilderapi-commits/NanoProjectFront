import type { StepProps } from "../../types/stepProps";

const features = [
  {
    name: "No Additional Features",
    icon: "⭕",
    price: 0,
    description:
      "Only the core project functionality will be included.",
  },
  {
    name: "Admin Dashboard",
    icon: "📊",
    price: 800,
    description:
      "Manage users, data, reports and application settings.",
  },
  {
    name: "File Upload",
    icon: "📁",
    price: 300,
    description:
      "Upload documents, images, PDFs and other files.",
  },
  {
    name: "Notifications",
    icon: "🔔",
    price: 300,
    description:
      "In-app alerts, reminders and status updates.",
  },
  {
    name: "Chat System",
    icon: "💬",
    price: 500,
    description:
      "Real-time communication between users.",
  },
  {
    name: "Payment Gateway",
    icon: "💳",
    price: 1000,
    description:
      "Accept online payments securely.",
    note:
      "Gateway charges not included",
  },
  {
    name: "Role Based Access",
    icon: "🔐",
    price: 500,
    description:
      "Admin, Staff and User permission management.",
  },
];

const Step5 = ({
  formData,
  setFormData,
}: StepProps) => {
  const handleFeature = (
    feature: string
  ) => {
    if (
      feature ===
      "No Additional Features"
    ) {
      setFormData({
        ...formData,
        features: [
          "No Additional Features",
        ],
      });

      return;
    }

    let updatedFeatures =
      formData.features.filter(
        (item) =>
          item !==
          "No Additional Features"
      );

    const exists =
      updatedFeatures.includes(
        feature
      );

    if (exists) {
      updatedFeatures =
        updatedFeatures.filter(
          (item) =>
            item !== feature
        );
    } else {
      updatedFeatures.push(feature);
    }

    setFormData({
      ...formData,
      features: updatedFeatures,
    });
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h3 className="text-xl font-semibold text-white">
          Additional Features
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          Select optional features to
          enhance your application.
        </p>
      </div>

      {/* Features */}

      <div className="grid gap-4">

        {features.map((feature) => {
          const selected =
            formData.features.includes(
              feature.name
            );

          return (
            <label
              key={feature.name}
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
                  handleFeature(
                    feature.name
                  )
                }
                className="hidden"
              />

              <div className="flex justify-between items-start gap-4">

                <div className="flex gap-4">

                  <div className="text-3xl">
                    {feature.icon}
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
                      {feature.name}
                    </h3>

                    <p
                      className="
                        text-slate-400
                        text-sm
                        mt-2
                        leading-6
                      "
                    >
                      {feature.description}
                    </p>

                    <p
                      className="
                        text-blue-400
                        font-medium
                        mt-3
                        text-sm
                      "
                    >
                      {feature.price === 0
                        ? "Included"
                        : `+ ₹${feature.price}`}
                    </p>

                    {feature.note && (
                      <p
                        className="
                          text-amber-300
                          text-xs
                          mt-2
                        "
                      >
                        {feature.note}
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
        })}

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
          Selected Features:
          <span className="text-blue-400 font-semibold ml-2">
            {formData.features.length}
          </span>
        </p>
      </div>

      {/* Important Note */}

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
          Payment Gateway Notice
        </h4>

        <p
          className="
            text-sm
            text-slate-300
            leading-6
          "
        >
          Payment providers such as
          Razorpay, Stripe and PayPal
          may charge transaction fees.
          These fees are determined by
          the provider and are not
          included in the project
          estimate.
        </p>
      </div>

    </div>
  );
};

export default Step5;