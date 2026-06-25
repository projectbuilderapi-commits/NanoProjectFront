import api from "../api/axios";
import type { ContactFormData } from "../types/contact";

export const createContact = async (
  data: ContactFormData
) => {
  const response = await api.post(
    "/contacts",
    data
  );

  return response.data;
};

export const getContacts = async () => {
  const response =
    await api.get("/contacts");

  return response.data;
};

export const getContactById =
  async (id: string) => {
    const response =
      await api.get(
        `/contacts/${id}`
      );

    return response.data;
  };

export const deleteContact =
  async (id: string) => {
    const response =
      await api.delete(
        `/contacts/${id}`
      );

    return response.data;
  };