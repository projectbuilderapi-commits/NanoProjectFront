import {
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import type {
  Design,
} from "../../../types/design";

type Props = {
  designs: Design[];

  onDelete: (
    design: Design
  ) => void;
};

const DesignTable = ({
  designs,
  onDelete,
}: Props) => {
  const navigate =
    useNavigate();

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
      "
    >
      <div className="overflow-x-auto">

        <table className="w-full min-w-[950px]">

          <thead>

            <tr className="border-b border-slate-800">

              <th className="p-5 text-left text-slate-400">
                Design
              </th>

              <th className="p-5 text-left text-slate-400">
                Category
              </th>

              <th className="p-5 text-left text-slate-400">
                Difficulty
              </th>

              <th className="p-5 text-left text-slate-400">
                Status
              </th>

              <th className="p-5 text-left text-slate-400">
                Featured
              </th>

              <th className="p-5 text-right text-slate-400">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {designs.length === 0 && (

              <tr>

                <td
                  colSpan={6}
                  className="
                    p-10
                    text-center
                    text-slate-500
                  "
                >
                  No Designs Found
                </td>

              </tr>

            )}

            {designs.map((design) => (

              <tr
                key={design._id}
                className="
                  border-b
                  border-slate-800
                  transition-colors
                  hover:bg-slate-800/40
                "
              >

                {/* Design */}

                <td className="p-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={
                        design.thumbnail ||
                        "/placeholder.png"
                      }
                      alt={design.title}
                      className="
                        h-16
                        w-20
                        rounded-xl
                        object-cover
                        border
                        border-slate-700
                      "
                    />

                    <div>

                      <h3
                        className="
                          font-semibold
                          text-white
                        "
                      >
                        {design.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          max-w-sm
                          line-clamp-2
                          text-sm
                          text-slate-400
                        "
                      >
                        {
                          design.shortDescription
                        }
                      </p>

                    </div>

                  </div>

                </td>

                {/* Category */}

                <td className="p-5 text-slate-300">
                  {design.category}
                </td>

                {/* Difficulty */}

                <td className="p-5">

                  <span
                    className="
                      rounded-full
                      bg-slate-800
                      px-3
                      py-1
                      text-xs
                      text-slate-300
                    "
                  >
                    {design.difficulty}
                  </span>

                </td>

                {/* Status */}

                <td className="p-5">

                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-medium

                      ${
                        design.status ===
                        "Published"

                          ? "bg-emerald-500/20 text-emerald-400"

                          : "bg-yellow-500/20 text-yellow-400"
                      }
                    `}
                  >
                    {design.status}
                  </span>

                </td>

                {/* Featured */}

                <td className="p-5">

                  {design.featured ? (

                    <Star
                      size={18}
                      className="
                        fill-yellow-400
                        text-yellow-400
                      "
                    />

                  ) : (

                    <span className="text-slate-600">
                      —
                    </span>

                  )}

                </td>

                {/* Actions */}

                <td className="p-5">

                  <div
                    className="
                      flex
                      justify-end
                      gap-3
                    "
                  >

                    <button
                      onClick={() =>
                        navigate(
                         `/ASKadmin/design/edit/${design._id}`
                        )
                      }
                      className="
                        rounded-xl
                        bg-yellow-600
                        p-3
                        text-white
                        transition
                        hover:bg-yellow-700
                      "
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() =>
                        onDelete(design)
                      }
                      className="
                        rounded-xl
                        bg-red-600
                        p-3
                        text-white
                        transition
                        hover:bg-red-700
                      "
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default DesignTable;