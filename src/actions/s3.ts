import Axios from "axios";
import axios from "@/axios";

export const createPreSignedURL = async (extension: string) => {
  const body = {
    extension,
  };
  const { data } = await axios.post(`/api/v1/s3`, body);
  return data;
};

export const uploadPreSignedURL = async (url: string, file: File) => {
  const { status } = await Axios.put(url, file);
  return status === 200;
};
