export interface DashboardStats {
  totalRequests: number;
  pending: number;
  inProgress: number;
  completed: number;
  rejected: number;
}

export interface DashboardResponse {
  success: boolean;

  stats: DashboardStats;

  revenue: number;

  projectTypes: {
    _id: string;
    count: number;
  }[];
}