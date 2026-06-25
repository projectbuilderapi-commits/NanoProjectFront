import api from "../api/axios";
import type {
  LoginData,
  LoginResponse,
} from "../types/auth";

export const loginAdmin = async (
  data: LoginData
): Promise<LoginResponse> => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};