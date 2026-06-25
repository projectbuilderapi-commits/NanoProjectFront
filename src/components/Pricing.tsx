import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Frontend Website",
    price: "₹2,000+",
    features: [
      "Responsive Design",
      "Modern UI",
      "Source Code Included",
    ],
  },
  {
    title: "Full Stack Project",
    price: "₹3,000+",
    featured: true,
    features: [
      "Frontend + Backend",
      "Database Integration",
      "Authentication",
      "Deployment Support",
    ],
  },
  {
    title: "Backend APIs",
    price: "₹2,000+",
    features: [
      "REST APIs",
      "Authentication",
      "Database Design",
    ],
  },
  {
    title: "Academic Projects",
    price: "Custom",
    features: [
      "Mini Projects",
      "Major Projects",
      "Documentation Included",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="
        py-16
        md:py-24
        bg-slate-950
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
        "
      >
        {/* Heading */}

        <div
          className="
            text-center
            mb-12
            md:mb-16
          "
        >
          <span
            className="
              text-blue-500
              font-medium
              text-sm
              md:text-base
              tracking-wider
            "
          >
            PRICING
          </span>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-white
              mt-3
            "
          >
            Flexible Pricing
          </h2>

          <p
            className="
              text-slate-400
              mt-4
              max-w-2xl
              mx-auto
              text-base
              md:text-lg
              leading-7
            "
          >
            Pricing varies based on project
            complexity, features and technologies
            required.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`
                relative
                overflow-hidden
                rounded-3xl
                p-6
                border
                transition-all
                duration-300
                hover:-translate-y-2

                ${
                  plan.featured
                    ? `
                      bg-slate-900
                      border-blue-500
                      shadow-lg
                      shadow-blue-500/10
                    `
                    : `
                      bg-slate-900
                      border-slate-800
                      hover:border-blue-500
                    `
                }
              `}
            >
              {/* Popular Badge */}

              {plan.featured && (
                <div
                  className="
                    inline-block
                    bg-blue-600
                    text-white
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    font-medium
                  "
                >
                  Most Popular
                </div>
              )}

              {/* Plan Name */}

              <h3
                className="
                  text-xl
                  font-semibold
                  text-white
                  mt-4
                "
              >
                {plan.title}
              </h3>

              {/* Price */}

              <div className="mt-5">
                <span
                  className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    text-blue-500
                  "
                >
                  {plan.price}
                </span>
              </div>

              {/* Features */}

              <ul
                className="
                  mt-6
                  space-y-3
                "
              >
                {plan.features.map(
                  (feature) => (
                    <li
                      key={feature}
                      className="
                        text-slate-300
                        text-sm
                        md:text-base
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span className="text-green-400">
                        ✓
                      </span>

                      {feature}
                    </li>
                  )
                )}
              </ul>

              {/* Button */}

              <Link
                to="/book"
                className={`
                  block
                  text-center
                  mt-8
                  py-3
                  rounded-xl
                  font-medium
                  transition

                  ${
                    plan.featured
                      ? `
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                      `
                      : `
                        bg-slate-800
                        hover:bg-slate-700
                        text-white
                      `
                  }
                `}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            mt-12
          "
        >
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-5
              text-center
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-blue-500
              "
            >
              100%
            </h3>

            <p className="text-slate-400 mt-2 text-sm">
              Source Code Included
            </p>
          </div>

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-5
              text-center
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-blue-500
              "
            >
              Fast
            </h3>

            <p className="text-slate-400 mt-2 text-sm">
              Delivery Available
            </p>
          </div>

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-5
              text-center
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-blue-500
              "
            >
              Support
            </h3>

            <p className="text-slate-400 mt-2 text-sm">
              Documentation Included
            </p>
          </div>
        </div>

        {/* Footer Note */}

        <div className="text-center mt-10">
          <p
            className="
              text-slate-500
              text-sm
              max-w-3xl
              mx-auto
            "
          >
            Final pricing depends on project
            scope, technologies, timeline and
            custom requirements discussed during
            project planning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;