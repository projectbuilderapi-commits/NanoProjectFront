import type { ProjectFormData } from "../../types/project";

type Stat = {
  label: string;
  value: string;
};

type Props = {
  project: {
    stats: Stat[];
  };
  setProject: React.Dispatch<
    React.SetStateAction<ProjectFormData>
  >;
};

const StatsSection = ({
  project,
  setProject,
}: Props) => {
  const addStat = () => {
    setProject((prev) => ({
      ...prev,
      stats: [
        ...prev.stats,
        {
          label: "",
          value: "",
        },
      ],
    }));
  };

  const updateStat = (
    index: number,
    field: keyof Stat,
    value: string
  ) => {
    const updated = [...project.stats];

    updated[index][field] = value;

    setProject((prev) => ({
      ...prev,
      stats: updated,
    }));
  };

  const removeStat = (
    index: number
  ) => {
    setProject((prev) => ({
      ...prev,
      stats: prev.stats.filter(
        (_, i: number) =>
          i !== index
      ),
    }));
  };

  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-4
        md:p-6
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              text-white
            "
          >
            Statistics
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Add project metrics and achievements
          </p>
        </div>

        <button
          type="button"
          onClick={addStat}
          className="
            bg-blue-600
            hover:bg-blue-700
            transition
            px-4
            py-2
            rounded-xl
            text-white
            text-sm
            md:text-base
            font-medium
          "
        >
          + Add Stat
        </button>

      </div>

      {/* Empty State */}

      {project.stats.length === 0 && (
        <div
          className="
            border
            border-dashed
            border-slate-700
            rounded-2xl
            p-8
            text-center
          "
        >
          <p className="text-slate-400">
            No statistics added yet
          </p>
        </div>
      )}

      {/* Stats */}

      <div className="space-y-4">

        {project.stats.map(
          (stat, index) => (
            <div
              key={index}
              className="
                bg-slate-950
                border
                border-slate-800
                rounded-2xl
                p-4
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-12
                  gap-3
                "
              >
                {/* Label */}

                <div className="md:col-span-5">
                  <input
                    type="text"
                    placeholder="Modules"
                    value={stat.label}
                    onChange={(e) =>
                      updateStat(
                        index,
                        "label",
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      bg-slate-900
                      border
                      border-slate-700
                      rounded-xl
                      p-3
                      text-white
                      text-sm
                      focus:outline-none
                      focus:border-blue-500
                    "
                  />
                </div>

                {/* Value */}

                <div className="md:col-span-5">
                  <input
                    type="text"
                    placeholder="9+"
                    value={stat.value}
                    onChange={(e) =>
                      updateStat(
                        index,
                        "value",
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      bg-slate-900
                      border
                      border-slate-700
                      rounded-xl
                      p-3
                      text-white
                      text-sm
                      focus:outline-none
                      focus:border-blue-500
                    "
                  />
                </div>

                {/* Remove */}

                <div className="md:col-span-2">
                  <button
                    type="button"
                    onClick={() =>
                      removeStat(index)
                    }
                    className="
                      w-full
                      bg-red-600
                      hover:bg-red-700
                      transition
                      rounded-xl
                      p-3
                      text-white
                      text-sm
                      font-medium
                    "
                  >
                    Remove
                  </button>
                </div>

              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
};

export default StatsSection;