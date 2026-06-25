import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div className="text-center">

        <h1
          className="
            text-8xl
            font-bold
            text-blue-500
          "
        >
          404
        </h1>

        <h2
          className="
            text-4xl
            font-bold
            text-white
            mt-4
          "
        >
          Page Not Found
        </h2>

        <p
          className="
            text-slate-400
            mt-4
            max-w-md
          "
        >
          The page you are looking for
          does not exist or has been moved.
        </p>

        <div
          className="
            mt-8
            flex
            gap-4
            justify-center
          "
        >
          <Link
            to="/"
            className="
              bg-blue-600
              hover:bg-blue-700
              px-6
              py-3
              rounded-xl
              text-white
            "
          >
            Home
          </Link>

          <Link
            to="/projects"
            className="
              border
              border-slate-700
              hover:border-blue-500
              px-6
              py-3
              rounded-xl
              text-white
            "
          >
            Projects
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;