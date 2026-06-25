import {
  LayoutTemplate,
  Search,
} from "lucide-react";

const EmptyDesign = () => {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-slate-800
        bg-slate-900
        px-6
        py-16
        md:px-10
        md:py-20
        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          mx-auto
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-slate-800
          border
          border-slate-700
        "
      >
        <LayoutTemplate
          size={42}
          className="text-blue-400"
        />
      </div>

      {/* Heading */}

      <h2
        className="
          mt-8
          text-3xl
          font-bold
          text-white
        "
      >
        No Designs Found
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-4
          max-w-xl
          text-sm
          leading-7
          text-slate-400
        "
      >
        We couldn't find any UI designs
        matching your search. Try using
        different keywords or browse all
        available collections.
      </p>

      {/* Actions */}

      <div
        className="
          mt-10
          flex
          flex-col
          items-center
          justify-center
          gap-4
          sm:flex-row
        "
      >
        <button
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-blue-600
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition
            hover:bg-blue-500
          "
        >
          <Search size={16} />

          Browse All Designs
        </button>

        <button
          className="
            rounded-2xl
            border
            border-slate-700
            bg-slate-800
            px-6
            py-3
            text-sm
            font-medium
            text-slate-300
            transition
            hover:bg-slate-700
          "
        >
          Clear Search
        </button>
      </div>

      {/* Footer */}

      <p
        className="
          mt-10
          text-xs
          text-slate-500
        "
      >
        More UI designs will be added
        regularly to the collection.
      </p>
    </section>
  );
};

export default EmptyDesign;