export const RequestsSkeleton = () => (
  <>
    {/* Desktop */}

    <div
      className="
        hidden
        md:block
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        overflow-hidden
      "
    >
      {Array.from({ length: 6 }).map(
        (_, index) => (
          <div
            key={index}
            className="
              h-16
              border-b
              border-slate-800
              animate-pulse
            "
          >
            <div className="h-full bg-slate-800/40" />
          </div>
        )
      )}
    </div>

    {/* Mobile */}

    <div className="md:hidden space-y-4">
      {Array.from({ length: 6 }).map(
        (_, index) => (
          <div
            key={index}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-5
              animate-pulse
            "
          >
            <div className="h-5 bg-slate-800 rounded w-1/2 mb-3" />
            <div className="h-4 bg-slate-800 rounded w-3/4 mb-3" />
            <div className="h-4 bg-slate-800 rounded w-1/3" />
          </div>
        )
      )}
    </div>
  </>
);