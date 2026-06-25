import type { ProjectFormData } from "../../types/project";

type Props = {
  project: ProjectFormData;
  setProject: React.Dispatch<
    React.SetStateAction<ProjectFormData>
  >;
};

const ChallengesSection = ({
  project,
  setProject,
}: Props) => {
  const addChallenge = () => {
    setProject((prev) => ({
      ...prev,
      challenges: [
        ...prev.challenges,
        "",
      ],
    }));
  };

  const updateChallenge = (
    index: number,
    value: string
  ) => {
    const updated = [
      ...project.challenges,
    ];

    updated[index] = value;

    setProject((prev) => ({
      ...prev,
      challenges: updated,
    }));
  };

  const removeChallenge = (
    index: number
  ) => {
    setProject((prev) => ({
      ...prev,
      challenges:
        prev.challenges.filter(
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
            Technical Challenges
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Add project challenges and
            implementation difficulties.
          </p>
        </div>

        <button
          type="button"
          onClick={addChallenge}
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
          + Add Challenge
        </button>
      </div>

      {/* Empty State */}

      {project.challenges.length === 0 && (
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
            No challenges added yet.
          </p>
        </div>
      )}

      {/* Challenge List */}

      <div className="space-y-4">
        {project.challenges.map(
          (challenge, index) => (
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
                value={challenge}
                placeholder="Example: JWT Authentication Implementation"
                onChange={(e) =>
                  updateChallenge(
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
                  removeChallenge(index)
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

export default ChallengesSection;