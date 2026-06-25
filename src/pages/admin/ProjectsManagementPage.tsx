import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/project";
import TopBar from "../../components/admin/Topbar";
import { deleteProject, getProjects, updateProject } from "../../services/projectService";
import toast from "react-hot-toast";

const ProjectsManagementPage = () => {
    const navigation =  useNavigate();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const [showEditModal, setShowEditModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

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
      useEffect(() => {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          fetchProjects();
        }, []);

      const filteredProjects =
        projects.filter(
          (project) =>
            project.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            project.category
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );
      
      const handleDelete =
        async (id: string) => {

          const confirmDelete =
            window.confirm(
              "Delete this project?"
            );

          if (!confirmDelete)
            return;

          try {

            await deleteProject(id);

            setProjects((prevProjects) =>
              prevProjects.filter(
                (project) =>
                  project._id !== id
              )
            );

          } catch (error) {
            if(error instanceof Error){
              toast.error(`Failed to delete project: ${error.message}`);
            }
          }finally{
            setShowDeleteModal(false);
          }
          
        };
    
    const handleEdit = (
        project: Project
      ) => {
        setSelectedProject(
          project
        );

        setShowEditModal(true);
      };

    const handleUpdate =
      async () => {
        try {
          if (!selectedProject) return;
          await updateProject(
            selectedProject._id,
            selectedProject
          );

          fetchProjects();

          setShowEditModal(false);

        } catch (error) {
          if(error instanceof Error){
            toast.error(`Failed to update project: ${error.message}`);
          }
        }
      };
  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        />
      {
        sidebarOpen && (
          <div
            onClick={() =>
              setSidebarOpen(false)
            }
            className="
              fixed
              inset-0
              bg-black/50
              z-40
              lg:hidden
            "
          />
        )
      }

      <main className="flex-1 p-4 md:p-8">

        <TopBar
        title="Projects"
        setSidebarOpen={setSidebarOpen}
        />

        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-4
            justify-between
            items-start
            lg:items-center
            mb-8
          "
        >

          <div>
            <h1
              className="
                text-2xl
                md:text-4xl
                font-bold
                text-white
              "
            >
              Projects
            </h1>

            <p className="text-slate-400 mt-1">
              Total Projects:
              {filteredProjects.length}
            </p>
          </div>
          <div className="w-full lg:max-w-md">

            <input
              type="text"
              placeholder="Search Projects..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                w-full
                max-w-md
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                px-4
                py-3
                text-white
              "
            />

          </div>

          <button
            onClick={() =>
              navigation(
                "/ASKadmin/project/new"
              )
            }
            className="
              bg-blue-600
              hover:bg-blue-700
              px-5
              py-3
              rounded-xl
              text-white
              w-full
              lg:w-auto
            "
          >
            + Add Project
          </button>

        </div>
        {loading ? (
          <div className="space-y-4">

            {Array.from({ length: 6 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="
                    h-24
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-2xl
                    animate-pulse
                  "
                />
              )
            )}

          </div>
        ) : (
          <>

        <div className="lg:hidden space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-4
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-40
                  object-cover
                  rounded-xl
                "
              />

              <div className="mt-4">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  {project.category}
                </p>

                <p className="text-slate-300 text-sm mt-3 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies
                  ?.slice(0, 3)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2
                        py-1
                        rounded-full
                        bg-slate-800
                        text-slate-300
                        text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() =>
                          handleEdit(project)
                        }
                  className="
                    flex-1
                    bg-yellow-600
                    hover:bg-yellow-700
                    py-2
                    rounded-xl
                    text-center
                    text-white
                    text-sm
                  "
                >
                  Edit
                </button>

                <button
                  onClick={() => {
                          setSelectedProject(project);
                          setShowDeleteModal(true);
                        }}
                  className="
                    flex-1
                    bg-red-600
                    hover:bg-red-700
                    py-2
                    rounded-xl
                    text-white
                    text-sm
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="
            hidden
            lg:block
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            overflow-hidden
          "
        >

          <table className="w-full min-w-[900px]">

            <thead>

              <tr className="border-b border-slate-800">

                <th className="p-5 text-left text-slate-400">
                  Project
                </th>

                <th className="p-5 text-left text-slate-400">
                  Category
                </th>

                <th className="p-5 text-left text-slate-400">
                  Technologies
                </th>

                <th className="p-5 text-left text-slate-400">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {!loading && filteredProjects.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="
                      text-center
                      py-16
                      text-slate-400
                    "
                  >
                    No Projects Found
                  </td>
                </tr>
              )}

              {filteredProjects.map((project) => (
                <tr
                  key={project._id}
                  className="
                    border-b
                    border-slate-800
                  "
                >
                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          w-16
                          h-16
                          object-cover
                          rounded-lg
                          overflow-x-auto
                        "
                      />

                      <div>

                        <h3 className="text-white">
                          {project.title}
                        </h3>

                        <p className="text-slate-400
                                      text-sm
                                      line-clamp-2">
                          {project.description.length > 80
                              ? `${project.description.slice(
                                  0,
                                  80
                                )}...`
                              : project.description}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="p-5 text-slate-300">
                    {project.category}
                  </td>

                  <td className="p-5">

                    <div className="flex flex-wrap gap-2">

                      {project.technologies
                        .slice(0, 3)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="
                              px-2
                              py-1
                              bg-slate-800
                              rounded-full
                              text-xs
                              text-slate-300
                            "
                          >
                            {tech}
                          </span>
                        ))}

                    </div>

                  </td>

                  <td className="p-5">

                    <div className="flex
                                    flex-col
                                    md:flex-row
                                    gap-2">

                      <button
                        onClick={() =>
                          handleEdit(project)
                        }
                        className="
                            bg-yellow-600
                            hover:bg-yellow-700
                            px-4
                            py-2
                            rounded-lg
                            text-white
                        "
                        >
                        Edit
                        </button>

                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setShowDeleteModal(true);
                        }}
                        className="
                          flex-1
                          bg-red-600
                          hover:bg-red-700
                          p-3
                          rounded-xl
                          text-white
                        "
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
        </>
      )}
        {
        showEditModal &&
        selectedProject && (
            <div
            className="
                fixed
                inset-0
                bg-black/70
                flex
                items-center
                justify-center
                z-50
            "
            >
            <div
                className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
                w-full
                max-w-2xl mx-4
                max-h-[90vh]
                overflow-y-auto
                "
            >
                <div className="flex justify-between mb-6">

                <h2 className="text-3xl font-bold text-white">
                    Edit Project
                </h2>

                <button
                    onClick={() =>
                    setShowEditModal(false)
                    }
                    className="text-white text-2xl"
                >
                    ×
                </button>

                </div>

                <div className="space-y-5">

                <input
                    type="text"
                    value={selectedProject.title}
                    onChange={(e) =>
                    setSelectedProject({
                        ...selectedProject,
                        title: e.target.value,
                    })
                    }
                    className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-xl
                    p-3
                    text-white
                    "
                />

                <textarea
                    rows={4}
                    value={
                    selectedProject.description
                    }
                    onChange={(e) =>
                    setSelectedProject({
                        ...selectedProject,
                        description:
                        e.target.value,
                    })
                    }
                    className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-xl
                    p-3
                    text-white
                    "
                />

                <button
                  onClick={handleUpdate}
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    px-6
                    py-3
                    rounded-xl
                    text-white
                  "
                >
                  Save Changes
                </button>

                </div>

            </div>
            </div>
        )
        }

        {
            showDeleteModal &&
            selectedProject && (
                <div
                className="
                    fixed
                    inset-0
                    bg-black/70
                    flex
                    items-center
                    justify-center
                    z-50
                    p-4
                "
                >
                <div
                    className="
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-3xl
                    p-8
                    w-full
                    max-w-md
                    "
                >
                    <h2 className="text-2xl font-bold text-white">
                    Delete Project
                    </h2>

                    <p className="text-slate-400 mt-4">
                    Are you sure you want to delete
                    <span className="text-white">
                        {" "}
                        {selectedProject.title}
                    </span>
                    ?
                    </p>

                    <div className="flex
                                    flex-col
                                    sm:flex-row
                                    gap-4
                                    mt-8">

                    <button
                        onClick={() =>
                        setShowDeleteModal(false)
                        }
                        className="
                        flex-1
                        border
                        border-slate-700
                        py-3
                        rounded-xl
                        text-white
                        "
                    >
                        Cancel
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          selectedProject._id
                        )
                      }
                      className="
                        flex-1
                        bg-red-600
                        hover:bg-red-700
                        py-3
                        rounded-xl
                        text-white
                      "
                    >
                      Delete
                    </button>

                    </div>

                </div>
                </div>
            )
            }

      </main>
      

    </div>
  );
};

export default ProjectsManagementPage;