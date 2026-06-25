import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import Sidebar from "../../components/admin/Sidebar";
import TopBar from "../../components/admin/Topbar";

import {
  getContacts,
  deleteContact,
} from "../../services/contactService";

import type { Contact } from "../../types/contact";
import toast from "react-hot-toast";

const MessagesPage = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [messages, setMessages] =
    useState<Contact[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const fetchMessages =
      async () => {
        try {
          const data =
            await getContacts();

          setMessages(data);
        } catch (error) {
          if(error instanceof Error){
            toast.error(`Failed to fetch projects: ${error.message}`);
          }
        } finally {
          setLoading(false);
        }
      };

    fetchMessages();
  }, []);

  const handleDelete =
    async (id: string) => {
      const confirmDelete =
        window.confirm(
          "Delete this message?"
        );

      if (!confirmDelete)
        return;

      try {
        await deleteContact(id);

        setMessages((prev) =>
          prev.filter(
            (msg) =>
              msg._id !== id
          )
        );
      } catch (error) {
        if(error instanceof Error){
          toast.error(`Failed to delete message: ${error.message}`);
        }
      }
    };

  const filteredMessages =
    messages.filter(
      (message) =>
        message.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        message.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        message.subject
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  const SkeletonLoader = () => (
    <>
      {/* Desktop */}

      <div
        className="
          hidden
          md:block
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          overflow-hidden
        "
      >
        {Array.from({ length: 6 }).map(
          (_, index) => (
            <div
              key={index}
              className="
                h-16
                border-b
                border-slate-800
                animate-pulse
              "
            >
              <div className="h-full bg-slate-800/40" />
            </div>
          )
        )}
      </div>

      {/* Mobile */}

      <div className="md:hidden space-y-4">
        {Array.from({ length: 6 }).map(
          (_, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-5
                animate-pulse
              "
            >
              <div className="h-5 bg-slate-800 rounded w-1/2 mb-3" />
              <div className="h-4 bg-slate-800 rounded w-3/4 mb-3" />
              <div className="h-4 bg-slate-800 rounded w-1/3" />
            </div>
          )
        )}
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={
          setSidebarOpen
        }
      />

      <main className="flex-1 p-4 md:p-8">

        <TopBar
          title="Messages"
          setSidebarOpen={
            setSidebarOpen
          }
        />

        {/* Header */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-3
            mb-6
          "
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Messages
          </h1>

          <div className="text-slate-400">
            Total Messages:
            {" "}
            {messages.length}
          </div>
        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search by name, email or subject..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
            w-full
            md:max-w-md
            mb-6
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            px-4
            py-3
            text-white
            focus:outline-none
            focus:border-blue-500
          "
        />

        {loading ? (
          // eslint-disable-next-line react-hooks/static-components
          <SkeletonLoader />
        ) : (
          <>
            {/* Desktop Table */}

            <div
              className="
                hidden
                md:block
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                overflow-hidden
              "
            >
              <table className="w-full">

                <thead>
                  <tr className="border-b border-slate-800">

                    <th className="text-left p-5 text-slate-400">
                      Name
                    </th>

                    <th className="text-left p-5 text-slate-400">
                      Email
                    </th>

                    <th className="text-left p-5 text-slate-400">
                      Subject
                    </th>

                    <th className="text-left p-5 text-slate-400">
                      Date
                    </th>

                    <th className="text-left p-5 text-slate-400">
                      Action
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {filteredMessages.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="
                          text-center
                          text-slate-400
                          p-10
                        "
                      >
                        No Messages Found
                      </td>
                    </tr>
                  )}

                  {filteredMessages.map(
                    (message) => (
                      <tr
                        key={message._id}
                        className="border-b border-slate-800"
                      >
                        <td className="p-5 text-white">
                          {message.name}
                        </td>

                        <td className="p-5 text-slate-300">
                          {message.email}
                        </td>

                        <td className="p-5 text-slate-300">
                          {message.subject}
                        </td>

                        <td className="p-5 text-slate-300">
                          {new Date(
                            message.createdAt
                          ).toLocaleDateString()}
                        </td>

                        <td className="p-5">

                          <div className="flex gap-2">

                            <Link
                              to={`/ASKadmin/messages/${message._id}`}
                              className="
                                bg-blue-600
                                hover:bg-blue-700
                                px-4
                                py-2
                                rounded-lg
                                text-white
                              "
                            >
                              View
                            </Link>

                            <button
                              onClick={() =>
                                handleDelete(
                                  message._id
                                )
                              }
                              className="
                                bg-red-600
                                hover:bg-red-700
                                px-4
                                py-2
                                rounded-lg
                                text-white
                              "
                            >
                              Delete
                            </button>

                          </div>

                        </td>
                      </tr>
                    )
                  )}

                </tbody>

              </table>
            </div>

            {/* Mobile Cards */}

            <div className="md:hidden space-y-4">

              {filteredMessages.length === 0 && (
                <div
                  className="
                    text-center
                    text-slate-400
                    py-10
                  "
                >
                  No Messages Found
                </div>
              )}

              {filteredMessages.map(
                (message) => (
                  <div
                    key={message._id}
                    className="
                      bg-slate-900
                      border
                      border-slate-800
                      rounded-2xl
                      p-5
                    "
                  >
                    <h3 className="text-white font-semibold">
                      {message.name}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1 break-all">
                      {message.email}
                    </p>

                    <p className="text-slate-300 mt-3">
                      {message.subject}
                    </p>

                    <p className="text-slate-500 text-xs mt-2">
                      {new Date(
                        message.createdAt
                      ).toLocaleDateString()}
                    </p>

                    <div className="flex gap-2 mt-4">

                      <Link
                        to={`/ASKadmin/messages/${message._id}`}
                        className="
                          flex-1
                          bg-blue-600
                          py-2
                          rounded-xl
                          text-center
                          text-white
                        "
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            message._id
                          )
                        }
                        className="
                          flex-1
                          bg-red-600
                          py-2
                          rounded-xl
                          text-white
                        "
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                )
              )}

            </div>
          </>
        )}

      </main>

    </div>
  );
};

export default MessagesPage;