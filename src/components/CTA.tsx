import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="
        py-16
        md:py-24
        bg-slate-950
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          md:px-6
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-slate-800
            bg-slate-900
            p-6
            md:p-12
            lg:p-16
            text-center
          "
        >
          {/* Background Glow */}

          <div
            className="
              absolute
              top-0
              left-0
              w-48
              h-48
              md:w-72
              md:h-72
              bg-blue-600/20
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0
              w-48
              h-48
              md:w-72
              md:h-72
              bg-cyan-500/20
              blur-[100px]
            "
          />

          <div className="relative z-10">
            {/* Badge */}

            <div className="mb-5">
              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-blue-400
                  text-xs
                  md:text-sm
                  font-medium
                "
              >
                START YOUR PROJECT
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                text-white
                leading-tight
              "
            >
              Ready To Build

              <span className="block text-blue-500">
                Your Next Project?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                text-slate-400
                max-w-2xl
                mx-auto
                mt-5
                text-base
                md:text-lg
                leading-7
              "
            >
              Get a custom project solution
              with modern technologies,
              clean architecture, complete
              source code and ongoing support.
            </p>

            {/* Benefits */}

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
                md:gap-4
                mt-8
              "
            >
              {[
                "Source Code Included",
                "Documentation Support",
                "Affordable Pricing",
                "Custom Development",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    md:px-4
                    py-2
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    text-slate-300
                    text-xs
                    md:text-sm
                  "
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            {/* Trust Line */}

            <div
              className="
                mt-6
                text-sm
                text-slate-500
              "
            >
              Fast Response • Student Friendly Pricing • Professional Delivery
            </div>

            {/* CTA Buttons */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-4
                mt-10
              "
            >
              <Link
                to="/book"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  text-white
                  px-8
                  py-3.5
                  rounded-xl
                  font-semibold
                  text-sm
                  md:text-base
                "
              >
                Book Your Project
              </Link>

              <Link
                to="/projects"
                className="
                  border
                  border-slate-700
                  hover:border-blue-500
                  transition
                  text-white
                  px-8
                  py-3.5
                  rounded-xl
                  font-semibold
                  text-sm
                  md:text-base
                "
              >
                View Projects
              </Link>
            </div>

            {/* Footer Text */}

            <p
              className="
                mt-8
                text-xs
                md:text-sm
                text-slate-500
              "
            >
              No hidden charges • Custom pricing based on requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;