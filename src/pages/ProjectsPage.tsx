import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProjects } from "../services/projectService";

import type { Project } from "../types/project";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

const ProjectsPage = () => {
  const [projects, setProjects] =
    useState<Project[]>([]);

  const [loading, setLoading] =
    useState(true);
  
  useEffect(() => {
    const fetchProjects =
      async () => {
        try {
          const data =
            await getProjects();

          setProjects(data);
        } catch (error) {
          if(error instanceof Error){
            toast.error(`Failed to fetch projects: ${error.message}`);
          }
        } finally {
          setLoading(false);
        }
      };

    fetchProjects();
  }, []);
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

          <span className="text-blue-500">
            PORTFOLIO
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Featured Projects
          </h1>

          <p className="text-slate-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-lg leading-7">
            Explore some of the applications,
            platforms and solutions built using
            modern technologies.
          </p>

        </div>
      </section>

      {/* Projects Grid */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {loading &&
              Array.from({ length: 6 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="
                      bg-slate-900
                      border
                      border-slate-800
                      rounded-3xl
                      overflow-hidden
                      animate-pulse
                    "
                  >
                    <div className="h-52 bg-slate-800" />

                    <div className="p-6">

                      <div className="w-20 h-6 bg-slate-800 rounded-full mb-4" />

                      <div className="h-8 bg-slate-800 rounded mb-3" />

                      <div className="h-4 bg-slate-800 rounded mb-2" />

                      <div className="h-4 bg-slate-800 rounded w-3/4 mb-5" />

                      <div className="flex gap-2 mb-6">
                        <div className="w-16 h-6 bg-slate-800 rounded-full" />
                        <div className="w-20 h-6 bg-slate-800 rounded-full" />
                        <div className="w-14 h-6 bg-slate-800 rounded-full" />
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-1 h-10 bg-slate-800 rounded-xl" />
                        <div className="w-32 h-10 bg-slate-800 rounded-xl" />
                      </div>

                    </div>
                  </div>
                )
              )}

            {!loading && projects.length === 0 && (
              <div
                className="
                  col-span-full
                  text-center
                  text-slate-400
                "
              >
                No Projects Found
              </div>
            )}

            {!loading && projects.map((project) => (
              <div
                key={project._id}
                className="
                  bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-48 md:h-52
                    object-cover
                  "
                />

                <div className="p-5 md:p-6">

                  <span
                    className="
                      text-xs
                      bg-blue-500/10
                      text-blue-400
                      px-3
                      py-1
                      rounded-full
                    "
                  >
                    {project.category}
                  </span>

                  <h2 className="text-white text-xl md:text-2xl font-bold mt-4">
                    {project.title}
                  </h2>

                  <p className="text-slate-400 mt-3 text-sm md:text-base line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="
                            text-[11px] md:text-xs
                            bg-slate-800
                            text-slate-300
                            px-3
                            py-1
                            rounded-full
                          "
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  {/* Buttons */}

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">

                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="
                        flex-1
                        bg-blue-600
                        hover:bg-blue-700
                        text-center
                        text-white
                        py-2.5
                        rounded-xl
                        text-sm
                        font-medium
                        transition
                      "
                    >
                      Live Demo
                    </a>

                    <Link
                      to={`/projects/${project._id}`}
                      className="
                        bg-slate-800
                        hover:bg-slate-700
                        text-white
                        px-4
                        py-2.5
                        rounded-xl
                        text-center
                        text-sm
                        font-medium
                        transition
                      "
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;