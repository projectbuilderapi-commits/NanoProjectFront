import { useState, useEffect } from "react";

import Sidebar from "../../components/admin/Sidebar";
import StatCard from "../../components/admin/StatCard";
import TopBar from "../../components/admin/Topbar";

import {
  getDashboardAnalytics,
  getRecentRequests,
} from "../../services/dashboardService";

import type { DashboardResponse } from "../../types/dashboard";
import { DashboardSkeleton } from "../../components/admin/DashboardSkeletonLoader";
import toast from "react-hot-toast";

export interface RecentRequest {
  _id: string;
  name: string;
  projectType: string;
  status: string;
  estimatedPrice: number;
  createdAt: string;
}

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [analytics, setAnalytics] =
    useState<DashboardResponse | null>(
      null
    );

  const [recentRequests, setRecentRequests] =
    useState<RecentRequest[]>([]);

  const [loading, setLoading] =
    useState(true);

  const stats = analytics
    ? [
        {
          title: "Total Requests",
          value:
            analytics.stats.totalRequests,
        },
        {
          title: "Pending",
          value:
            analytics.stats.pending,
        },
        {
          title: "In Progress",
          value:
            analytics.stats.inProgress,
        },
        {
          title: "Completed",
          value:
            analytics.stats.completed,
        },
      ]
    : [];

  useEffect(() => {
    const fetchDashboardData =
      async () => {
        try {
          const analyticsData =
            await getDashboardAnalytics();

          const recentData =
            await getRecentRequests();

          setAnalytics(
            analyticsData
          );

          setRecentRequests(
            recentData
          );
        } catch (error) {
          if(error instanceof Error){
            toast.error(`Failed to fetch projects: ${error.message}`);
          }
        } finally {
          setLoading(false);
        }
      };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex pb-4 min-h-screen bg-slate-950">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            fixed
            inset-0
            bg-black/50
            z-40
            lg:hidden
          "
        />
      )}

      <main className="flex-1 p-4 md:p-8">

        <TopBar
          title="Dashboard"
          setSidebarOpen={
            setSidebarOpen
          }
        />

        {/* Page Title */}

        {loading ? (
          <DashboardSkeleton />
        ) : (
          <>
        <div className="mb-8">
          <h1
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
            "
          >
            Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Overview of requests,
            revenue and project activity.
          </p>
        </div>

        {/* Stats */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>

        {/* Revenue + Project Types */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-6
            mt-8
          "
        >

          {/* Revenue */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-6
            "
          >
            <h2
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Total Revenue
            </h2>

            <p
              className="
                text-4xl
                font-bold
                text-green-400
                mt-4
              "
            >
              ₹
              {analytics?.revenue ?? 0}
            </p>

            <p
              className="
                text-sm
                text-slate-500
                mt-3
              "
            >
              Revenue generated from
              completed projects.
            </p>
          </div>

          {/* Project Types */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-6
            "
          >
            <h2
              className="
                text-lg
                font-semibold
                text-white
                mb-5
              "
            >
              Popular Project Types
            </h2>

            <div className="space-y-4">

              {analytics?.projectTypes.map(
                (project) => (
                  <div
                    key={project._id}
                    className="
                      flex
                      justify-between
                      items-center
                    "
                  >
                    <span className="text-slate-300">
                      {project._id}
                    </span>

                    <span
                      className="
                        bg-blue-500/10
                        text-blue-400
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      {project.count}
                    </span>
                  </div>
                )
              )}

            </div>
          </div>

        </div>

        {/* Recent Requests */}

        <div
          className="
            mt-8
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            overflow-hidden
          "
        >

          <div
            className="
              p-6
              border-b
              border-slate-800
            "
          >
            <h2
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              Recent Requests
            </h2>
          </div>

          {recentRequests.length === 0 ? (
            <div
              className="
                p-8
                text-center
                text-slate-400
              "
            >
              No Recent Requests Found
            </div>
          ) : (
            <div className="divide-y divide-slate-800">

              {recentRequests.map(
                (request) => (
                  <div
                    key={request._id}
                    className="
                      p-5
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-4
                    "
                  >

                    <div>

                      <h3
                        className="
                          text-white
                          font-medium
                        "
                      >
                        {request.name}
                      </h3>

                      <p
                        className="
                          text-sm
                          text-slate-400
                          mt-1
                        "
                      >
                        {
                          request.projectType
                        }
                      </p>

                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >

                      <span
                        className="
                          text-green-400
                          font-semibold
                        "
                      >
                        ₹
                        {
                          request.estimatedPrice
                        }
                      </span>

                      <span
                        className="
                          bg-yellow-500/10
                          text-yellow-400
                          px-3
                          py-1
                          rounded-full
                          text-xs
                        "
                      >
                        {request.status}
                      </span>

                    </div>

                  </div>
                )
              )}

            </div>
          )}

        </div>
        </>
        )}

      </main>

    </div>
  );
};

export default DashboardPage;