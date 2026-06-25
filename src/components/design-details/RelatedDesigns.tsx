import type {
  Design,
} from "../../types/design";

import DesignCard
  from "../designs/DesignCard";

type Props = {
  designs: Design[];
};

const RelatedDesigns = ({
  designs,
}: Props) => {
  return (
    <section className="space-y-8">

      <div>

        <h2
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Related Designs
        </h2>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Explore more UI inspirations.
        </p>

      </div>

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {designs.map((design) => (
          <DesignCard
            key={design._id}
            design={design}
          />
        ))}
      </div>

    </section>
  );
};

export default RelatedDesigns;