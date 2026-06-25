import { useParams } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useEffect, useState } from "react";

import { getRequestById, updateRequestStatus } from "../../services/requestService";
import type { Request } from "../../types/request";
import TopBar from "../../components/admin/Topbar";
import toast from "react-hot-toast";

const RequestDetailsPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();

  const [request, setRequest] = useState<Request | null>(null);

  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState(
    request?.status || "Pending"
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

        case "Rejected":
          return "bg-red-500/20 text-red-400";

        default:
          return "bg-slate-500/20 text-slate-400";
      }
    };

  useEffect(() => {
    const fetchRequest =
      async () => {
        try {
          if (!id) return;

          const data =
            await getRequestById(id);

          setRequest(data.data);
        } catch (error) {
          if(error instanceof Error){
            toast.error(`Failed to fetch request: ${error.message}`);
          }
        } finally {
          setLoading(false);
        }
      };

    fetchRequest();
  }, [id]);

  const handleStatusUpdate =
    async () => {
      if(!request) return;
      try {
        await updateRequestStatus(
          request._id,
          status
        );

        setRequest({
          ...request,
          status,
        });
      } catch (error) {
        if(error instanceof Error){
            toast.error(`Failed to update request status: ${error.message}`);
          }
      }
    };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-slate-950">

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-3 sm:p-4 md:p-8">

          <div className="animate-pulse space-y-6">

            <div className="h-12 bg-slate-800 rounded-xl w-60" />

            {Array.from({ length: 6 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-3xl
                    h-40
                  "
                />
              )
            )}

          </div>

        </main>

      </div>
    );
  }

  if (!request) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <h1 className="text-white text-3xl">
          Request Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        />

      <main className="flex-1 p-4 md:p-8">

        <TopBar
        title="Request Details"
        setSidebarOpen={setSidebarOpen}
        />

        <div className="flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-5
                        mb-8">

          <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-white">
            Request Details
          </h1>

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-5
              mb-6
            "
          >
            <div className="flex flex-wrap gap-4 items-center">

              <div>
                <p className="text-slate-500 text-sm">
                  Request ID
                </p>

                <p className="text-white font-medium break-all">
                  {request._id}
                </p>
              </div>

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

            </div>
          </div>

          <div className="flex
                          flex-col
                          sm:flex-row
                          gap-3
                          w-full
                          lg:w-auto">

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="
                bg-slate-900
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                min-w-[180px]
                "
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Rejected</option>
            </select>

            <button
              onClick={handleStatusUpdate}
              className="
                bg-blue-600
                hover:bg-blue-700
                px-5
                py-3
                rounded-xl
                text-white
                font-medium
              "
            >
              Update Status
            </button>

          </div>

        </div>

        {/* Student Information */}

        <section
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
            mb-6
          "
        >
          <h2 className="text-lg md:text-2xl font-bold text-white mb-5">
            Student Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-300">

            <p>
              <strong>Name:</strong>
              {" "}
              {request.name}
            </p>

            <p>
              <strong>Email:</strong>
              {" "}
              {request.email}
            </p>

            <p>
              <strong>Phone:</strong>
              {" "}
              {request.phone}
            </p>

            <p>
              <strong>College:</strong>
              {" "}
              {request.college}
            </p>

          </div>

        </section>

        {/* Project Details */}

        <section
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
            mb-6
          "
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-5">
            Project Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-300">

            <p>
              <strong>Project Title:</strong>
              {" "}
              {request.projectTitle}
            </p>

            <p>
              <strong>Project Type:</strong>
              {" "}
              {request.projectType}
            </p>

            <p>
              <strong>Platform:</strong>
              {" "}
              {Array.isArray(request.platform)
                      ? request.platform.join(", ")
                      : request.platform}
            </p>

            <p>
              <strong>Deadline:</strong>
              {" "}
              {request.deadline}
            </p>

          </div>

        </section>

        {/* Authentication */}

        <section
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
            mb-6
          "
        >
          <h2 className="text-2xl font-bold text-white mb-5">
            Authentication
          </h2>

          <div className="flex flex-wrap gap-3">

            {request.authentication?.map(
              (item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-slate-800
                    text-slate-300
                    text-xs
                    md:text-sm
                  "
                >
                  {item}
                </span>
              )
            )}

          </div>

        </section>

        {/* Features */}

        <section
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
            mb-6
          "
        >
          <h2 className="text-2xl font-bold text-white mb-5">
            Features
          </h2>

          <div className="flex flex-wrap gap-3">

            {request.features?.map(
              (item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-slate-800
                    text-slate-300
                    text-xs
                    md:text-sm
                  "
                >
                  {item}
                </span>
              )
            )}

          </div>

        </section>

        {/* Additional Requirements */}

        <section
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
            mb-6
          "
        >
          <h2 className="text-2xl font-bold text-white mb-5">
            Additional Requirements
          </h2>

          <div className="flex flex-wrap gap-3">

            {request.requirements?.map(
              (item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-slate-800
                    text-slate-300
                    text-xs
                    md:text-sm
                  "
                >
                  {item}
                </span>
              )
            )}

          </div>

        </section>

        {/* Price */}

        <section
          className="
            bg-green-500/10
            border
            border-green-500/20
            rounded-3xl
            p-6
            mb-6
          "
        >
          <h2 className="text-green-400 text-2xl font-bold">
            Estimated Price
          </h2>

          <p className="text-2xl md:text-5xl font-bold text-white mt-4">
            ₹{request.estimatedPrice}
          </p>
        </section>

        {/* Description */}

        <section
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
          "
        >
          <h2 className="text-2xl font-bold text-white mb-5">
            Project Description
          </h2>

          <p className="text-slate-300
                        leading-7
                        md:leading-8
                        text-sm
                        md:text-base
                        whitespace-pre-wrap">
            {request.description}
          </p>

        </section>

      </main>

    </div>
  );
};

export default RequestDetailsPage;