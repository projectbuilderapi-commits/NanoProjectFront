import {
  Expand,
} from "lucide-react";

import type {
  Design,
} from "../../types/design";

type Props = {
  design: Design;
};

const DesignPreview = ({
  design,
}: Props) => {
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
      <div className="relative">

        <img
          src={design.thumbnail}
          alt={design.title}
          className="
            h-[240px]
            md:h-[500px]
            w-full
            object-cover
          "
        />

        <button
          className="
            absolute
            top-5
            right-5
            flex
            items-center
            gap-2
            rounded-2xl
            bg-slate-900/80
            px-4
            py-3
            text-white
            backdrop-blur
          "
        >
          <Expand size={18} />

          Preview
        </button>

      </div>
    </section>
  );
};

export default DesignPreview;