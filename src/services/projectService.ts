import api from "../api/axios";
import type {
  Project,
  ProjectFormData,
} from "../types/project";

export const getProjects =
  async (): Promise<Project[]> => {
    const response =
      await api.get("/projects");

    return response.data.data;
  };

export const getProjectById =
  async (
    id: string
  ): Promise<Project> => {
    const response =
      await api.get(
        `/projects/${id}`
      );

    return response.data.data;
  };

export const createProject =
  async (
    data: ProjectFormData
  ) => {
    const response =
      await api.post(
        "/projects",
        data
      );

    return response.data;
  };

export const updateProject =
  async (
    id: string,
    data: ProjectFormData
  ) => {
    const response =
      await api.put(
        `/projects/${id}`,
        data
      );

    return response.data;
  };

export const deleteProject =
  async (id: string) => {
    const response =
      await api.delete(
        `/projects/${id}`
      );

    return response.data;
  };