import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Navigate,
} from "react-router-dom";

import DesignForm
  from "../../components/admin/designs/DesignForm";

import {
  getDesign,
} from "../../services/designService";

import type {
  Design,
} from "../../types/design";

const EditDesignPage = () => {

  const { id } =
    useParams();

  const [loading, setLoading] =
    useState(true);

  const [design, setDesign] =
    useState<Design | null>(
      null
    );

  const [error, setError] =
    useState("");

  useEffect(() => {

    const fetchDesign =
      async () => {

        if (!id)
          return;

        try {

          const data =
            await getDesign(id);

          setDesign(data);

        } catch (error) {

          console.error(error);

          setError(
            "Unable to load design."
          );

        } finally {

          setLoading(false);

        }

      };

    fetchDesign();

  }, [id]);

  if (!id) {

    return (
      <Navigate
        to="/ASKadmin/designs"
        replace
      />
    );

  }

  if (loading) {

    return (

      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-950
          text-white
        "
      >
        Loading...

      </div>

    );

  }

  if (error) {

    return (

      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-950
          text-red-400
        "
      >
        {error}

      </div>

    );

  }

  if (!design) {

    return (

      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-950
          text-white
        "
      >
        Design not found.

      </div>

    );

  }

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        p-6
        md:p-8
      "
    >

      <div
        className="
          mb-8
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Edit Design
        </h1>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Update your UI design information.
        </p>

      </div>

      <DesignForm
        initialData={design}
        mode="edit"
      />

    </div>

  );

};

export default EditDesignPage;