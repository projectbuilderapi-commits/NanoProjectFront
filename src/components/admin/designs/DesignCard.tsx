import {
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import type {
  Design,
} from "../../../types/design";

type Props = {
  design: Design;

  onEdit?: (
    design: Design
  ) => void;

  onDelete?: (
    design: Design
  ) => void;
};

const DesignCard = ({
  design,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        overflow-hidden
      "
    >
      <img
        src={design.thumbnail}
        alt={design.title}
        className="
          h-48
          w-full
          object-cover
        "
      />

      <div className="p-5">

        <div
          className="
            flex
            justify-between
            items-start
          "
        >

          <div>

            <h2
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              {design.title}
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-slate-400
                line-clamp-2
              "
            >
              {design.shortDescription}
            </p>

          </div>

          {design.featured && (
            <Star
              size={18}
              className="
                fill-yellow-400
                text-yellow-400
              "
            />
          )}

        </div>

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >
          {design.technologies
            ?.slice(0, 3)
            .map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  bg-slate-800
                  px-3
                  py-1
                  text-xs
                  text-slate-300
                "
              >
                {tech}
              </span>
            ))}
        </div>

        <div
          className="
            mt-5
            flex
            justify-between
            items-center
          "
        >

          <span
            className="
              rounded-full
              bg-blue-600/20
              px-3
              py-1
              text-xs
              text-blue-400
            "
          >
            {design.category}
          </span>

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs

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

        </div>

        <div
          className="
            mt-6
            flex
            gap-3
          "
        >

          <button
            onClick={() =>
              onEdit?.(design)
            }
            className="
              flex-1
              rounded-xl
              bg-yellow-600
              py-3
              text-white
              hover:bg-yellow-700
            "
          >
            <Pencil
              size={18}
              className="mx-auto"
            />
          </button>

          <button
            onClick={() =>
              onDelete?.(design)
            }
            className="
              flex-1
              rounded-xl
              bg-red-600
              py-3
              text-white
              hover:bg-red-700
            "
          >
            <Trash2
              size={18}
              className="mx-auto"
            />
          </button>

        </div>

      </div>

    </div>
  );
};

export default DesignCard;