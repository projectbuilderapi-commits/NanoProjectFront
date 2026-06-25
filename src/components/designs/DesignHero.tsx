import {
  ArrowRight,
  Sparkles,
  Layers3,
} from "lucide-react";

const DesignHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-slate-800
        bg-slate-900
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -top-24
          -right-20
          h-80
          w-80
          rounded-full
          bg-blue-600/15
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -left-16
          h-72
          w-72
          rounded-full
          bg-violet-600/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          grid
          items-center
          gap-12
          px-6
          py-12
          lg:grid-cols-2
          lg:px-12
          lg:py-16
        "
      >
        {/* Left */}

        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-blue-400
            "
          >
            <Sparkles size={16} />

            Premium UI Collection

          </div>

          <h1
            className="
              mt-7
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-6xl
            "
          >
            Discover
            <span className="text-blue-500">
              {" "}Modern{" "}
            </span>
            UI Designs
            <br />

            For Your Next Project
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-8
              text-slate-400
            "
          >
            Explore beautifully crafted
            dashboard, mobile, landing
            page and admin panel UI
            designs built using React,
            Tailwind CSS and modern
            frontend technologies.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
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
                font-semibold
                text-white
                transition
                hover:bg-blue-500
              "
            >
              Browse Designs

              <ArrowRight size={16} />
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
              Learn More
            </button>
          </div>

        </div>

        {/* Right */}

        <div
          className="
            hidden
            lg:flex
            items-center
            justify-center
          "
        >
          <div
            className="
              w-full
              max-w-md
              rounded-[30px]
              border
              border-slate-700
              bg-slate-950
              p-6
              shadow-2xl
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div>

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  UI Library
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-400
                  "
                >
                  Premium Collection
                </p>

              </div>

              <div
                className="
                  rounded-2xl
                  bg-blue-600/20
                  p-3
                "
              >
                <Layers3
                  size={24}
                  className="text-blue-400"
                />
              </div>
            </div>

            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-4
              "
            >
              <div
                className="
                  rounded-2xl
                  bg-slate-900
                  p-5
                "
              >
                <p className="text-xs text-slate-500">
                  Dashboard
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  45+
                </h2>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-slate-900
                  p-5
                "
              >
                <p className="text-xs text-slate-500">
                  Mobile UI
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  32+
                </h2>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-slate-900
                  p-5
                "
              >
                <p className="text-xs text-slate-500">
                  Admin
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  18+
                </h2>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-slate-900
                  p-5
                "
              >
                <p className="text-xs text-slate-500">
                  Landing
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  26+
                </h2>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DesignHero;