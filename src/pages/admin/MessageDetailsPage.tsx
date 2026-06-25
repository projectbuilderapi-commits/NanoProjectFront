import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Sidebar from "../../components/admin/Sidebar";
import TopBar from "../../components/admin/Topbar";

import {
  getContactById,
} from "../../services/contactService";

import type {
  Contact,
} from "../../types/contact";
import toast from "react-hot-toast";

const MessageDetailsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [message, setMessage] =
    useState<Contact | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchMessage =
      async () => {
        try {
          if (!id) return;

          const data =
            await getContactById(id);

          setMessage(data);
        } catch (error) {
          if(error instanceof Error){
            toast.error(`Failed to fetch projects: ${error.message}`);
          }
        } finally {
          setLoading(false);
        }
      };

    fetchMessage();
  }, [id]);

  const SkeletonLoader = () => (
    <div className="space-y-6">

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-6
          animate-pulse
        "
      >
        <div className="h-8 w-48 bg-slate-800 rounded mb-6" />

        <div className="grid md:grid-cols-2 gap-5">
          <div className="h-5 bg-slate-800 rounded" />
          <div className="h-5 bg-slate-800 rounded" />
          <div className="h-5 bg-slate-800 rounded" />
          <div className="h-5 bg-slate-800 rounded" />
        </div>
      </div>

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-6
          animate-pulse
        "
      >
        <div className="h-8 w-40 bg-slate-800 rounded mb-6" />

        <div className="space-y-3">
          <div className="h-4 bg-slate-800 rounded" />
          <div className="h-4 bg-slate-800 rounded" />
          <div className="h-4 bg-slate-800 rounded" />
          <div className="h-4 bg-slate-800 rounded w-3/4" />
        </div>
      </div>

    </div>
  );

  if (!loading && !message) {
    return (
      <div
        className="
          min-h-screen
          bg-slate-950
          flex
          items-center
          justify-center
          text-white
        "
      >
        Message Not Found
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 p-4 md:p-8">

        <TopBar
          title="Message Details"
          setSidebarOpen={setSidebarOpen}
        />

        {/* Header */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            sm:items-center
            sm:justify-between
            mb-6
          "
        >
          <h1
            className="
              text-2xl
              md:text-4xl
              font-bold
              text-white
            "
          >
            Message Details
          </h1>

          <button
            onClick={() =>
              navigate(-1)
            }
            className="
              bg-slate-800
              hover:bg-slate-700
              transition
              px-5
              py-2.5
              rounded-xl
              text-white
              w-full
              sm:w-auto
            "
          >
            Back
          </button>
        </div>

        {loading ? (
          // eslint-disable-next-line react-hooks/static-components
          <SkeletonLoader />
        ) : (
          <>
            {/* Sender Information */}

            <section
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-5
                md:p-6
                mb-6
              "
            >
              <h2
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-white
                  mb-6
                "
              >
                Sender Information
              </h2>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-5
                "
              >
                <div>
                  <p className="text-slate-500 text-sm">
                    Name
                  </p>

                  <p className="text-white mt-1">
                    {message?.name}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Email
                  </p>

                  <a
                    href={`mailto:${message?.email}`}
                    className="
                      text-blue-400
                      hover:text-blue-300
                      break-all
                      mt-1
                      block
                    "
                  >
                    {message?.email}
                  </a>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Subject
                  </p>

                  <p className="text-white mt-1">
                    {message?.subject}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Received
                  </p>

                  <p className="text-white mt-1">
                    {new Date(
                      message!.createdAt
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            </section>

            {/* Message */}

            <section
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-5
                md:p-6
              "
            >
              <h2
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-white
                  mb-6
                "
              >
                Message Content
              </h2>

              <div
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-2xl
                  p-5
                  md:p-6
                "
              >
                <p
                  className="
                    text-slate-300
                    leading-7
                    md:leading-8
                    whitespace-pre-wrap
                    text-sm
                    md:text-base
                  "
                >
                  {message?.message}
                </p>
              </div>
            </section>
          </>
        )}

      </main>

    </div>
  );
};

export default MessageDetailsPage;