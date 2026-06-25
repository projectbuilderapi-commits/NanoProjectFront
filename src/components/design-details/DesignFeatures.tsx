import {
  CheckCircle2,
} from "lucide-react";

const features = [
  "Responsive Layout",
  "Mobile Friendly",
  "Dark Theme",
  "Modern UI",
  "Clean Components",
  "Reusable Structure",
  "Fast Performance",
  "Production Ready",
];

const DesignFeatures = () => {
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
        Features
      </h2>

      <div
        className="
          mt-8
          grid
          gap-5
          sm:grid-cols-2
        "
      >
        {features.map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-3
            "
          >
            <CheckCircle2
              size={18}
              className="
                text-emerald-400
              "
            />

            <span
              className="
                text-slate-300
              "
            >
              {item}
            </span>

          </div>
        ))}
      </div>

    </section>
  );
};

export default DesignFeatures;