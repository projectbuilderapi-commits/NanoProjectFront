import {
  LayoutGrid,
  ArrowUpDown,
} from "lucide-react";

type Props = {
  count: number;
};

const LatestDesigns = ({
  count,
}: Props) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      {/* Left */}

      <div>

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-800
            bg-slate-900
            px-3
            py-1.5
            text-xs
            text-blue-400
            font-medium
          "
        >
          <LayoutGrid size={14} />

          Design Gallery

        </div>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-white
          "
        >
          Latest Designs
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-slate-400
            max-w-xl
          "
        >
          Browse modern dashboard,
          mobile, landing page and web
          application UI designs created
          with React, Tailwind CSS and
          modern frontend technologies.
        </p>

      </div>

      {/* Right */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            px-5
            py-3
          "
        >
          <p className="text-xs text-slate-500">
            Total Designs
          </p>

          <h3
            className="
              mt-1
              text-2xl
              font-bold
              text-white
            "
          >
            {count}
          </h3>
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            px-4
            py-3
            text-sm
            text-slate-300
            transition
            hover:bg-slate-800
          "
        >
          <ArrowUpDown size={16} />

          Latest
        </button>

      </div>

    </div>
  );
};

export default LatestDesigns;