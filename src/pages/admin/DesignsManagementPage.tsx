import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import Sidebar
  from "../../components/admin/Sidebar";

import Topbar
  from "../../components/admin/Topbar";

import DesignStats
  from "../../components/admin/designs/DesignStats";

import DesignSearch
  from "../../components/admin/designs/DesignSearch";

import DesignTable
  from "../../components/admin/designs/DesignTable";

import DesignCard
  from "../../components/admin/designs/DesignCard";

import DesignSkeleton
  from "../../components/admin/designs/DesignSkeleton";

import EmptyDesign
  from "../../components/admin/designs/EmptyDesign";

import DeleteDesignModal
  from "../../components/admin/designs/DeleteDesignModal";

import {
  getDesigns,
  deleteDesign,
} from "../../services/designService";

import type {
  Design,
} from "../../types/design";

const DesignsManagementPage = () => {

  const navigate =
    useNavigate();

  const [
    sidebarOpen,
    setSidebarOpen,
  ] = useState(false);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    designs,
    setDesigns,
  ] = useState<Design[]>([]);

  const [
    deleteOpen,
    setDeleteOpen,
  ] = useState(false);

  const [
    selectedDesign,
    setSelectedDesign,
  ] = useState<Design | null>(
    null
  );

  const fetchDesigns =
    async () => {

      try {

        setLoading(true);

        const data =
          await getDesigns();

        setDesigns(data);

      } catch (error) {

        console.error(
          "Failed to fetch designs:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

  useEffect(() => {

    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchDesigns();

  }, []);

  const handleDelete =
    async () => {

      if (!selectedDesign)
        return;

      try {

        await deleteDesign(
          selectedDesign._id
        );

        await fetchDesigns();

        setDeleteOpen(false);

        setSelectedDesign(
          null
        );

      } catch (error) {

        console.error(
          "Delete failed:",
          error
        );

      }

    };

  const filtered =
    designs.filter(
      (design) =>
        design.title
          .toLowerCase()
          .includes(
            search
              .trim()
              .toLowerCase()
          )
    );

  return (

    <div className="flex min-h-screen bg-slate-950">

      <Sidebar
        sidebarOpen={
          sidebarOpen
        }
        setSidebarOpen={
          setSidebarOpen
        }
      />

      {sidebarOpen && (

        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            lg:hidden
          "
        />

      )}

      <main className="flex-1 p-4 md:p-8">

        <Topbar
          title="Designs"
          setSidebarOpen={
            setSidebarOpen
          }
        />

        <DesignStats
          total={
            filtered.length
          }
          featured={
            filtered.filter(
              (item) =>
                item.featured
            ).length
          }
          published={
            filtered.filter(
              (item) =>
                item.status ===
                "Published"
            ).length
          }
        />

        <DesignSearch
          value={search}
          onChange={setSearch}
          onAdd={() =>
            navigate(
              "/ASKadmin/design/new"
            )
          }
        />

        {loading ? (

          <DesignSkeleton />

        ) : filtered.length ===
          0 ? (

          <EmptyDesign />

        ) : (

          <>

            {/* Mobile */}

            <div
              className="
                mt-8
                space-y-5
                lg:hidden
              "
            >

              {filtered.map(
                (design) => (

                  <DesignCard
                    key={
                      design._id
                    }
                    design={
                      design
                    }
                    onDelete={() => {

                      setSelectedDesign(
                        design
                      );

                      setDeleteOpen(
                        true
                      );

                    }}
                  />

                )
              )}

            </div>

            {/* Desktop */}

            <div
              className="
                hidden
                lg:block
                mt-8
              "
            >

              <DesignTable
                designs={
                  filtered
                }
                onDelete={(
                  design
                ) => {

                  setSelectedDesign(
                    design
                  );

                  setDeleteOpen(
                    true
                  );

                }}
              />

            </div>

          </>

        )}

      </main>

      <DeleteDesignModal
        open={
          deleteOpen
        }
        title={
          selectedDesign
            ?.title || ""
        }
        onClose={() => {

          setDeleteOpen(
            false
          );

          setSelectedDesign(
            null
          );

        }}
        onDelete={
          handleDelete
        }
      />

    </div>

  );

};

export default DesignsManagementPage;