import type { ProjectFormData } from "../../types/project";

type Props = {
  project: {
    features: string[];
  };

  setProject: React.Dispatch<
    React.SetStateAction<ProjectFormData>
  >;
};

const FeaturesSection = ({
  project,
  setProject,
}: Props) => {
  const addFeature = () => {
    setProject((prev) => ({
      ...prev,
      features: [
        ...prev.features,
        "",
      ],
    }));
  };

  const updateFeature = (
    index: number,
    value: string
  ) => {
    const updated = [
      ...project.features,
    ];

    updated[index] = value;

    setProject((prev) => ({
      ...prev,
      features: updated,
    }));
  };

  const removeFeature = (
    index: number
  ) => {
    setProject((prev) => ({
      ...prev,
      features:
        prev.features.filter(
          (_: string, i: number) =>
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
        rounded-2xl
        md:rounded-3xl
        p-4
        md:p-6
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-4
          justify-between
          sm:items-center
          mb-6
        "
      >
        <div>
          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              text-white
            "
          >
            Project Features
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Add the key features available
            in this project.
          </p>
        </div>

        <button
          type="button"
          onClick={addFeature}
          className="
            bg-blue-600
            hover:bg-blue-700
            transition
            px-4
            py-2.5
            rounded-xl
            text-white
            text-sm
            font-medium
            w-full
            sm:w-auto
          "
        >
          + Add Feature
        </button>
      </div>

      {/* Empty State */}

      {project.features.length === 0 && (
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
            No features added yet.
          </p>
        </div>
      )}

      {/* Feature List */}

      <div className="space-y-4">
        {project.features.map(
          (feature, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >
              <input
                type="text"
                value={feature}
                placeholder="Example: JWT Authentication"
                onChange={(e) =>
                  updateFeature(
                    index,
                    e.target.value
                  )
                }
                className="
                  flex-1
                  bg-slate-950
                  border
                  border-slate-700
                  rounded-xl
                  p-3
                  text-white
                  text-sm
                  md:text-base
                  focus:outline-none
                  focus:border-blue-500
                "
              />

              <button
                type="button"
                onClick={() =>
                  removeFeature(index)
                }
                className="
                  bg-red-600
                  hover:bg-red-700
                  transition
                  px-4
                  py-3
                  rounded-xl
                  text-white
                  text-sm
                  font-medium
                  w-full
                  sm:w-auto
                "
              >
                Remove
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FeaturesSection;