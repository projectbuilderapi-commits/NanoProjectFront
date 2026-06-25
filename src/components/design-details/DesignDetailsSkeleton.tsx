const DesignDetailsSkeleton = () => {
  return (
    <div
      className="
        animate-pulse
        space-y-8
      "
    >
      <div
        className="
          h-12
          w-80
          rounded-xl
          bg-slate-800
        "
      />

      <div
        className="
          h-[450px]
          rounded-[30px]
          bg-slate-800
        "
      />

      <div
        className="
          grid
          gap-8
          lg:grid-cols-3
        "
      >
        <div
          className="
            lg:col-span-2
            space-y-6
          "
        >
          <div
            className="
              h-72
              rounded-[30px]
              bg-slate-800
            "
          />

          <div
            className="
              h-56
              rounded-[30px]
              bg-slate-800
            "
          />

          <div
            className="
              h-64
              rounded-[30px]
              bg-slate-800
            "
          />
        </div>

        <div
          className="
            h-96
            rounded-[30px]
            bg-slate-800
          "
        />

      </div>

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {Array.from({
          length: 3,
        }).map((_, index) => (
          <div
            key={index}
            className="
              h-96
              rounded-[30px]
              bg-slate-800
            "
          />
        ))}
      </div>

    </div>
  );
};

export default DesignDetailsSkeleton;