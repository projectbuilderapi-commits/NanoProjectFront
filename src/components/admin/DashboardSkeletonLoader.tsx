export const DashboardSkeleton = () => (
  <>
    {/* Stats */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map(
        (_, index) => (
          <div
            key={index}
            className="
              h-32
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              animate-pulse
            "
          />
        )
      )}
    </div>

    {/* Revenue + Project Types */}

    <div className="grid lg:grid-cols-2 gap-6 mt-8">

      <div
        className="
          h-48
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          animate-pulse
        "
      />

      <div
        className="
          h-48
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          animate-pulse
        "
      />

    </div>

    {/* Recent Requests */}

    <div
      className="
        mt-8
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
      "
    >

      <div className="h-8 w-48 bg-slate-800 rounded animate-pulse mb-6" />

      {Array.from({ length: 5 }).map(
        (_, index) => (
          <div
            key={index}
            className="
              flex
              justify-between
              items-center
              py-4
              border-b
              border-slate-800
            "
          >
            <div>
              <div className="h-4 w-40 bg-slate-800 rounded animate-pulse mb-2" />
              <div className="h-3 w-28 bg-slate-800 rounded animate-pulse" />
            </div>

            <div className="h-6 w-20 bg-slate-800 rounded-full animate-pulse" />
          </div>
        )
      )}

    </div>
  </>
);