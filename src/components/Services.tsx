const services = [
  {
    title: "Web Applications",
    description:
      "Custom web applications built for academic projects, startups, and businesses.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    icon: "🌐",
  },
  {
    title: "Mobile Applications",
    description:
      "Responsive and mobile-first applications with modern user experiences.",
    technologies: [
      "Flutter",
      "React Native",
    ],
    icon: "📱",
  },
  {
    title: "Backend APIs",
    description:
      "Secure APIs, authentication systems, database design and integrations.",
    technologies: [
      "Java",
      "Node.js",
      "Spring Boot",
      "Express",
      "MongoDB",
    ],
    icon: "⚙️",
  },
  {
    title: "Academic Projects",
    description:
      "Mini projects, major projects, research projects and final year solutions.",
    technologies: [
      "Documentation",
      "Source Code",
    ],
    icon: "🎓",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        py-16
        md:py-24
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
            SERVICES
          </span>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              mt-3
            "
          >
            What We Build
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
            End-to-end project development
            using modern technologies and
            industry-standard practices.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                relative
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-5
                md:p-6
                hover:border-blue-500
                hover:bg-slate-900/80
                transition-all
                duration-300
                hover:-translate-y-2
                overflow-hidden
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
                    text-4xl
                    md:text-5xl
                    mb-5
                  "
                >
                  {service.icon}
                </div>

                {/* Title */}

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {service.title}
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
                  {service.description}
                </p>

                {/* Tech Tags */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-6
                  "
                >
                  {service.technologies.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                          text-xs
                          md:text-sm
                          px-3
                          py-1.5
                          rounded-full
                          bg-slate-800
                          text-slate-300
                          border
                          border-slate-700
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Text */}

        <div
          className="
            text-center
            mt-10
            text-slate-500
            text-sm
          "
        >
          Clean Code • Documentation • Deployment Support • Source Code Included
        </div>
      </div>
    </section>
  );
};

export default Services;