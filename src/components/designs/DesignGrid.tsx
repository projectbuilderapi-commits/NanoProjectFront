import type {
  Design,
} from "../../types/design";

import DesignCard
  from "./DesignCard";

type Props = {
  designs: Design[];
};

const DesignGrid = ({
  designs,
}: Props) => {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-slate-800
        bg-slate-900/40
        backdrop-blur-sm
        p-5
        md:p-7
        lg:p-8
      "
    >
      {/* Header */}

      <div
        className="
          mb-8
          flex
          items-center
          justify-between
        "
      >
        <div>

          <h3
            className="
              text-xl
              font-bold
              text-white
            "
          >
            Explore Designs
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-slate-400
            "
          >
            Browse modern UI inspirations
            for dashboards, mobile apps,
            landing pages and admin panels.
          </p>

        </div>

        <span
          className="
            hidden
            rounded-full
            border
            border-slate-700
            bg-slate-800
            px-4
            py-2
            text-xs
            font-medium
            text-slate-300
            md:block
          "
        >
          {designs.length} Designs
        </span>
      </div>

      {/* Grid */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
        "
      >
        {designs.map((design) => (
          <div
            key={design._id}
            className="
              animate-in
              fade-in
              duration-500
            "
          >
            <DesignCard
              design={design}
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default DesignGrid;