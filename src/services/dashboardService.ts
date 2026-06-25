import api from "../api/axios";
import type { RecentRequest } from "../pages/admin/DashboardPage";
import type {
  DashboardResponse,
} from "../types/dashboard";

export const getDashboardAnalytics =
  async (): Promise<DashboardResponse> => {
    const response =
      await api.get(
        "/dashboard/stats"
      );

    return response.data;
  };

export const getRecentRequests =
  async (): Promise<RecentRequest[]> => {
    const response =
      await api.get(
        "/requests/recent"
      );

    return response.data.data as RecentRequest[];
  };