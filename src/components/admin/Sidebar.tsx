import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/ASKadmin/login");
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/ASKadmin/dashboard",
      icon: "📊",
    },
    {
      label: "Requests",
      path: "/ASKadmin/requests",
      icon: "📋",
    },
    {
      label: "Messages",
      path: "/ASKadmin/messages",
      icon: "✉️",
    },
    {
      label: "Projects",
      path: "/ASKadmin/projects",
      icon: "🚀",
    },
    {
      label: "Designs",
      path: "/ASKadmin/designs",
      icon: "",
    },
  ];

  return (
    <aside
      className={`
        fixed
        lg:static
        top-0
        left-0
        z-50
        h-screen
        w-72
        bg-slate-900
        border-r
        border-slate-800
        transform
        transition-transform
        duration-300
        flex
        flex-col

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0
      `}
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          p-5
          border-b
          border-slate-800
        "
      >
        <div>
          <h1
            className="
              text-xl
              md:text-2xl
              font-bold
              text-white
            "
          >
            Admin Panel
          </h1>

          <p className="text-slate-400 text-xs mt-1">
            Project Builder
          </p>
        </div>

        <button
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            lg:hidden
            text-slate-400
            hover:text-white
            text-xl
          "
        >
          ✕
        </button>
      </div>

      {/* Navigation */}

      <nav
        className="
          flex-1
          overflow-y-auto
          p-4
          space-y-2
        "
      >
        {menuItems.map((item) => {
          const active =
            location.pathname.startsWith(
              item.path
            );

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() =>
                setSidebarOpen(false)
              }
              className={`
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition-all

                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              <span>{item.icon}</span>

              <span className="font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}

      <div
        className="
          border-t
          border-slate-800
          p-4
        "
      >
        <button
          onClick={handleLogout}
          className="
            w-full
            bg-red-600
            hover:bg-red-700
            transition
            text-white
            py-3
            rounded-xl
            font-medium
          "
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;