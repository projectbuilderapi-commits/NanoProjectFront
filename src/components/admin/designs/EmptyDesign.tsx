import { useState } from "react";

const DesignForm = () => {
  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [
    shortDescription,
    setShortDescription,
  ] = useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [category, setCategory] =
    useState("Dashboard");

  const [
    difficulty,
    setDifficulty,
  ] = useState("Intermediate");

  const [status, setStatus] =
    useState("Draft");

  const [featured, setFeatured] =
    useState(false);

  const [thumbnail, setThumbnail] =
    useState("");

  const [gallery, setGallery] =
    useState("");

  const [githubUrl, setGithubUrl] =
    useState("");

  const [liveUrl, setLiveUrl] =
    useState("");

  const [
    technologies,
    setTechnologies,
  ] = useState("");

  const [features, setFeatures] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const design = {
      title,
      slug,
      shortDescription,
      description,
      category,
      difficulty,
      status,
      featured,
      thumbnail,

      images: gallery
        .split("\n")
        .map((item) =>
          item.trim()
        )
        .filter(Boolean),

      githubUrl,

      liveUrl,

      technologies:
        technologies
          .split(",")
          .map((item) =>
            item.trim()
          )
          .filter(Boolean),

      features: features
        .split(",")
        .map((item) =>
          item.trim()
        )
        .filter(Boolean),
    };

    console.log(design);

    // createDesign(design)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        space-y-6
        rounded-3xl
        bg-slate-900
        border
        border-slate-800
        p-8
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        Design Details
      </h2>

      {/* Title */}

      <input
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
        placeholder="Title"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {/* Slug */}

      <input
        value={slug}
        onChange={(e) =>
          setSlug(
            e.target.value
          )
        }
        placeholder="Slug"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {/* Category */}

      <select
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      >
        <option>
          Dashboard
        </option>

        <option>Admin</option>

        <option>Finance</option>

        <option>Mobile</option>

        <option>Landing Page</option>

        <option>Web App</option>
      </select>

      {/* Difficulty */}

      <select
        value={difficulty}
        onChange={(e) =>
          setDifficulty(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      >
        <option>
          Beginner
        </option>

        <option>
          Intermediate
        </option>

        <option>
          Advanced
        </option>
      </select>

      {/* Status */}

      <select
        value={status}
        onChange={(e) =>
          setStatus(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      >
        <option>Draft</option>

        <option>
          Published
        </option>
      </select>

      {/* Featured */}

      <label className="flex items-center gap-3 text-white">

        <input
          type="checkbox"
          checked={featured}
          onChange={(e) =>
            setFeatured(
              e.target.checked
            )
          }
        />

        Featured Design

      </label>

      {/* Thumbnail */}

      <input
        value={thumbnail}
        onChange={(e) =>
          setThumbnail(
            e.target.value
          )
        }
        placeholder="Thumbnail URL"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {thumbnail && (
        <img
          src={thumbnail}
          alt="Preview"
          className="
            w-full
            h-72
            object-cover
            rounded-2xl
            border
            border-slate-700
          "
        />
      )}

      {/* Gallery */}

      <textarea
        rows={5}
        value={gallery}
        onChange={(e) =>
          setGallery(
            e.target.value
          )
        }
        placeholder={`Gallery Images

https://...

https://...

https://...`}
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {/* Short Description */}

      <textarea
        rows={3}
        value={shortDescription}
        onChange={(e) =>
          setShortDescription(
            e.target.value
          )
        }
        placeholder="Short Description"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {/* Description */}

      <textarea
        rows={6}
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        placeholder="Description"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {/* Technologies */}

      <input
        value={technologies}
        onChange={(e) =>
          setTechnologies(
            e.target.value
          )
        }
        placeholder="React,Tailwind CSS,Node.js,MongoDB"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {/* Features */}

      <input
        value={features}
        onChange={(e) =>
          setFeatures(
            e.target.value
          )
        }
        placeholder="Responsive,Dark Mode,Charts"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {/* Github */}

      <input
        value={githubUrl}
        onChange={(e) =>
          setGithubUrl(
            e.target.value
          )
        }
        placeholder="Github URL"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      {/* Live */}

      <input
        value={liveUrl}
        onChange={(e) =>
          setLiveUrl(
            e.target.value
          )
        }
        placeholder="Live Demo URL"
        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
      />

      <button
        type="submit"
        className="
          w-full
          rounded-xl
          bg-blue-600
          py-3
          font-semibold
          text-white
          hover:bg-blue-700
        "
      >
        Save Design
      </button>
    </form>
  );
};

export default DesignForm;