import {
  Grid3X3,
  LayoutDashboard,
  Landmark,
  ShieldCheck,
  Smartphone,
  Globe,
} from "lucide-react";

const tabs = [
  {
    name: "All",
    icon: Grid3X3,
  },
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Finance",
    icon: Landmark,
  },
  {
    name: "Admin",
    icon: ShieldCheck,
  },
  {
    name: "Mobile",
    icon: Smartphone,
  },
  {
    name: "Web",
    icon: Globe,
  },
];

const CategoryTabs = () => {
  return (
    <section
      className="
        flex
        items-center
        justify-between
        gap-6
        flex-wrap
      "
    >
      {/* Tabs */}

      <div
        className="
          flex
          gap-3
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >
        {tabs.map((tab, index) => {
          const Icon =
            tab.icon;

          const active =
            index === 0;

          return (
            <button
              key={tab.name}
              className={`
                flex
                items-center
                gap-2
                whitespace-nowrap
                rounded-2xl
                border
                px-5
                py-3
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  active
                    ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              <Icon size={16} />

              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Right Side */}

      <div
        className="
          hidden
          lg:flex
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          px-4
          py-3
        "
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-emerald-500
          "
        />

        <span
          className="
            text-sm
            text-slate-400
          "
        >
          {tabs.length} Categories
        </span>
      </div>
    </section>
  );
};

export default CategoryTabs;