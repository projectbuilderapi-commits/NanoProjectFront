import {
  ExternalLink,
  User2,
  Share2,
  Download,
} from "lucide-react";

import type {
  Design,
} from "../../types/design";

type Props = {
  design: Design;
};

const DesignActions = ({
  design,
}: Props) => {
  return (
    <div
      className="
        sticky
        top-28
        rounded-[30px]
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <h3
        className="
          text-xl
          font-semibold
          text-white
        "
      >
        Quick Actions
      </h3>

      <div className="mt-6 space-y-4">

        <a
          href={design.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-blue-600
            py-3
            text-white
            hover:bg-blue-500
          "
        >
          <ExternalLink size={18} />

          Live Preview
        </a>

        <a
          href={design.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-700
            bg-slate-800
            py-3
            text-slate-300
            hover:bg-slate-700
          "
        >
          <User2 size={18} />

          GitHub
        </a>

        <button
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-700
            bg-slate-800
            py-3
            text-slate-300
            hover:bg-slate-700
          "
        >
          <Download size={18} />

          Download
        </button>

        <button
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-700
            bg-slate-800
            py-3
            text-slate-300
            hover:bg-slate-700
          "
        >
          <Share2 size={18} />

          Share
        </button>

      </div>

    </div>
  );
};

export default DesignActions;