const DesignSkeleton = () => {
  return (
    <div
      className="
        mt-8
        grid
        gap-5
      "
    >
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <div
          key={index}
          className="
            flex
            gap-5
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            p-5
            animate-pulse
          "
        >
          <div
            className="
              h-24
              w-32
              rounded-2xl
              bg-slate-800
            "
          />

          <div className="flex-1">

            <div
              className="
                h-5
                w-56
                rounded
                bg-slate-800
              "
            />

            <div
              className="
                mt-4
                h-4
                w-full
                rounded
                bg-slate-800
              "
            />

            <div
              className="
                mt-2
                h-4
                w-3/4
                rounded
                bg-slate-800
              "
            />

            <div
              className="
                mt-5
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
                  w-20
                  rounded-full
                  bg-slate-800
                "
              />

            </div>

          </div>

        </div>
      ))}
    </div>
  );
};

export default DesignSkeleton;