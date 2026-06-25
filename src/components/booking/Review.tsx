import type { FormDataType } from "../../types/form";
import { COUPONS } from "../../data/coupons";
import { useEffect, useState } from "react";

interface ReviewProps {
formData: FormDataType;
estimatedPrice: number;
setFinalPrice: React.Dispatch<
  React.SetStateAction<number>
>;
}

const Review = ({
formData,
estimatedPrice,
setFinalPrice
}: ReviewProps) => {
const [couponCode, setCouponCode] =
useState("");

const [discount, setDiscount] =
useState(0);

const [error, setError] =
useState("");

const applyCoupon = () => {
const coupon =
COUPONS[
couponCode.toUpperCase() as keyof typeof COUPONS
];
if (coupon) {
  setDiscount(coupon);
  const discounted =
    estimatedPrice -
    (estimatedPrice * coupon) / 100;

  setFinalPrice(discounted);
  setError("");
} else {
  setDiscount(0);
  setError("Invalid coupon code");
}

};

const discountedPrice =
estimatedPrice -
(estimatedPrice * discount) / 100;

useEffect(() => {
  setFinalPrice(estimatedPrice);
}, [estimatedPrice]);

return ( <div className="space-y-6">

```
  {/* Cost Summary */}

  <div
    className="
      bg-green-500/10
      border
      border-green-500/20
      rounded-2xl
      p-5
      md:p-6
    "
  >
    <h3 className="text-green-300 font-semibold text-base md:text-lg">
      Estimated Project Cost
    </h3>

    <p className="text-3xl md:text-5xl font-bold text-green-400 mt-3">
      ₹{estimatedPrice}
    </p>

    <p className="text-slate-400 text-sm mt-3">
      Final pricing may vary based on
      project complexity and additional
      requirements.
    </p>
  </div>

  {/* Coupon */}

  <div className="bg-slate-800 rounded-2xl p-5">
    <h3 className="text-white font-semibold mb-4">
      Coupon Code
    </h3>

    <div className="flex flex-col sm:flex-row gap-3">

      <input
        type="text"
        value={couponCode}
        onChange={(e) =>
          setCouponCode(
            e.target.value
          )
        }
        placeholder="Enter Coupon"
        className="
          flex-1
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          text-white
        "
      />

      <button
        onClick={applyCoupon}
        className="
          bg-blue-600
          hover:bg-blue-700
          px-5
          py-3
          rounded-xl
          text-white
          whitespace-nowrap
        "
      >
        Apply Coupon
      </button>

    </div>

    {error && (
      <p className="text-red-400 text-sm mt-3">
        {error}
      </p>
    )}

    {discount > 0 && (
      <p className="text-green-400 text-sm mt-3">
        Coupon Applied Successfully •
        {discount}% OFF
      </p>
    )}
  </div>

  {/* Student Info */}

  <div className="bg-slate-800 rounded-2xl p-5">
    <h3 className="text-white font-semibold mb-4">
      Student Information
    </h3>

    <div className="grid md:grid-cols-2 gap-3 text-slate-300 text-sm md:text-base">

      <p>
        <span className="text-slate-500">
          Name:
        </span>{" "}
        {formData.name}
      </p>

      <p>
        <span className="text-slate-500">
          Email:
        </span>{" "}
        {formData.email}
      </p>

      <p>
        <span className="text-slate-500">
          Phone:
        </span>{" "}
        {formData.phone}
      </p>

      <p>
        <span className="text-slate-500">
          College:
        </span>{" "}
        {formData.college}
      </p>

    </div>
  </div>

  {/* Project Info */}

  <div className="bg-slate-800 rounded-2xl p-5">
    <h3 className="text-white font-semibold mb-4">
      Project Details
    </h3>

    <div className="grid md:grid-cols-2 gap-3 text-slate-300 text-sm md:text-base">

      <p>
        <span className="text-slate-500">
          Title:
        </span>{" "}
        {formData.projectTitle}
      </p>

      <p>
        <span className="text-slate-500">
          Type:
        </span>{" "}
        {formData.projectType}
      </p>

      <p>
        <span className="text-slate-500">
          Platform:
        </span>{" "}
        {formData.platform}
      </p>

      <p>
        <span className="text-slate-500">
          Deadline:
        </span>{" "}
        {formData.deadline}
      </p>

    </div>
  </div>

  {/* Authentication */}

  <div className="bg-slate-800 rounded-2xl p-5">
    <h3 className="text-white font-semibold mb-4">
      Authentication
    </h3>

    <div className="flex flex-wrap gap-2">

      {formData.authentication.length
        ? formData.authentication.map(
            (item) => (
              <span
                key={item}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-slate-700
                  text-slate-300
                  text-sm
                "
              >
                {item}
              </span>
            )
          )
        : (
          <span className="text-slate-400">
            None Selected
          </span>
        )}

    </div>
  </div>

  {/* Features */}

  <div className="bg-slate-800 rounded-2xl p-5">
    <h3 className="text-white font-semibold mb-4">
      Features
    </h3>

    <div className="flex flex-wrap gap-2">

      {formData.features.length
        ? formData.features.map(
            (item) => (
              <span
                key={item}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-slate-700
                  text-slate-300
                  text-sm
                "
              >
                {item}
              </span>
            )
          )
        : (
          <span className="text-slate-400">
            None Selected
          </span>
        )}

    </div>
  </div>

  {/* Requirements */}

  <div className="bg-slate-800 rounded-2xl p-5">
    <h3 className="text-white font-semibold mb-4">
      Additional Requirements
    </h3>

    <div className="flex flex-wrap gap-2">

      {formData.requirements.length
        ? formData.requirements.map(
            (item) => (
              <span
                key={item}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-slate-700
                  text-slate-300
                  text-sm
                "
              >
                {item}
              </span>
            )
          )
        : (
          <span className="text-slate-400">
            None Selected
          </span>
        )}

    </div>
  </div>

  {/* Description */}

  <div className="bg-slate-800 rounded-2xl p-5">
    <h3 className="text-white font-semibold mb-4">
      Project Description
    </h3>

    <p className="text-slate-300 whitespace-pre-wrap leading-7 text-sm md:text-base">
      {formData.description}
    </p>
  </div>

  {/* Final Amount */}

  <div
    className="
      bg-green-500/10
      border
      border-green-500/20
      rounded-2xl
      p-6
    "
  >
    <h3 className="text-green-300 font-semibold">
      Final Amount
    </h3>

    <div className="mt-4 space-y-2">

      <div className="flex justify-between text-slate-400">
        <span>
          Original Price
        </span>

        <span>
          ₹{estimatedPrice}
        </span>
      </div>

      <div className="flex justify-between text-slate-400">
        <span>
          Discount
        </span>

        <span>
          {discount}%
        </span>
      </div>

      <div className="border-t border-green-500/20 pt-4 mt-4">

        <div className="flex justify-between items-center">

          <span className="text-white font-medium">
            Payable Amount
          </span>

          <span className="text-3xl md:text-5xl font-bold text-green-400">
            ₹
            {discountedPrice.toFixed(
              0
            )}
          </span>

        </div>

      </div>

    </div>
  </div>

  {/* Confirmation */}

  <div
    className="
      bg-blue-500/10
      border
      border-blue-500/20
      rounded-2xl
      p-5
    "
  >
    <p className="text-blue-300 text-sm leading-6">
      By submitting this request,
      you confirm that the provided
      information is accurate. Our
      team will review your request
      and contact you with the final
      quotation and project timeline.
    </p>
  </div>

</div>

);
};

export default Review;
