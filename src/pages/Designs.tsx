import {
  useEffect,
  useState,
} from "react";

import Navbar
  from "../components/Navbar";

import {
  getDesigns,
} from "../services/designApi";

import type {
  Design,
} from "../types/design";

import DesignHero
  from "../components/designs/DesignHero";

import DesignSearch
  from "../components/designs/DesignSearch";

import CategoryTabs
  from "../components/designs/CategoryTabs";

import FeaturedDesign
  from "../components/designs/FeaturedDesign";

import LatestDesigns
  from "../components/designs/LatestDesigns";

import DesignGrid
  from "../components/designs/DesignGrid";

import DesignSkeleton
  from "../components/designs/DesignSkeleton";

import EmptyDesign
  from "../components/designs/EmptyDesign";

const Designs = () => {
  const [designs, setDesigns] =
    useState<Design[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const fetchDesigns =
      async () => {
        try {
          const data =
            await getDesigns();

          setDesigns(data);
        } catch {
          setError(
            "Unable to load designs."
          );
        } finally {
          setLoading(false);
        }
      };

    fetchDesigns();
  }, []);

  const filtered =
    designs.filter((item) =>
      item.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="min-h-screen bg-slate-950">

      {/* Background Glow */}

      <div
        className="
          fixed
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -top-32
            right-0
            h-96
            w-96
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-purple-600/10
            blur-[160px]
          "
        />
      </div>

      <Navbar />

      <section
        className="
          pt-28
          pb-24
          md:pt-36
          md:pb-32
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            lg:px-8
            space-y-14
          "
        >

          {/* Hero */}

          <DesignHero />

          {/* Search + Categories */}

          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/70
              backdrop-blur-xl
              p-5
              space-y-5
            "
          >
            <DesignSearch
              value={search}
              onChange={setSearch}
            />

            <CategoryTabs />
          </div>

          {/* Featured */}

          {!loading &&
            filtered.length > 0 && (
              <FeaturedDesign
                design={filtered[0]}
              />
            )}

          {/* Title */}

          <LatestDesigns
            count={filtered.length}
          />

          {/* Error */}

          {error && (
            <div
              className="
                rounded-2xl
                border
                border-red-500/30
                bg-red-500/10
                px-5
                py-4
                text-red-400
              "
            >
              {error}
            </div>
          )}

          {/* Content */}

          {loading ? (
            <div
              className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {Array.from({
                length: 6,
              }).map((_, index) => (
                <DesignSkeleton
                  key={index}
                />
              ))}
            </div>
          ) : filtered.length ===
            0 ? (
            <EmptyDesign />
          ) : (
            <DesignGrid
              designs={filtered}
            />
          )}

        </div>
      </section>

    </div>
  );
};

export default Designs;