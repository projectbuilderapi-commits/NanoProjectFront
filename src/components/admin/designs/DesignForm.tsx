import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import toast
  from "react-hot-toast";

import type {
  Design,
} from "../../../types/design";

import {
  createDesign,
  updateDesign,
} from "../../../services/designService";

import TechnologySelector
  from "./TechnologySelector";

type Props = {

  mode?:
    | "add"
    | "edit";

  initialData?: Design;

};

const DesignForm = ({

  mode = "add",

  initialData,

}: Props) => {

    const navigate =
  useNavigate();

  const [title,
setTitle] =
useState("");

const [slug,
setSlug] =
useState("");

const [
shortDescription,
setShortDescription,
] =
useState("");

const [
description,
setDescription,
] =
useState("");

const [category,
setCategory] =
useState("Dashboard");

const [
difficulty,
setDifficulty,
] =
useState("Intermediate");

const [status,
setStatus] =
useState("Draft");

const [
featured,
setFeatured,
] =
useState(false);

const [
thumbnail,
setThumbnail,
] =
useState("");

const [
liveUrl,
setLiveUrl,
] =
useState("");

const [
githubUrl,
setGithubUrl,
] =
useState("");

const [
technologies,
setTechnologies,
] =
useState<string[]>([]);


const [
loading,
setLoading,
] =
useState(false);

useEffect(() => {

  if (!initialData)
    return;
  setTitle(
    initialData.title
  );

  setSlug(
    initialData.slug
  );

  setShortDescription(
    initialData.shortDescription
  );

  setDescription(
    initialData.description
  );

  setCategory(
    initialData.category
  );

  setDifficulty(
    initialData.difficulty
  );

  setStatus(
    initialData.status
  );

  setFeatured(
    initialData.featured
    );

  setThumbnail(
    initialData.thumbnail
  );

  setGithubUrl(
    initialData.githubUrl
  );

  setLiveUrl(
    initialData.liveUrl
  );

  setTechnologies(
    initialData.technologies
  );

}, [initialData]);

  useEffect(() => {

    if (
        mode === "edit"
    )
        return;

    setSlug(

        title

        .toLowerCase()

        .replace(
            /\s+/g,
            "-"
        )

        .replace(
            /[^a-z0-9-]/g,
            ""
        )

    );

    }, [
    title,
    mode,
    ]);

  const handleSubmit = async (
    e: React.FormEvent
    ) => {

    e.preventDefault();

    if (

    !title.trim() ||

    !slug.trim() ||

    !shortDescription.trim() ||

    !description.trim() ||

    !thumbnail.trim()

    ) {

    toast.error(

        "Fill all required fields."

    );

    return;

    }

    try {

        setLoading(true);

        const payload = {

            title,

            slug,

            shortDescription,

            description,

            category,

            difficulty,

            status,

            featured,

            thumbnail,

            githubUrl,

            liveUrl,

            technologies,

            };

        if (
        mode === "edit" &&
        initialData
        ) {

        await updateDesign(
            initialData._id,
            payload
        );

        toast.success(
            "Design updated successfully."
        );

        } else {

        await createDesign(
            payload
        );

        toast.success(
            "Design created successfully."
        );

        }

        navigate(
        "/ASKadmin/designs"
        );

    } catch (error) {

        console.error(error);

        toast.error(
        "Something went wrong."
        );

    } finally {

        setLoading(false);

    }

    };

  return (
    <form onSubmit={handleSubmit}
      className="
        space-y-6
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
      "
    >

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
        "
      >

        <input
            value={title}
            onChange={(e) =>
                setTitle(e.target.value)
            }
            placeholder="Title"
            className="
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                p-3
                text-white
            "
            />

        <input
        value={slug}
        onChange={(e) =>
            setSlug(e.target.value)
        }
        placeholder="Slug"
        className="
            bg-slate-950
            border
            border-slate-700
            rounded-xl
            p-3
            text-white
        "
        />

      </div>

      <textarea
            rows={3}
            value={shortDescription}
            onChange={(e) =>
                setShortDescription(
                e.target.value
                )
            }
            placeholder="Short Description"
            className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                p-3
                text-white
            "
            />

      <textarea
        rows={6}
        value={description}
        onChange={(e) =>
            setDescription(
            e.target.value
            )
        }
        placeholder="Description"
        className="
            w-full
            bg-slate-950
            border
            border-slate-700
            rounded-xl
            p-3
            text-white
        "
        />

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
        "
      >

        <select
            value={category}
            onChange={(e) =>
                setCategory(
                e.target.value
                )
            }
            className="
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                p-3
                text-white
            "
            >
            <option>React</option>
            <option>Next.js</option>
            <option>Node.js</option>
            <option>MERN</option>
            <option>Dashboard</option>
            <option>Portfolio</option>
            <option>Landing Page</option>
            <option>Admin Panel</option>
            <option>Ecommerce</option>
            <option>Job Portal</option>
            </select>
        
        <div
            className="
                grid
                gap-6
                md:grid-cols-2
            "
            >

            <select
                value={status}
                onChange={(e) =>
                setStatus(
                    e.target.value
                )
                }
                className="
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                p-3
                text-white
                "
            >
                <option>
                Draft
                </option>

                <option>
                Published
                </option>

            </select>

            <div className="space-y-3">

            <input
                value={thumbnail}
                onChange={(e) =>
                setThumbnail(
                    e.target.value
                )
                }
                placeholder="Thumbnail URL"
                className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-950
                p-3
                text-white
                "
            />

            {thumbnail && (

                <img
                src={thumbnail}
                alt="Thumbnail Preview"
                className="
                    h-64
                    w-full
                    rounded-2xl
                    object-cover
                    border
                    border-slate-700
                "
                />

            )}

            </div>

            <label
                className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-slate-700
                bg-slate-950
                px-4
                py-3
                text-white
                "
                >

                <input

                type="checkbox"

                checked={featured}

                onChange={(e)=>

                setFeatured(

                e.target.checked

                )

                }

                />

                Featured Design

                </label>

            </div>

        <select
            value={difficulty}
            onChange={(e) =>
                setDifficulty(
                e.target.value
                )
            }
            className="
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                p-3
                text-white
            "
            >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            </select>

      </div>

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
        "
      >

        <input
            value={liveUrl}
            onChange={(e) =>
                setLiveUrl(
                e.target.value
                )
            }
            placeholder="Live Demo URL"
            className="
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                p-3
                text-white
            "
            />

        <input
            value={githubUrl}
            onChange={(e) =>
                setGithubUrl(
                e.target.value
                )
            }
            placeholder="Github URL"
            className="
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                p-3
                text-white
            "
            />

      </div>

      <TechnologySelector
        technologies={
          technologies
        }
        setTechnologies={
          setTechnologies
        }
      />

      <button
        type="submit"
        disabled={loading}
        className="
            w-full
            rounded-xl
            bg-blue-600
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:bg-blue-400
        "
        >

        {loading
            ? "Saving..."
            : mode === "add"
            ? "Create Design"
            : "Update Design"}

        </button>

    </form>
  );
};

export default DesignForm;