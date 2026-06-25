import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import TopBar from "../../components/admin/Topbar";
import TechnologySection from "../../components/admin/TechnologySection";
import FeaturesSection from "../../components/admin/FeaturesSection";
import ChallengesSection from "../../components/admin/ChallengesSection";
import StatsSection from "../../components/admin/StatsSection";
import type { ProjectFormData } from "../../types/project";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projectService";

const AddProjectPage = () => {
  const [project, setProject] =
  useState<ProjectFormData>({
    title: "",
    category: "",
    description: "",
    longDescription: "",
    image: "",
    screenshots: [""],
    technologies: [],
    features: [],
    challenges: [],
    stats: [],
    liveLink: "",
    githubLink: "",
  });
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        setLoading(true);
        setError("");

        await createProject(project);

        setSuccess(
          "Project Created Successfully"
        );

        setTimeout(() => {
          navigate(
            "/ASKadmin/projects"
          );
        }, 1500);

      } catch (error) {
        console.error(error);

        setError(
          "Failed to Create Project"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        />

      <main className="flex-1 p-8">

        <TopBar
            title="Add Project"
            setSidebarOpen={setSidebarOpen}
            />

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Basic Information */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-2xl text-white font-bold mb-6">
              Basic Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) =>
                  setProject({
                    ...project,
                    title: e.target.value,
                  })
                }
                className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-white"
              />

              <input
                type="text"
                placeholder="Category"
                value={project.category}
                onChange={(e) =>
                  setProject({
                    ...project,
                    category: e.target.value,
                  })
                }
                className="bg-slate-950 border border-slate-700 rounded-xl p-3 text-white"
              />

            </div>

            <textarea
              rows={3}
              placeholder="Short Description"
              value={project.description}
              onChange={(e) =>
                setProject({
                  ...project,
                  description: e.target.value,
                })
              }
              className="w-full mt-5 bg-slate-950 border border-slate-700 rounded-xl p-3 text-white"
            />

            <textarea
              rows={6}
              placeholder="Long Description"
              value={project.longDescription}
              onChange={(e) =>
                setProject({
                  ...project,
                  longDescription:
                    e.target.value,
                })
              }
              className="w-full mt-5 bg-slate-950 border border-slate-700 rounded-xl p-3 text-white"
            />

          </div>

          {/* Project Image */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-2xl text-white font-bold mb-6">
              Project Media
            </h2>

            <input
              type="text"
              placeholder="Cover Image URL"
              value={project.image}
              onChange={(e) =>
                setProject({
                  ...project,
                  image: e.target.value,
                })
              }
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white"
            />

          </div>

          {/* Technologies */}

          <TechnologySection
            project={project}
            setProject={setProject}
          />

          {/* Features */}

          <FeaturesSection
            project={project}
            setProject={setProject}
          />

          {/* Challenges */}

          <ChallengesSection
            project={project}
            setProject={setProject}
          />

          {/* Stats */}

          <StatsSection
            project={project}
            setProject={setProject}
          />

          {/* Links */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-2xl text-white font-bold mb-6">
              Project Links
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Live Demo URL"
                value={project.liveLink}
                onChange={(e) =>
                  setProject({
                    ...project,
                    liveLink:
                      e.target.value,
                  })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white"
              />

              <input
                type="text"
                placeholder="GitHub URL"
                value={project.githubLink}
                onChange={(e) =>
                  setProject({
                    ...project,
                    githubLink:
                      e.target.value,
                  })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white"
              />

            </div>

          </div>
          {success && (
            <div
              className="
                bg-green-500/10
                border
                border-green-500
                text-green-400
                p-4
                rounded-xl
              "
            >
              {success}
            </div>
          )}

          {error && (
            <div
              className="
                bg-red-500/10
                border
                border-red-500
                text-red-400
                p-4
                rounded-xl
              "
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              py-4
              rounded-xl
              text-white
              font-medium
              disabled:opacity-50
            "
          >
            {loading
              ? "Saving..."
              : "Save Project"}
          </button>

        </form>

      </main>
    </div>
  );
};

export default AddProjectPage;