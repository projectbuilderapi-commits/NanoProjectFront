const DesignSkeleton = () => {
  return (
    <div
      className="
        animate-pulse
        overflow-hidden
        rounded-[28px]
        border
        border-slate-800
        bg-slate-900
      "
    >
      {/* Image */}

      <div
        className="
          h-60
          w-full
          bg-slate-800
        "
      />

      <div className="p-6">

        {/* Featured Badge */}

        <div
          className="
            h-7
            w-28
            rounded-full
            bg-slate-800
          "
        />

        {/* Title */}

        <div
          className="
            mt-5
            h-8
            w-3/4
            rounded-lg
            bg-slate-800
          "
        />

        {/* Description */}

        <div className="mt-5 space-y-3">

          <div
            className="
              h-4
              rounded
              bg-slate-800
            "
          />

          <div
            className="
              h-4
              w-11/12
              rounded
              bg-slate-800
            "
          />

          <div
            className="
              h-4
              w-8/12
              rounded
              bg-slate-800
            "
          />

        </div>

        {/* Technology Chips */}

        <div
          className="
            mt-6
            flex
            gap-3
          "
        >
          <div
            className="
              h-8
              w-20
              rounded-full
              bg-slate-800
            "
          />

          <div
            className="
              h-8
              w-24
              rounded-full
              bg-slate-800
            "
          />

          <div
            className="
              h-8
              w-16
              rounded-full
              bg-slate-800
            "
          />
        </div>

        {/* Footer */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              h-5
              w-28
              rounded
              bg-slate-800
            "
          />

          <div
            className="
              h-7
              w-20
              rounded-full
              bg-slate-800
            "
          />
        </div>

        {/* Buttons */}

        <div
          className="
            mt-8
            flex
            gap-3
          "
        >
          <div
            className="
              h-11
              flex-1
              rounded-2xl
              bg-slate-800
            "
          />

          <div
            className="
              h-11
              w-11
              rounded-2xl
              bg-slate-800
            "
          />

          <div
            className="
              h-11
              w-11
              rounded-2xl
              bg-slate-800
            "
          />
        </div>

      </div>
    </div>
  );
};

export default DesignSkeleton;