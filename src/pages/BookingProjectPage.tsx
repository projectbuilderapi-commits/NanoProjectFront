import { useState } from "react";
import type { FormDataType } from "../types/form";
import { createRequest } from "../services/requestService";
import { PROJECT_PRICES, AUTH_PRICES, PLATFORM_PRICES, FEATURE_PRICES, REQUIREMENT_PRICES } from "../data/currentPricing";

import Step1 from "../components/booking/Step1";
import Step2 from "../components/booking/Step2";
import Step3 from "../components/booking/Step3";
import Step4 from "../components/booking/Step4";
import Step5 from "../components/booking/Step5";
import Step6 from "../components/booking/Step6";
import Step7 from "../components/booking/Step7";
import Review from "../components/booking/Review";
import { useNavigate } from "react-router-dom";
import {
  validateStep,
} from "../utils/bookingValidation";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

const stepTitles = [
  "",
  "Student Details",
  "Project Type",
  "Platform",
  "Authentication",
  "Features",
  "Technology",
  "Project Description",
  "Review & Submit",
];

const BookProjectPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    college: "",

    projectType: "",

    platform: "",

    authentication: [] as string[],

    requirements: [] as string[],

    features: [] as string[],

    projectTitle: "",
    deadline: "",
    referenceLink: "",
    description: ""
  });

  const nextStep = () => {
    const validationError =
      validateStep(
        step,
        formData
      );

    if (validationError) {
      setError(
        validationError
      );
      return;
    }

    setError("");

    if (step < 8) {
      setStep(
        (prev) => prev + 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response =
        await createRequest(
          formData,
          finalPrice || currentPrice
        );

      navigate("/success", {
        state: {
          request: response.data,
        },
      });

    } catch (error) {
      if(error instanceof Error){
            toast.error(`Failed to fetch projects: ${error.message}`);
          }
    } finally {
      setLoading(false);
    }
  };

  const calculatePrice = () => {
    let total = 0;

    total +=
      PROJECT_PRICES[
        formData.projectType as keyof typeof PROJECT_PRICES
      ] || 0;

    total +=
        PLATFORM_PRICES[
          formData.platform as keyof typeof PLATFORM_PRICES
        ] || 0;

    formData.authentication.forEach((auth) => {
      total +=
        AUTH_PRICES[
          auth as keyof typeof AUTH_PRICES
        ] || 0;
    });

    formData.features.forEach((feature) => {
      if (feature === "No Additional Features")
        return;

      total +=
        FEATURE_PRICES[
          feature as keyof typeof FEATURE_PRICES
        ] || 0;
    });

    formData.requirements.forEach(
      (requirement) => {
        total +=
          REQUIREMENT_PRICES[
            requirement as keyof typeof REQUIREMENT_PRICES
          ] || 0;
      }
    );

    return total;
  };

  const currentPrice = calculatePrice();

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 4:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 5:
        return (
          <Step5
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 6:
        return (
          <Step6
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 7:
        return (
          <Step7
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 8:
        return (
          <Review
            formData={formData}
            estimatedPrice={currentPrice}
            setFinalPrice={setFinalPrice}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-10 px-4">
      <Navbar/>
      <div className="max-w-4xl mx-auto mt-10">

        {/* Header */}

        <div className="text-center mb-10">
          <span className="text-blue-500 font-medium">
            PROJECT REQUEST
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Book Your Project
          </h1>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Fill out the project request form and receive
            a custom quote based on your requirements.
          </p>
        </div>

        {/* Main Card */}

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            md:rounded-3xl
            p-4
            sm:p-6
            md:p-10
            shadow-2xl
          "
        >
          {/* Progress */}

          <div className="mb-8">

            <div className="flex justify-between text-sm text-slate-400 mb-3">
              <span>
                Step {step} of 8
              </span>

              <span>
                {stepTitles[step]}
              </span>

              <span>
                {Math.round((step / 8) * 100)}%
              </span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-3">
              <div
                className="
                  bg-blue-600
                  h-3
                  rounded-full
                  transition-all
                  duration-500
                "
                style={{
                  width: `${(step / 8) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Step Indicator */}

          <div className="flex justify-between items-center mb-10 overflow-x-auto pb-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  flex
                  items-center
                "
              >
                <div
                  className={`
                    w-8
                    h-8
                    md:w-10
                    md:h-10
                    text-sm
                    md:text-base
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-semibold

                    ${
                      index + 1 <= step
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-slate-500"
                    }
                  `}
                >
                  {index + 1}
                </div>

                {index !== 7 && (
                  <div
                    className={`
                      w-8
                      md:w-12
                      h-1

                      ${
                        index + 1 < step
                          ? "bg-blue-600"
                          : "bg-slate-800"
                      }
                    `}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-800 rounded-2xl p-4 mb-6">
            <p className="text-slate-400 text-sm">
              Current Estimate
            </p>

            <h3 className="text-2xl
                            sm:text-3xl
                            font-bold
                            text-green-400">
              ₹{currentPrice}
            </h3>
          </div>

          {/* Current Step */}

          <h2 className="text-xl
                            sm:text-2xl
                            md:text-3xl
                            font-bold
                            text-white
                            mb-8">
            {stepTitles[step]}
          </h2>

          {/* Form Content */}

          {error && (
            <div
              className="
                mb-6
                bg-red-500/10
                border
                border-red-500/30
                text-red-400
                p-4
                rounded-xl
              "
            >
              {error}
            </div>
          )}

          {renderStep()}

          {/* Buttons */}

          <div className="flex
              flex-col-reverse
              sm:flex-row
              gap-4
              justify-between
              mt-10">

            {step > 1 ? (
              <button
                onClick={prevStep}
                className="
                  w-full
                  sm:w-auto
                  px-6
                  py-3
                  rounded-xl
                  bg-slate-800
                  text-white
                  hover:bg-slate-700
                  transition
                "
              >
                Previous
              </button>
            ) : (
              <div />
            )}

            {step < 8 ? (
              <button
                onClick={nextStep}
                className="
                  w-full
                  sm:w-auto
                  px-6
                  py-3
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-medium
                  transition
                "
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  font-medium
                  transition
                "
              >
                {loading
                  ? "Submitting..."
                  : "Submit Request"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProjectPage;