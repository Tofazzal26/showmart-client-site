import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:4000",
});
const useAxiosSecure = () => {
  return axiosPublic;
};

export default useAxiosSecure;
