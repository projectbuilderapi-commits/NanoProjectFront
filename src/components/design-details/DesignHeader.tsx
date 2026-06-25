import {
  ArrowLeft,
  Star,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

type Props = {
  title: string;
  category: string;
};

const DesignHeader = ({
  title,
  category,
}: Props) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>

        <Link
          to="/designs"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-slate-400
            hover:text-white
            transition
          "
        >
          <ArrowLeft size={16} />

          Back to Gallery

        </Link>

        <h1
          className="
            mt-5
            text-3xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          {title}
        </h1>

        <div
          className="
            mt-4
            flex
            flex-wrap
            gap-3
          "
        >
          <span
            className="
              rounded-full
              bg-blue-600
              px-4
              py-2
              text-xs
              font-medium
              text-white
            "
          >
            {category}
          </span>

          <span
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-500/30
              bg-yellow-500/10
              px-4
              py-2
              text-xs
              text-yellow-400
            "
          >
            <Star
              size={14}
              fill="currentColor"
            />

            Featured

          </span>

        </div>

      </div>
    </div>
  );
};

export default DesignHeader;