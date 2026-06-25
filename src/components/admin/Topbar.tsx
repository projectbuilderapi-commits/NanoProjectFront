type TopBarProps = {
  title: string;
  setSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const TopBar = ({
  title,
  setSidebarOpen,
}: TopBarProps) => {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        bg-slate-950/90
        backdrop-blur-md
        border-b
        border-slate-800
        mb-6
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          py-4
          px-1
        "
      >
        {/* Left Side */}

        <div className="flex items-center gap-3 md:gap-4">

          <button
            onClick={() =>
              setSidebarOpen(true)
            }
            className="
              lg:hidden
              w-10
              h-10
              rounded-xl
              bg-slate-900
              border
              border-slate-800
              flex
              items-center
              justify-center
              text-white
              text-lg
              hover:border-blue-500
              transition
            "
          >
            ☰
          </button>

          <div>
            <h1
              className="
                text-xl
                md:text-3xl
                font-bold
                text-white
              "
            >
              {title}
            </h1>

            <p
              className="
                text-slate-400
                text-xs
                md:text-sm
                mt-1
                hidden
                sm:block
              "
            >
              Manage projects, requests and messages
            </p>
          </div>

        </div>

        {/* Right Side */}

        <div
          className="
            flex
            items-center
            gap-3
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            px-3
            py-2
          "
        >
          <div
            className="
              w-9
              h-9
              md:w-10
              md:h-10
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-sm
              md:text-base
            "
          >
            A
          </div>

          <div className="hidden sm:block">
            <p
              className="
                text-white
                text-sm
                font-medium
              "
            >
              Admin
            </p>

            <p
              className="
                text-slate-400
                text-xs
              "
            >
              Administrator
            </p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default TopBar;