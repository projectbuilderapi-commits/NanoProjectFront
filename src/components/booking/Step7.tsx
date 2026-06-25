import type { StepProps } from "../../types/stepProps";

const Step7 = ({
  formData,
  setFormData,
}: StepProps) => {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h3 className="text-xl font-semibold text-white">
          Project Requirements
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          Tell us about your project idea,
          expected features and any reference
          applications.
        </p>
      </div>

      {/* Project Title */}

      <div>
        <label
          className="
            block
            text-white
            text-sm
            font-medium
            mb-2
          "
        >
          Project Title
        </label>

        <input
          type="text"
          placeholder="Inventory Management System"
          value={formData.projectTitle}
          onChange={(e) =>
            setFormData({
              ...formData,
              projectTitle:
                e.target.value,
            })
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            p-3
            md:p-4
            text-white
            text-sm
            md:text-base
            focus:outline-none
            focus:border-blue-500
          "
        />
      </div>

      {/* Deadline */}

      <div>
        <label
          className="
            block
            text-white
            text-sm
            font-medium
            mb-2
          "
        >
          Expected Deadline
        </label>

        <input
          type="date"
          value={formData.deadline}
          onChange={(e) =>
            setFormData({
              ...formData,
              deadline:
                e.target.value,
            })
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            p-3
            md:p-4
            text-white
            text-sm
            md:text-base
            focus:outline-none
            focus:border-blue-500
          "
        />

        <p className="text-slate-500 text-xs mt-2">
          Choose your preferred submission date.
        </p>
      </div>

      {/* Reference Link */}

      <div>
        <label
          className="
            block
            text-white
            text-sm
            font-medium
            mb-2
          "
        >
          Reference Website / App
        </label>

        <input
          type="text"
          placeholder="https://example.com"
          value={formData.referenceLink}
          onChange={(e) =>
            setFormData({
              ...formData,
              referenceLink:
                e.target.value,
            })
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            p-3
            md:p-4
            text-white
            text-sm
            md:text-base
            focus:outline-none
            focus:border-blue-500
          "
        />

        <p className="text-slate-500 text-xs mt-2">
          Optional. Share any website, app or
          design inspiration.
        </p>
      </div>

      {/* Description */}

      <div>
        <label
          className="
            block
            text-white
            text-sm
            font-medium
            mb-2
          "
        >
          Project Description
        </label>

        <textarea
          rows={7}
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description:
                e.target.value,
            })
          }
          placeholder={`Example:

• User Registration & Login

• Admin Dashboard

• Product Management

• Payment Integration

• Reports & Analytics

• Preferred Stack:
  React + Node.js + MongoDB`}
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            p-3
            md:p-4
            text-white
            text-sm
            md:text-base
            focus:outline-none
            focus:border-blue-500
            resize-none
          "
        />

        <div className="flex justify-between mt-2">

          <p className="text-slate-500 text-xs">
            Provide as much detail as possible.
          </p>

          <p className="text-slate-500 text-xs">
            {formData.description.length}
            {" "}Characters
          </p>

        </div>
      </div>

      {/* Tips */}

      <div
        className="
          p-4
          rounded-2xl
          bg-blue-500/10
          border
          border-blue-500/20
        "
      >
        <h4 className="text-blue-300 font-medium mb-2">
          Better Requirements = Better Estimate
        </h4>

        <ul
          className="
            text-sm
            text-slate-300
            space-y-2
            leading-6
          "
        >
          <li>
            ✓ Mention important features.
          </li>

          <li>
            ✓ Include user roles if required.
          </li>

          <li>
            ✓ Share reference websites.
          </li>

          <li>
            ✓ Mention preferred technologies.
          </li>

          <li>
            ✓ Explain project objectives.
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Step7;