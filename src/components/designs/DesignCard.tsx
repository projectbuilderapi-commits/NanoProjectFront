import {
  ExternalLink,
  User2,
  Layers3,
  Star,
  ArrowUpRight,
} from "lucide-react";

import type {
  Design,
} from "../../types/design";
import {
Link
}
from
"react-router-dom";

type Props = {
  design: Design;
};

const DesignCard = ({
  design,
}: Props) => {
  return (
    <Link

        to={`/designs/${design._id}`}

        className="block"

        >
    <article
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-slate-800
        bg-slate-900
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-950/40
      "
    >
      {/* Thumbnail */}

      <div
        className="
          relative
          overflow-hidden
        "
      >
        <img
          src={design.thumbnail}
          alt={design.title}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-transparent
            to-transparent
          "
        />

        {/* Featured */}

        {design.featured && (
          <div
            className="
              absolute
              left-4
              top-4
              flex
              items-center
              gap-2
              rounded-full
              bg-yellow-500/20
              px-3
              py-1.5
              text-xs
              font-medium
              text-yellow-400
              backdrop-blur
            "
          >
            <Star
              size={13}
              fill="currentColor"
            />

            Featured
          </div>
        )}

        {/* Category */}

        <div
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-slate-900/90
            px-3
            py-1.5
            text-xs
            text-slate-300
            backdrop-blur
          "
        >
          {design.category}
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div>

            <h2
              className="
                text-xl
                font-bold
                text-white
              "
            >
              {design.title}
            </h2>

            <p
              className="
                mt-3
                line-clamp-2
                text-sm
                leading-6
                text-slate-400
              "
            >
              {design.shortDescription}
            </p>

          </div>

          <ArrowUpRight
            size={20}
            className="
              text-slate-500
              transition
              group-hover:text-blue-400
            "
          />
        </div>

        {/* Technologies */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >
          {design.technologies
            .slice(0, 4)
            .map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-800
                  px-3
                  py-1.5
                  text-xs
                  text-slate-300
                "
              >
                {tech}
              </span>
            ))}
        </div>

        {/* Footer */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-slate-400
            "
          >
            <Layers3 size={15} />

            {design.difficulty}
          </div>

          <span
            className="
              rounded-full
              bg-emerald-500/15
              px-3
              py-1
              text-xs
              font-medium
              text-emerald-400
            "
          >
            {design.status}
          </span>
        </div>

        {/* Buttons */}

        <div
          className="
            mt-8
            flex
            gap-3
          "
        >
          <a
            href={design.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              rounded-2xl
              bg-blue-600
              py-3
              text-center
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-500
            "
          >
            Live Preview
          </a>

          <a
            href={design.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-700
              bg-slate-800
              text-slate-300
              transition
              hover:bg-slate-700
              hover:text-white
            "
          >
            <User2 size={18} />
          </a>

          <button
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-700
              bg-slate-800
              text-slate-300
              transition
              hover:bg-slate-700
              hover:text-white
            "
          >
            <ExternalLink size={18} />
          </button>

        </div>

      </div>
    </article>
    </Link>
  );
};

export default DesignCard;