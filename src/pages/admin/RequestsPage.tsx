import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/admin/Sidebar";
import TopBar from "../../components/admin/Topbar";
import { deleteRequest, getRequests } from "../../services/requestService";
import type { Request } from "../../types/request";
import { RequestsSkeleton } from "./RequestsSkeleton";
import toast from "react-hot-toast";

const RequestsPage = () => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] =
  useState(false);
  const [requests, setRequests] = useState<Request[]>([]);

  const [loading, setLoading] = useState(true);

  const filteredRequests = requests.filter(
    (request) =>
      request.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      request.projectType
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const getStatusColor = (
    status: string
  ) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400";

      case "In Progress":
        return "bg-blue-500/20 text-blue-400";

      case "Completed":
        return "bg-green-500/20 text-green-400";

      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

    useEffect(() => {
    const fetchRequests =
      async () => {
        try {
          const data =
            await getRequests();

          setRequests(data.data);
        } catch (error) {
          if(error instanceof Error){
            toast.error(`Failed to fetch requests: ${error.message}`);
          }
        } finally {
          setLoading(false);
        }
      };

    fetchRequests();
  }, []);

  const handleDelete = async (
      id: string
    ) => {
      const confirmed =
        window.confirm(
          "Delete this request?"
        );

      if (!confirmed) return;

      try {
        await deleteRequest(id);

        setRequests((prev) =>
          prev.filter(
            (request) =>
              request._id !== id
          )
        );
      } catch (error) {
        if(error instanceof Error){
          toast.error(`Failed to delete request: ${error.message}`);
        }
      }
    };

  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        />

      <main className="flex-1 p-4 md:p-8">

        <TopBar
        title="Requests"
        setSidebarOpen={setSidebarOpen}
        />

        {/* Heading */}

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-white">
            Requests
          </h1>

          <div className="text-slate-400">
            Total Requests: {requests.length}
          </div>

        </div>

        {/* Search */}

        <div className="mb-6">

          <input
            type="text"
            placeholder="Search by name or project..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              md:max-w-md
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              px-4
              py-3
              text-white
              focus:outline-none
              focus:border-blue-500
            "
          />

        </div>

        {/* Table */}

        {loading ? (
            <RequestsSkeleton />
          ) : (
            <>
              {/* Desktop Table */}

              <div
                className="
                  hidden
                  md:block
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  overflow-hidden
                "
              >
                <table className="w-full">

                  <thead>
                    <tr className="border-b border-slate-800">

                      <th className="text-left p-5 text-slate-400">
                        Name
                      </th>

                      <th className="text-left p-5 text-slate-400">
                        Project
                      </th>

                      <th className="text-left p-5 text-slate-400">
                        Price
                      </th>

                      <th className="text-left p-5 text-slate-400">
                        Status
                      </th>

                      <th className="text-left p-5 text-slate-400">
                        Date
                      </th>

                      <th className="text-left p-5 text-slate-400">
                        Action
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {filteredRequests.length === 0 && (
                      <tr>
                        <td
                          colSpan={6}
                          className="
                            text-center
                            text-slate-400
                            p-10
                          "
                        >
                          No Requests Found
                        </td>
                      </tr>
                    )}

                    {filteredRequests.map(
                      (request) => (
                        <tr
                          key={request._id}
                          className="
                            border-b
                            border-slate-800
                          "
                        >
                          <td className="p-5 text-white">
                            {request.name}
                          </td>

                          <td className="p-5 text-slate-300">
                            {request.projectType}
                          </td>

                          <td className="p-5 text-slate-300">
                            ₹{request.estimatedPrice}
                          </td>

                          <td className="p-5">
                            <span
                              className={`
                                px-3
                                py-1
                                rounded-full
                                text-sm
                                ${getStatusColor(
                                  request.status
                                )}
                              `}
                            >
                              {request.status}
                            </span>
                          </td>

                          <td className="p-5 text-slate-300">
                            {new Date(
                              request.createdAt
                            ).toLocaleDateString()}
                          </td>

                          <td className="p-5">

                            <div className="flex gap-2">

                              <Link
                                to={`/ASKadmin/request/${request._id}`}
                                className="
                                  bg-blue-600
                                  hover:bg-blue-700
                                  px-4
                                  py-2
                                  rounded-lg
                                  text-white
                                "
                              >
                                View
                              </Link>

                              <button
                                onClick={() =>
                                  handleDelete(
                                    request._id
                                  )
                                }
                                className="
                                  bg-red-600
                                  hover:bg-red-700
                                  px-4
                                  py-2
                                  rounded-lg
                                  text-white
                                "
                              >
                                Delete
                              </button>

                            </div>

                          </td>

                        </tr>
                      )
                    )}

                  </tbody>

                </table>
              </div>

              {/* Mobile Cards */}

              <div className="md:hidden space-y-4">

                {filteredRequests.map(
                  (request) => (
                    <div
                      key={request._id}
                      className="
                        bg-slate-900
                        border
                        border-slate-800
                        rounded-2xl
                        p-5
                      "
                    >
                      <div className="flex justify-between items-start">

                        <div>

                          <h3 className="text-white font-semibold">
                            {request.name}
                          </h3>

                          <p className="text-slate-400 text-sm mt-1">
                            {request.projectType}
                          </p>

                        </div>

                        <span
                          className={`
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            ${getStatusColor(
                              request.status
                            )}
                          `}
                        >
                          {request.status}
                        </span>

                      </div>

                      <p className="text-green-400 mt-3">
                        ₹{request.estimatedPrice}
                      </p>

                      <p className="text-slate-500 text-xs mt-1">
                        {new Date(
                          request.createdAt
                        ).toLocaleDateString()}
                      </p>

                      <div className="flex gap-2 mt-4">

                        <Link
                          to={`/ASKadmin/request/${request._id}`}
                          className="
                            flex-1
                            bg-blue-600
                            py-2
                            rounded-xl
                            text-center
                            text-white
                          "
                        >
                          View
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(
                              request._id
                            )
                          }
                          className="
                            flex-1
                            bg-red-600
                            py-2
                            rounded-xl
                            text-white
                          "
                        >
                          Delete
                        </button>

                      </div>

                    </div>
                  )
                )}

              </div>
            </>
          )}

      </main>

    </div>
  );
};

export default RequestsPage;