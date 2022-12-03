import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Accept-language": "en",
  },
});
