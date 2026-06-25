import type {
  Design,
} from "../../types/design";

type Props = {
  design: Design;
};

const DesignInfo = ({
  design,
}: Props) => {
  return (
    <section
      className="
        rounded-[30px]
        border
        border-slate-800
        bg-slate-900
        p-7
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        About this Design
      </h2>

      <p
        className="
          mt-5
          text-slate-400
          leading-8
        "
      >
        {design.description}
      </p>

      <div
        className="
          mt-8
          grid
          gap-5
          md:grid-cols-3
        "
      >
        <div>

          <p className="text-slate-500">
            Category
          </p>

          <h4
            className="
              mt-2
              font-semibold
              text-white
            "
          >
            {design.category}
          </h4>

        </div>

        <div>

          <p className="text-slate-500">
            Difficulty
          </p>

          <h4
            className="
              mt-2
              font-semibold
              text-white
            "
          >
            {design.difficulty}
          </h4>

        </div>

        <div>

          <p className="text-slate-500">
            Status
          </p>

          <h4
            className="
              mt-2
              font-semibold
              text-emerald-400
            "
          >
            {design.status}
          </h4>

        </div>

      </div>
    </section>
  );
};

export default DesignInfo;