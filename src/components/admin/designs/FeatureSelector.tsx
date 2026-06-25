type Props = {
  features: string[];

  setFeatures: (
    value: string[]
  ) => void;
};

const availableFeatures = [
  "Responsive",
  "Dark Mode",
  "Authentication",
  "Dashboard",
  "Charts",
  "Admin Panel",
  "Analytics",
  "Notifications",
  "CRUD",
  "Role Based Access",
];

const FeatureSelector = ({
  features,
  setFeatures,
}: Props) => {
  const toggleFeature = (
    feature: string
  ) => {
    if (
      features.includes(feature)
    ) {
      setFeatures(
        features.filter(
          (item) =>
            item !== feature
        )
      );
    } else {
      setFeatures([
        ...features,
        feature,
      ]);
    }
  };

  return (
    <div className="space-y-3">

      <label className="text-white font-medium">
        Features
      </label>

      <div className="flex flex-wrap gap-3">

        {availableFeatures.map(
          (feature) => (
            <button
              key={feature}
              type="button"
              onClick={() =>
                toggleFeature(
                  feature
                )
              }
              className={`
                px-4
                py-2
                rounded-full
                border
                transition

                ${
                  features.includes(
                    feature
                  )
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-500"
                }
              `}
            >
              {feature}
            </button>
          )
        )}

      </div>

    </div>
  );
};

export default FeatureSelector;