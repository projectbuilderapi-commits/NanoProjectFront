import axios from "axios";

const API =
  "https://nanoproject.onrender.com/api/designs";

export const getDesigns =
  async () => {
    const { data } =
      await axios.get(API);

    return data;
};

export const getDesignById =
  async (id: string) => {
    const { data } =
      await axios.get(
        `${API}/${id}`
      );

    return data;
};