import axios from "../services/axiosInstance";

const useDeleteBoard = () => {
  const fetchDeleteBoard = async (id: string) => {
    const res = await axios.delete(`/board/${id}`);
    return res;
  };
  return { fetchDeleteBoard };
};

export default useDeleteBoard;
