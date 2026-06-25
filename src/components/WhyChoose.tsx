const reasons = [
  {
    title: "Modern Technologies",
    description:
      "Projects are built using React, Node.js, MongoDB, TypeScript and other industry-standard technologies.",
    icon: "⚡",
  },
  {
    title: "Complete Source Code",
    description:
      "Receive clean, structured source code with proper folder organization and setup instructions.",
    icon: "💻",
  },
  {
    title: "Affordable Pricing",
    description:
      "Flexible pricing designed specifically for students and academic projects.",
    icon: "💰",
  },
  {
    title: "Documentation Included",
    description:
      "Project reports, setup guides and technical documentation are provided when required.",
    icon: "📄",
  },
  {
    title: "Viva & Presentation Support",
    description:
      "Get guidance for explaining project architecture, workflow and implementation.",
    icon: "🎓",
  },
  {
    title: "Custom Built Solutions",
    description:
      "Every project is developed according to your requirements instead of using copied templates.",
    icon: "🚀",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="
        py-16
        md:py-24
        bg-slate-950
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
            WHY CHOOSE US
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
            Built For Students
          </h2>

          <p
            className="
              text-slate-400
              mt-4
              max-w-2xl
              mx-auto
              text-base
              md:text-lg
              leading-7
            "
          >
            Professional project development
            with source code, documentation
            and ongoing support.
          </p>
        </div>

        {/* Feature Cards */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="
                group
                relative
                overflow-hidden
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
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
                {/* Icon */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-2xl
                    mb-5
                  "
                >
                  {reason.icon}
                </div>

                {/* Title */}

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {reason.title}
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
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            md:gap-6
            mt-12
            md:mt-16
          "
        >
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-6
              text-center
            "
          >
            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-blue-500
              "
            >
              100%
            </h3>

            <p
              className="
                text-slate-400
                mt-2
                text-sm
                md:text-base
              "
            >
              Source Code Included
            </p>
          </div>

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-6
              text-center
            "
          >
            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-blue-500
              "
            >
              Fast
            </h3>

            <p
              className="
                text-slate-400
                mt-2
                text-sm
                md:text-base
              "
            >
              Project Delivery
            </p>
          </div>

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-6
              text-center
            "
          >
            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-blue-500
              "
            >
              Support
            </h3>

            <p
              className="
                text-slate-400
                mt-2
                text-sm
                md:text-base
              "
            >
              Documentation & Guidance
            </p>
          </div>
        </div>

        {/* Bottom Trust Line */}

        <div
          className="
            text-center
            mt-8
            text-slate-500
            text-sm
          "
        >
          Clean Code • Documentation • Deployment Support • Student Friendly Pricing
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;