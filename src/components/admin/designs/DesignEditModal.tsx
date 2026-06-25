import {
  X,
} from "lucide-react";

import DesignForm
  from "./DesignForm";

type Props = {

  open: boolean;

  onClose: () => void;

};

const DesignEditModal = ({
  open,
  onClose,
}: Props) => {

  if (!open)
    return null;

  return (

    <div
      className="
        fixed
        inset-0
        z-50
        bg-black/70
        flex
        items-center
        justify-center
        p-5
      "
    >

      <div
        className="
          w-full
          max-w-5xl
          max-h-[92vh]
          overflow-y-auto
          rounded-3xl
          bg-slate-900
          border
          border-slate-800
        "
      >

        <div
          className="
            sticky
            top-0
            z-20
            flex
            justify-between
            items-center
            border-b
            border-slate-800
            bg-slate-900
            px-8
            py-5
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Edit Design
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-xl
              bg-slate-800
              p-2
              hover:bg-slate-700
            "
          >

            <X
              size={20}
              className="text-white"
            />

          </button>

        </div>

        <div className="p-8">

          <DesignForm />

        </div>

      </div>

    </div>

  );

};

export default DesignEditModal;