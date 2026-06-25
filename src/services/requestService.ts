import api from "../api/axios";
import type { FormDataType } from "../types/form";

export const createRequest = async (
  requestData: FormDataType,
  estimatedPrice: number
) => {
  const response = await api.post(
    "/requests",
    {
      ...requestData,
      estimatedPrice,
    }
  );

  return response.data;
};

export const getRequests =
  async () => {
    const response =
      await api.get("/requests");

    return response.data;
  };

export const getRequestById =
  async (id: string) => {
    const response =
      await api.get(
        `/requests/${id}`
      );

    return response.data;
  };

export const updateRequestStatus =
  async (
    id: string,
    status: string
  ) => {
    const response =
      await api.patch(
        `/requests/${id}/status`,
        { status }
      );

    return response.data;
  };

export const deleteRequest =
  async (id: string) => {
    const response =
      await api.delete(
        `/requests/${id}`
      );

    return response.data;
  };