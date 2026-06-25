import { Link } from "react-router-dom";

export interface Request {
  id: number;
  name: string;
  email: string;
  projectType: string;
  estimatedPrice: number;
  status: string;
  createdAt: string;
}

type RequestTableProps = {
  requests: Request[];
};

const RequestTable = ({
  requests,
}: RequestTableProps) => {
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

  return (
    <>
      {/* MOBILE VIEW */}

      <div className="lg:hidden space-y-4">
        {requests.length === 0 && (
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-8
              text-center
              text-slate-400
            "
          >
            No Requests Found
          </div>
        )}

        {requests.map((request) => (
          <div
            key={request.id}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-4
            "
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-semibold">
                  {request.name}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  {request.email}
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

            <div className="mt-4 space-y-2">
              <p className="text-slate-300 text-sm">
                Project:
                {" "}
                {request.projectType}
              </p>

              <p className="text-green-400 text-sm font-medium">
                ₹{request.estimatedPrice}
              </p>

              <p className="text-slate-500 text-xs">
                {request.createdAt}
              </p>
            </div>

            <Link
              to={`/admin/request/${request.id}`}
              className="
                mt-4
                block
                text-center
                bg-blue-600
                hover:bg-blue-700
                py-2.5
                rounded-xl
                text-white
                text-sm
                font-medium
              "
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}

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
        <table className="w-full">

          <thead>
            <tr
              className="
                border-b
                border-slate-800
                bg-slate-950
              "
            >
              <th className="p-5 text-left text-slate-400">
                Student
              </th>

              <th className="p-5 text-left text-slate-400">
                Project
              </th>

              <th className="p-5 text-left text-slate-400">
                Price
              </th>

              <th className="p-5 text-left text-slate-400">
                Status
              </th>

              <th className="p-5 text-left text-slate-400">
                Date
              </th>

              <th className="p-5 text-left text-slate-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {requests.length === 0 && (
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

            {requests.map((request) => (
              <tr
                key={request.id}
                className="
                  border-b
                  border-slate-800
                  hover:bg-slate-800/40
                  transition-all
                "
              >
                <td className="p-5">
                  <div>
                    <h3 className="text-white font-medium">
                      {request.name}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      {request.email}
                    </p>
                  </div>
                </td>

                <td className="p-5 text-slate-300">
                  {request.projectType}
                </td>

                <td className="p-5 text-green-400 font-medium">
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

                <td className="p-5 text-slate-400">
                  {request.createdAt}
                </td>

                <td className="p-5">
                  <Link
                    to={`/admin/request/${request.id}`}
                    className="
                      bg-blue-600
                      hover:bg-blue-700
                      px-4
                      py-2
                      rounded-lg
                      text-white
                      text-sm
                      font-medium
                    "
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </>
  );
};

export default RequestTable;