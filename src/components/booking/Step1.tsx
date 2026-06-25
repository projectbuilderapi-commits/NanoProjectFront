import type { StepProps } from "../../types/stepProps";

const Step1 = ({
  formData,
  setFormData,
}: StepProps) => {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h3 className="text-xl font-semibold text-white">
          Student Information
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          Enter your contact details so we can
          reach you regarding your project.
        </p>
      </div>

      {/* Full Name */}

      <div>
        <label
          className="
            block
            text-sm
            font-medium
            text-slate-300
            mb-2
          "
        >
          Full Name
        </label>

        <input
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            text-white
            px-4
            py-3
            rounded-xl
            text-sm
            md:text-base
            placeholder:text-slate-500
            focus:outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            transition
          "
        />
      </div>

      {/* Email */}

      <div>
        <label
          className="
            block
            text-sm
            font-medium
            text-slate-300
            mb-2
          "
        >
          Email Address
        </label>

        <input
          type="email"
          autoComplete="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            text-white
            px-4
            py-3
            rounded-xl
            text-sm
            md:text-base
            placeholder:text-slate-500
            focus:outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            transition
          "
        />
      </div>

      {/* Phone */}

      <div>
        <label
          className="
            block
            text-sm
            font-medium
            text-slate-300
            mb-2
          "
        >
          Phone Number
        </label>

        <input
          type="tel"
          autoComplete="tel"
          placeholder="9876543210"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            text-white
            px-4
            py-3
            rounded-xl
            text-sm
            md:text-base
            placeholder:text-slate-500
            focus:outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            transition
          "
        />
      </div>

      {/* College */}

      <div>
        <label
          className="
            block
            text-sm
            font-medium
            text-slate-300
            mb-2
          "
        >
          College / University
        </label>

        <input
          type="text"
          placeholder="Enter your college name"
          value={formData.college}
          onChange={(e) =>
            setFormData({
              ...formData,
              college: e.target.value,
            })
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            text-white
            px-4
            py-3
            rounded-xl
            text-sm
            md:text-base
            placeholder:text-slate-500
            focus:outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            transition
          "
        />
      </div>

    </div>
  );
};

export default Step1;