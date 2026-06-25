import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProjectById } from "../services/projectService";

import type { Project } from "../types/project";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

const ProjectDetailsPage = () => {
  const { id } = useParams();

  const [project, setProject] =
    useState<Project | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchProject =
      async () => {
        try {
          if (!id) return;

          const data =
            await getProjectById(id);

          setProject(data);
        } catch (error) {
          if(error instanceof Error){
            toast.error(`Failed to fetch projects: ${error.message}`);
          }
        } finally {
          setLoading(false);
        }
      };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white animate-pulse">
        <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              <div>

                <div className="w-28 h-5 bg-slate-800 rounded mb-6" />

                <div className="h-14 bg-slate-800 rounded mb-6" />

                <div className="h-5 bg-slate-800 rounded mb-3" />

                <div className="h-5 bg-slate-800 rounded w-4/5 mb-8" />

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="w-20 h-10 bg-slate-800 rounded-full" />
                  <div className="w-24 h-10 bg-slate-800 rounded-full" />
                  <div className="w-16 h-10 bg-slate-800 rounded-full" />
                </div>

                <div className="flex gap-4">
                  <div className="w-36 h-12 bg-slate-800 rounded-xl" />
                  <div className="w-36 h-12 bg-slate-800 rounded-xl" />
                </div>

              </div>

              <div className="h-[400px] bg-slate-800 rounded-3xl" />

            </div>
          </div>
        </section>

        {/* Overview Skeleton */}

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="w-64 h-10 bg-slate-800 rounded mb-8" />

            <div className="space-y-4">
              <div className="h-5 bg-slate-800 rounded" />
              <div className="h-5 bg-slate-800 rounded" />
              <div className="h-5 bg-slate-800 rounded w-5/6" />
            </div>

          </div>
        </section>

        {/* Features Skeleton */}

        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">

            <div className="w-52 h-10 bg-slate-800 rounded mb-10" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {Array.from({ length: 6 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="
                      bg-slate-950
                      border
                      border-slate-800
                      rounded-2xl
                      p-6
                    "
                  >
                    <div className="h-6 bg-slate-800 rounded" />
                  </div>
                )
              )}

            </div>

          </div>
        </section>

        {/* Stats Skeleton */}

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-6">

              {Array.from({ length: 4 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="
                      bg-slate-900
                      border
                      border-slate-800
                      rounded-2xl
                      p-6
                    "
                  >
                    <div className="h-12 bg-slate-800 rounded mb-4" />

                    <div className="h-5 bg-slate-800 rounded" />
                  </div>
                )
              )}

            </div>

          </div>
        </section>

      </div>
    );
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Project Not Found
          </h1>

          <Link
            to="/projects"
            className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-xl text-white"
          >
            Back To Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="inline-block
                                px-3
                                py-1
                                rounded-full
                                bg-blue-500/10
                                text-blue-400
                                text-xs
                                md:text-sm
                                font-medium">
                {project.category}
              </span>

              <div className="text-green-400 mb-3">
                ✓
              </div>

              <h1 className="text-3xl
                              sm:text-4xl
                              md:text-5xl
                              lg:text-6xl
                              font-bold
                              mt-4
                              leading-tight">
                {project.title}
              </h1>

              <p className="text-slate-400
                            mt-5
                            text-base
                            md:text-lg
                            leading-8
                            max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1.5
                      rounded-full
                      bg-slate-800
                      text-slate-300
                      text-xs md:text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex
                              flex-col
                              sm:flex-row
                              gap-4
                              mt-8">

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    px-6
                    py-3
                    rounded-xl
                    font-medium
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    border
                    border-slate-700
                    hover:border-blue-500
                    px-6
                    py-3
                    rounded-xl
                    font-medium
                  "
                >
                  Source Code
                </a>

              </div>

            </div>

            <div>
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  max-h-[500px]
                  object-cover
                  rounded-3xl
                  border
                  border-slate-800
                  shadow-xl
                "
              />
            </div>

          </div>

        </div>
      </section>

      {/* Overview */}

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Project Overview
          </h2>

          <p className="text-slate-400
                        leading-8
                        max-w-4xl
                        text-sm
                        md:text-base">
            {project.longDescription}
          </p>

        </div>
      </section>

      {/* Features */}

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {project.features.map((feature) => (
              <div
                key={feature}
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-2xl
                  p-5
                  hover:border-blue-500
                  transition-all
                  duration-300
                "
              >
                <h3 className="font-medium">
                  {feature}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Screenshots */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            Screenshots
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {project.screenshots.map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    hover:border-blue-500
                    transition-all
                    duration-300
                    w-full
                  "
                />
              )
            )}

          </div>

        </div>
      </section>

      {/* Challenges */}

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Technical Challenges
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {project.challenges.map(
              (challenge) => (
                <div
                  key={challenge}
                  className="
                    bg-slate-950
                    border
                    border-slate-800
                    rounded-2xl
                    p-6
                    hover:border-blue-500
                    transition-all
                    duration-300
                  "
                >
                  {challenge}
                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* Stats */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  p-5 md:p-6
                  text-center
                "
              >
                <h3 className="text-3xl md:text-5xl font-bold text-blue-500">
                  {stat.value}
                </h3>

                <p className="text-slate-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-14 md:py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            Need a Similar Project?
          </h2>

          <p className="text-slate-400 mt-4">
            Get a custom project built according
            to your requirements.
          </p>

          <Link
            to="/book"
            className="
              inline-block
              mt-8
              bg-blue-600
              hover:bg-blue-700
              px-6 md:px-8 py-3 md:py-4
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

export default ProjectDetailsPage;