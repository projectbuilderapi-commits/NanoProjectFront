import {
Link,
useLocation,
Navigate,
} from "react-router-dom";

import {
CheckCircle2,
ArrowRight,
} from "lucide-react";

const SuccessPage = () => {
const location = useLocation();

const request =
location.state?.request?.data ||
location.state?.request;

if (!request) {
return ( <Navigate
     to="/book"
     replace
   />
);
}

return ( <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8 md:py-12">

  <div
    className="
      w-full
      max-w-5xl
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-6
      md:p-10
      lg:p-12
    "
  >

    {/* Success Badge */}

    <div className="flex justify-center">

      <div
        className="
          w-20
          h-20
          md:w-24
          md:h-24
          rounded-full
          bg-green-500/10
          border
          border-green-500/20
          flex
          items-center
          justify-center
        "
      >
        <CheckCircle2
          size={50}
          className="text-green-500"
        />
      </div>

    </div>

    {/* Heading */}

    <div className="text-center mt-6">

      <span
        className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-green-500/10
          border
          border-green-500/20
          text-green-400
          text-xs
          md:text-sm
          font-medium
        "
      >
        REQUEST SUBMITTED
      </span>

      <h1
        className="
          text-2xl
          sm:text-3xl
          md:text-5xl
          font-bold
          text-white
          mt-5
        "
      >
        Thank You!
      </h1>

      <p
        className="
          text-slate-400
          mt-4
          max-w-2xl
          mx-auto
          text-sm
          md:text-base
        "
      >
        Your project request has been
        successfully submitted. Our team
        will review your requirements and
        contact you shortly.
      </p>

    </div>

    {/* Request ID */}

    <div
      className="
        mt-8
        bg-slate-800
        rounded-2xl
        p-5
        text-center
      "
    >
      <p className="text-slate-400 text-sm">
        Request ID
      </p>

      <h2
        className="
          text-lg
          md:text-2xl
          font-bold
          text-blue-400
          mt-2
          break-all
        "
      >
        {request.requestNumber ||
          request._id}
      </h2>

    </div>

    {/* Quick Stats */}

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-4
        mt-6
      "
    >

      <div className="bg-slate-800 rounded-2xl p-5 text-center">
        <p className="text-slate-400 text-sm">
          Status
        </p>

        <h3 className="text-yellow-400 font-semibold mt-2">
          {request.status ||
            "Pending"}
        </h3>
      </div>

      <div className="bg-slate-800 rounded-2xl p-5 text-center">
        <p className="text-slate-400 text-sm">
          Estimated Price
        </p>

        <h3 className="text-green-400 font-semibold mt-2">
          ₹
          {request.estimatedPrice ||
            0}
        </h3>
      </div>

      <div className="bg-slate-800 rounded-2xl p-5 text-center">
        <p className="text-slate-400 text-sm">
          Project Type
        </p>

        <h3 className="text-blue-400 font-semibold mt-2">
          {request.projectType ||
            "-"}
        </h3>
      </div>

    </div>

    {/* Request Summary */}

    <div
      className="
        mt-8
        bg-slate-800
        rounded-2xl
        p-5
        md:p-6
      "
    >
      <h3 className="text-white font-semibold text-lg mb-5">
        Request Summary
      </h3>

      <div
        className="
          grid
          md:grid-cols-2
          gap-4
          text-slate-300
          text-sm
          md:text-base
        "
      >

        <div>
          <span className="text-slate-500">
            Name:
          </span>{" "}
          {request.name}
        </div>

        <div>
          <span className="text-slate-500">
            Email:
          </span>{" "}
          {request.email}
        </div>

        <div>
          <span className="text-slate-500">
            Phone:
          </span>{" "}
          {request.phone}
        </div>

        <div>
          <span className="text-slate-500">
            Deadline:
          </span>{" "}
          {request.deadline ||
            "Not Specified"}
        </div>

      </div>

    </div>

    {/* Next Steps */}

    <div
      className="
        mt-8
        bg-blue-500/10
        border
        border-blue-500/20
        rounded-2xl
        p-5
        md:p-6
      "
    >
      <h3 className="text-white font-semibold text-lg mb-5">
        What Happens Next?
      </h3>

      <div className="space-y-4 text-slate-300">

        <div>
          ✓ Requirements will be reviewed.
        </div>

        <div>
          ✓ Final quotation will be prepared.
        </div>

        <div>
          ✓ You'll receive email or phone updates.
        </div>

        <div>
          ✓ Development begins after approval.
        </div>

      </div>

    </div>

    {/* Buttons */}

    <div
      className="
        mt-10
        flex
        flex-col
        sm:flex-row
        gap-4
      "
    >

      <Link
        to="/"
        className="
          flex-1
          bg-blue-600
          hover:bg-blue-700
          transition
          py-3
          rounded-xl
          text-white
          font-medium
          text-center
        "
      >
        Back To Home
      </Link>

      <Link
        to="/projects"
        className="
          flex-1
          border
          border-slate-700
          hover:border-blue-500
          transition
          py-3
          rounded-xl
          text-white
          font-medium
          text-center
          flex
          items-center
          justify-center
          gap-2
        "
      >
        View Projects
        <ArrowRight size={18} />
      </Link>

    </div>

    {/* Footer */}

    <p
      className="
        text-slate-500
        text-xs
        md:text-sm
        mt-8
        text-center
      "
    >
      Keep your Request ID safe for future
      communication and project tracking.
    </p>

  </div>

</div>

);
};

export default SuccessPage;
