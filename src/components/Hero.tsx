import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        pt-15
        md:pt-10
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-10
          left-0
          w-52
          h-52
          md:w-72
          md:h-72
          bg-blue-600/20
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-10
          right-0
          w-52
          h-52
          md:w-72
          md:h-72
          bg-cyan-500/20
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          py-12
          md:py-24
        "
      >
        {/* Badge */}

        <div className="flex justify-center mb-6 md:mb-8">
          <span
            className="
              px-3
              md:px-4
              py-2
              rounded-full
              border
              border-slate-700
              bg-slate-900
              text-slate-300
              text-xs
              md:text-sm
              text-center
            "
          >
            🚀 Modern Web Apps • Mobile Apps • Backend APIs
          </span>
        </div>

        {/* Heading */}

        <div className="text-center">
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
            "
          >
            Build Your

            <span className="block text-blue-500">
              Academic Project
            </span>

            With Modern Technologies
          </h1>

          <p
            className="
              mt-6
              md:mt-8
              max-w-3xl
              mx-auto
              text-slate-400
              text-base
              md:text-lg
              lg:text-xl
              leading-7
            "
          >
            Professional academic projects built
            using React, Node.js, MongoDB and
            modern technologies with clean code,
            documentation and deployment support.
          </p>
        </div>

        {/* CTA Buttons */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
            justify-center
            mt-8
          "
        >
          <Link
            to="/book"
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              text-white
              px-6
              py-3
              rounded-xl
              text-sm
              md:text-base
              font-medium
            "
          >
            Book Project
          </Link>

          <Link
            to="/projects"
            className="
              border
              border-slate-700
              hover:border-blue-500
              transition
              text-white
              px-6
              py-3
              rounded-xl
              text-sm
              md:text-base
              font-medium
            "
          >
            View Projects
          </Link>
        </div>

        {/* Trust Line */}

        <div
          className="
            text-center
            text-slate-500
            text-sm
            mt-6
          "
        >
          Source Code Included • Documentation • Deployment Support
        </div>

        {/* Tech Stack */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-2
            md:gap-3
            mt-10
            md:mt-12
          "
        >
          {[
            "React",
            "Flutter",
            "React Native",
            "Java",
            "Spring Boot",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "TypeScript",
            "Tailwind CSS",
            "Express.js",
          ].map((tech) => (
            <span
              key={tech}
              className="
                px-3
                md:px-4
                py-2
                rounded-full
                bg-slate-900
                border
                border-slate-800
                text-slate-300
                text-xs
                md:text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-8
            max-w-4xl
            mx-auto
            mt-14
            md:mt-16
          "
        >
          <div className="text-center">
            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-blue-500
              "
            >
              20+
            </h3>

            <p
              className="
                text-slate-400
                mt-2
                text-sm
                md:text-base
              "
            >
              Projects Delivered
            </p>
          </div>

          <div className="text-center">
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

          <div className="text-center">
            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-blue-500
              "
            >
              24/7
            </h3>

            <p
              className="
                text-slate-400
                mt-2
                text-sm
                md:text-base
              "
            >
              Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;