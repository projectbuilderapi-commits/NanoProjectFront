import { Link } from "react-router-dom";

const technologies = [
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
  "Express.js"
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          py-12
          md:py-16
        "
      >
        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Brand */}

          <div className="lg:col-span-1">
            <h3
              className="
                text-xl
                md:text-2xl
                font-bold
                text-white
              "
            >
              Project
              <span className="text-blue-500">
                Builder
              </span>
            </h3>

            <p
              className="
                mt-4
                text-sm
                md:text-base
                text-slate-400
                leading-7
              "
            >
              Helping students build modern
              academic projects, web
              applications, mobile apps and
              backend systems using industry
              standard technologies.
            </p>

            <div className="mt-6">
              <p className="text-slate-500 text-sm">
                Student Friendly Pricing
              </p>

              <p className="text-slate-500 text-sm">
                Complete Source Code
              </p>

              <p className="text-slate-500 text-sm">
                Documentation Included
              </p>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h4
              className="
                text-white
                font-semibold
                mb-4
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="
                    text-slate-400
                    hover:text-white
                    transition
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="
                    text-slate-400
                    hover:text-white
                    transition
                  "
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="
                    text-slate-400
                    hover:text-white
                    transition
                  "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    text-slate-400
                    hover:text-white
                    transition
                  "
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="
                    text-slate-400
                    hover:text-white
                    transition
                  "
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h4
              className="
                text-white
                font-semibold
                mb-4
              "
            >
              Services
            </h4>

            <ul className="space-y-3">
              <li className="text-slate-400">
                Web Applications
              </li>

              <li className="text-slate-400">
                Mobile Applications
              </li>

              <li className="text-slate-400">
                Backend APIs
              </li>

              <li className="text-slate-400">
                Academic Projects
              </li>

              <li className="text-slate-400">
                Project Documentation
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4
              className="
                text-white
                font-semibold
                mb-4
              "
            >
              Contact
            </h4>

            <div className="space-y-3">
              <p className="text-slate-400">
                projectbuilderapi@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}

        <div
          className="
            mt-12
            pt-8
            border-t
            border-slate-800
          "
        >
          <h4
            className="
              text-white
              font-semibold
              mb-5
              text-center
            "
          >
            Technologies We Use
          </h4>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  px-3
                  py-1.5
                  rounded-full
                  bg-slate-900
                  border
                  border-slate-800
                  text-slate-400
                  text-xs
                  md:text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            border-t
            border-slate-800
            mt-10
            pt-8
            text-center
          "
        >
          <p
            className="
              text-slate-500
              text-sm
              md:text-base
            "
          >
            © 2026 Project Builder. All Rights
            Reserved.
          </p>

          <p
            className="
              text-slate-600
              text-xs
              md:text-sm
              mt-2
            "
          >
            Built with React, Node.js,
            MongoDB and TypeScript
          </p>

          <p
            className="
              text-slate-700
              text-xs
              mt-4
            "
          >
            Custom Projects • Source Code Included • Student Support
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;