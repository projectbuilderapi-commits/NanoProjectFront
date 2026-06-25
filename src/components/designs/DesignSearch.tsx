import {
  Search,
  X,
} from "lucide-react";

type Props = {
  value: string;

  onChange: (
    value: string
  ) => void;
};

const DesignSearch = ({
  value,
  onChange,
}: Props) => {
  return (
    <div className="relative">

      {/* Search Icon */}

      <Search
        size={18}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />

      {/* Input */}

      <input
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        placeholder="Search dashboard, finance, mobile UI..."
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          pl-14
          pr-28
          text-sm
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
        "
      />

      {/* Right Side */}

      <div
        className="
          absolute
          right-4
          top-1/2
          flex
          -translate-y-1/2
          items-center
          gap-2
        "
      >
        {value && (
          <button
            onClick={() =>
              onChange("")
            }
            className="
              rounded-full
              p-1
              text-slate-400
              transition
              hover:bg-slate-800
              hover:text-white
            "
          >
            <X size={16} />
          </button>
        )}

        <div
          className="
            hidden
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            px-2
            py-1
            text-[11px]
            font-medium
            text-slate-400
            md:flex
          "
        >
          ⌘ K
        </div>
      </div>

    </div>
  );
};

export default DesignSearch;