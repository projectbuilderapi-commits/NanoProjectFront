const steps = [
  {
    number: "01",
    title: "Submit Requirements",
    description:
      "Fill out the project request form with your requirements, features and preferred technologies.",
  },
  {
    number: "02",
    title: "Receive Estimate",
    description:
      "We review your requirements and provide a project timeline and estimated cost.",
  },
  {
    number: "03",
    title: "Project Discussion",
    description:
      "Requirements are finalized, milestones are planned and development begins.",
  },
  {
    number: "04",
    title: "Project Delivery",
    description:
      "Receive complete source code, documentation and deployment support.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="
        py-16
        md:py-24
        bg-slate-950
        relative
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
        "
      >
        {/* Heading */}

        <div
          className="
            text-center
            mb-12
            md:mb-16
          "
        >
          <span
            className="
              text-blue-500
              font-medium
              text-sm
              md:text-base
              tracking-wider
            "
          >
            PROCESS
          </span>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              mt-3
              text-white
            "
          >
            How It Works
          </h2>

          <p
            className="
              mt-4
              text-slate-400
              max-w-2xl
              mx-auto
              text-base
              md:text-lg
              leading-7
            "
          >
            A simple and transparent process
            from project request to final
            delivery.
          </p>
        </div>

        {/* Steps */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative
                overflow-hidden
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
                md:p-8
                hover:border-blue-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Hover Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-blue-500/0
                  group-hover:bg-blue-500/5
                  transition-all
                  duration-300
                "
              />

              <div className="relative z-10">
                {/* Step Number */}

                <div
                  className="
                    w-14
                    h-14
                    md:w-16
                    md:h-16
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-blue-500
                    text-xl
                    md:text-2xl
                    font-bold
                  "
                >
                  {step.number}
                </div>

                {/* Title */}

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                    mt-6
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    text-slate-400
                    mt-4
                    text-sm
                    md:text-base
                    leading-7
                  "
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}

        <div
          className="
            text-center
            mt-10
            text-slate-500
            text-sm
          "
        >
          Fast Response • Transparent Pricing • Professional Delivery
        </div>
      </div>
    </section>
  );
};

export default Process;