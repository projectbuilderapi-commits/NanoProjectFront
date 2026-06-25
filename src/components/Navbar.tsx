import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [open]);

  return (
    <>
      {/* Navbar */}

      <nav
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          bg-slate-950/80
          backdrop-blur-md
          border-b
          border-slate-800
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            md:px-6
            py-4
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            {/* Logo */}

            <Link
              to="/"
              className="
                text-xl
                md:text-2xl
                font-bold
                text-white
              "
            >
              Project
              <span className="text-blue-500">
                Builder
              </span>
            </Link>

            {/* Desktop Menu */}

            <div
              className="
                hidden
                md:flex
                items-center
                gap-6
                xl:gap-8
              "
            >
              <Link
                to="/"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                Home
              </Link>

              <Link
                to="/UIDesigns"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                UI/UX Designs
              </Link>

              <Link
                to="/ASKadmin/login"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                login
              </Link>

              <Link
                to="/faq"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                FAQ
              </Link>

              <Link
                to="/projects"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                Contact
              </Link>

              <Link
                to="/about"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                About
              </Link>

              <a
                href="#services"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                Services
              </a>

              <a
                href="#process"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                Process
              </a>

              <a
                href="#pricing"
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                Pricing
              </a>

              <Link
                to="/book"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  text-white
                  text-sm
                  lg:text-base
                  px-4
                  lg:px-5
                  py-2
                  rounded-lg
                  font-medium
                "
              >
                Book Project
              </Link>
            </div>

            {/* Mobile Actions */}

            <div
              className="
                flex
                items-center
                gap-3
                md:hidden
              "
            >
              {!open && (
                <Link
                  to="/book"
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    text-sm
                    px-3
                    py-2
                    rounded-lg
                    transition
                  "
                >
                  Book
                </Link>
              )}

              <button
                onClick={() =>
                  setOpen(!open)
                }
                className="
                  text-white
                  text-2xl
                "
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}

      {open && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            z-40
            md:hidden
          "
          onClick={() =>
            setOpen(false)
          }
        />
      )}

      {/* Mobile Menu */}

      {open && (
        <div
          className="
            fixed
            top-[73px]
            left-0
            right-0
            z-50
            bg-slate-950
            border-t
            border-slate-800
            md:hidden
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-6
              py-8
              px-4
            "
          >
            <Link
              to="/"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                py-2
                text-slate-300
                hover:text-white
              "
            >
              Home
            </Link>

            <Link
                to="/UIDesigns"
                onClick={() =>
                setOpen(false)
              }
                className="
                  text-sm
                  lg:text-base
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                UI/UX Designs
              </Link>

            <Link
              to="/faq"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                py-2
                text-slate-300
                hover:text-white
              "
            >
              FAQ
            </Link>

            <Link
              to="/projects"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                py-2
                text-slate-300
                hover:text-white
              "
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                py-2
                text-slate-300
                hover:text-white
              "
            >
              Contact
            </Link>

            <Link
              to="/about"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                py-2
                text-slate-300
                hover:text-white
              "
            >
              About
            </Link>

            <a
              href="#services"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                py-2
                text-slate-300
                hover:text-white
              "
            >
              Services
            </a>

            <a
              href="#process"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                py-2
                text-slate-300
                hover:text-white
              "
            >
              Process
            </a>

            <a
              href="#pricing"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                py-2
                text-slate-300
                hover:text-white
              "
            >
              Pricing
            </a>

            <Link
              to="/book"
              onClick={() =>
                setOpen(false)
              }
              className="
                w-full
                text-center
                bg-blue-600
                hover:bg-blue-700
                py-3
                rounded-xl
                text-white
                font-medium
              "
            >
              Book Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;