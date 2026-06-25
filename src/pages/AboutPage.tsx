import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "50+",
    label: "APIs Developed",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "100+",
    label: "Students Helped",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "Python",
];

const services = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Applications",
  "Academic Projects",
  "Final Year Projects",
  "Project Documentation",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* Hero */}

      <section className="py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-blue-500 font-medium">
            ABOUT
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Building Modern Projects
            <span className="text-blue-500 block">
              For Students & Businesses
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-400 mt-8 text-lg">
            I develop full stack web applications,
            backend APIs and academic projects
            using modern technologies and industry
            best practices.
          </p>

        </div>
      </section>

      {/* About Me */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <h2 className="text-4xl font-bold mb-6">
                Who Am I?
              </h2>

              <p className="text-slate-400 leading-8">
                I'm a Full Stack Developer focused on
                building scalable web applications,
                backend systems and academic projects.
                My primary stack includes React,
                TypeScript, Node.js, MongoDB,
                PostgreSQL and Spring Boot.
              </p>

              <p className="text-slate-400 leading-8 mt-6">
                I enjoy solving real-world problems
                through software development and
                helping students turn project ideas
                into complete applications.
              </p>

            </div>

            <div
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
              "
            >
              <h3 className="text-2xl font-bold">
                Core Focus Areas
              </h3>

              <ul className="space-y-4 mt-6 text-slate-300">
                <li>✓ Full Stack Development</li>
                <li>✓ Backend APIs</li>
                <li>✓ Database Design</li>
                <li>✓ Authentication Systems</li>
                <li>✓ Academic Projects</li>
                <li>✓ Deployment Support</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Stats */}

      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  text-center
                "
              >
                <h3 className="text-4xl font-bold text-blue-500">
                  {stat.value}
                </h3>

                <p className="text-slate-400 mt-3">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Skills */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-5
                  py-3
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-full
                "
              >
                {skill}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* Services */}

      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <div
                key={service}
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                "
              >
                <h3 className="font-semibold text-lg">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Me */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Me
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="font-semibold text-xl">
                Modern Tech Stack
              </h3>

              <p className="text-slate-400 mt-4">
                Projects built using modern tools
                and best practices.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="font-semibold text-xl">
                Complete Source Code
              </h3>

              <p className="text-slate-400 mt-4">
                Clean and structured source code
                with documentation.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="font-semibold text-xl">
                Student Friendly
              </h3>

              <p className="text-slate-400 mt-4">
                Affordable pricing and guidance
                throughout the project lifecycle.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ready To Build Your Project?
          </h2>

          <p className="text-slate-400 mt-6">
            Let's discuss your requirements and
            turn your idea into a complete project.
          </p>

          <Link
            to="/book"
            className="
              inline-block
              mt-8
              bg-blue-600
              hover:bg-blue-700
              px-8
              py-4
              rounded-xl
              font-medium
            "
          >
            Book Project
          </Link>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;