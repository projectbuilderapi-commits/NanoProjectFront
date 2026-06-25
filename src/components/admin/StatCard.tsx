type Props = {
  title: string;
  value: number;
};

const StatCard = ({
  title,
  value,
}: Props) => {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-5
        md:p-6
        hover:border-blue-500/50
        hover:-translate-y-1
        transition-all
        duration-300
        min-h-[130px]
        flex
        flex-col
        justify-between
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <h3
          className="
            text-slate-400
            text-sm
            md:text-base
            font-medium
          "
        >
          {title}
        </h3>

        <div
          className="
            w-3
            h-3
            rounded-full
            bg-blue-500
          "
        />
      </div>

      {/* Value */}

      <div>
        <p
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-white
            mt-4
            break-words
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatCard;