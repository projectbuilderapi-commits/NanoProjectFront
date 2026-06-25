import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar
  from "../components/Navbar";

import DesignHeader
  from "../components/design-details/DesignHeader";

import DesignPreview
  from "../components/design-details/DesignPreview";

import DesignInfo
  from "../components/design-details/DesignInfo";

import DesignTechnology
  from "../components/design-details/DesignTechnology";

import DesignActions
  from "../components/design-details/DesignActions";

import DesignFeatures
  from "../components/design-details/DesignFeatures";

import RelatedDesigns
  from "../components/design-details/RelatedDesigns";

import DesignDetailsSkeleton
  from "../components/design-details/DesignDetailsSkeleton";

import {
  getDesignById,
  getDesigns,
} from "../services/designApi";

import type {
  Design,
} from "../types/design";

const DesignDetails = () => {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [design, setDesign] =
    useState<Design>();

  const [related, setRelated] =
    useState<Design[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchDesign =
      async () => {
        try {
          if (!id) return;

          const current =
            await getDesignById(id);

          setDesign(current);

          const all =
            await getDesigns();

          const filtered =
            all
              .filter(
                (item: { _id: string; }) =>
                  item._id !== id
              )
              .slice(0, 3);

          setRelated(filtered);
        } catch {
          setError(
            "Unable to load design."
          );
        } finally {
          setLoading(false);
        }
      };

    fetchDesign();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <section
          className="
            min-h-screen
            bg-slate-950
            pt-28
            pb-20
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl
              px-5
            "
          >
            <DesignDetailsSkeleton />
          </div>
        </section>
      </>
    );
  }

  if (error || !design) {
    return (
      <>
        <Navbar />

        <section
          className="
            min-h-screen
            bg-slate-950
            flex
            items-center
            justify-center
            px-5
          "
        >
          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-900
              p-10
              text-center
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              Design Not Found
            </h2>

            <p
              className="
                mt-4
                text-slate-400
              "
            >
              The design you're looking
              for doesn't exist.
            </p>

            <button
              onClick={() =>
                navigate(-1)
              }
              className="
                mt-8
                rounded-2xl
                bg-blue-600
                px-6
                py-3
                text-white
                hover:bg-blue-500
              "
            >
              Go Back
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-slate-950
          pt-28
          pb-20
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            space-y-10
          "
        >
          <DesignHeader
            title={design.title}
            category={
              design.category
            }
          />

          <DesignPreview
            design={design}
          />

          <div
            className="
              grid
              gap-8
              lg:grid-cols-3
            "
          >
            <div
              className="
                lg:col-span-2
                space-y-8
              "
            >
              <DesignInfo
                design={design}
              />

              <DesignTechnology
                technologies={
                  design.technologies
                }
              />

              <DesignFeatures />
            </div>

            <div>
              <DesignActions
                design={design}
              />
            </div>
          </div>

          <RelatedDesigns
            designs={related}
          />
        </div>
      </main>
    </>
  );
};

export default DesignDetails;