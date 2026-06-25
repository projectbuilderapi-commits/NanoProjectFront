import axios from "axios";

const API =
  "https://nanoproject.onrender.com/api/designs";

export const getDesigns =
  async () => {
    const { data } =
      await axios.get(API);

    return data;
  };

export const getDesign =
  async (id: string) => {
    const { data } =
      await axios.get(
        `${API}/${id}`
      );

    return data;
  };

export const createDesign =
  async (design: unknown) => {
    const token = localStorage.getItem('token');
    const { data } =
      await axios.post(
        API,
        design,
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
      );

    return data;
  };

export const updateDesign =
  async (
    id: string,
    design: unknown
  ) => {
    const token = localStorage.getItem('token');
    const { data } =
      await axios.put(
        `${API}/${id}`,
        design,
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
      );

    return data;
  };

export const deleteDesign =
  async (id: string) => {
    const token = localStorage.getItem('token');
    const { data } =
      await axios.delete(
        `${API}/${id}`,
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
      );

    return data;
  };