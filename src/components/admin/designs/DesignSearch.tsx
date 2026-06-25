import {
  Search,
  Plus,
} from "lucide-react";

type Props = {
  value: string;

  onChange: (
    value: string
  ) => void;

  onAdd: () => void;
};

const DesignSearch = ({
  value,
  onChange,
  onAdd,
}: Props) => {
  return (
    <div
      className="
        mt-8
        flex
        flex-col
        lg:flex-row
        gap-4
        items-stretch
        lg:items-center
        justify-between
      "
    >
      {/* Search */}

      <div className="relative flex-1">

        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-500
          "
        />

        <input
          type="text"
          placeholder="Search Designs..."
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="
            w-full
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            py-3
            pl-12
            pr-4
            text-white
            outline-none
            placeholder:text-slate-500
            focus:border-blue-500
          "
        />

      </div>

      {/* Add */}

      <button
        onClick={onAdd}
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-blue-600
          px-6
          py-3
          text-white
          hover:bg-blue-700
          transition
        "
      >
        <Plus size={18} />

        Add Design

      </button>

    </div>
  );
};

export default DesignSearch;