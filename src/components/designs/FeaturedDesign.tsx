import {
  ArrowRight,
  Code2,
  ExternalLink,
  UserCog2Icon,
  Sparkles,
  Star,
} from "lucide-react";

import type {
  Design,
} from "../../types/design";

type Props = {
  design?: Design;
};

const FeaturedDesign = ({
  design,
}: Props) => {
  if (!design) return null;

  return (
    <section
      className="
        overflow-hidden
        rounded-[32px]
        border
        border-slate-800
        bg-slate-900
      "
    >
      <div
        className="
          grid
          lg:grid-cols-2
        "
      >
        {/* Left Image */}

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
              h-full
              w-full
              object-cover
              transition
              duration-500
              hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/70
              to-transparent
            "
          />

          <div
            className="
              absolute
              top-5
              left-5
            "
          >
            <span
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-yellow-500/20
                px-4
                py-2
                text-xs
                font-semibold
                text-yellow-400
              "
            >
              <Star
                size={14}
                fill="currentColor"
              />

              Featured Design
            </span>
          </div>
        </div>

        {/* Right Content */}

        <div
          className="
            flex
            flex-col
            justify-center
            p-7
            lg:p-10
          "
        >
          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-blue-500/10
              px-4
              py-2
              text-xs
              font-medium
              text-blue-400
            "
          >
            <Sparkles size={14} />

            Premium UI
          </div>

          <h2
            className="
              mt-6
              text-3xl
              lg:text-4xl
              font-bold
              text-white
            "
          >
            {design.title}
          </h2>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-slate-400
            "
          >
            {design.description}
          </p>

          {/* Technologies */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {design.technologies
              ?.slice(0, 5)
              .map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-800
                    px-4
                    py-2
                    text-xs
                    text-slate-300
                  "
                >
                  {tech}
                </span>
              ))}
          </div>

          {/* Info */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
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
              <Code2 size={16} />

              {design.category}
            </div>

            <div
              className="
                rounded-full
                bg-emerald-500/15
                px-4
                py-1
                text-xs
                font-medium
                text-emerald-400
              "
            >
              {design.difficulty}
            </div>
          </div>

          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >
            <a
              href={design.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                bg-blue-600
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-blue-500
              "
            >
              Live Preview

              <ArrowRight size={16} />
            </a>

            <a
              href={design.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-slate-700
                bg-slate-800
                px-6
                py-3
                text-sm
                text-slate-300
                transition
                hover:bg-slate-700
              "
            >
              <UserCog2Icon size={18} />

              GitHub
            </a>

            <a
              href={design.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-slate-700
                bg-slate-800
                px-6
                py-3
                text-sm
                text-slate-300
                transition
                hover:bg-slate-700
              "
            >
              <ExternalLink size={18} />

              Open
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesign;