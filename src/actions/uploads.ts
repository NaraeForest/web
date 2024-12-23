"use server";

import {
  FetchData,
  getToken,
} from "./action";

export type PresignedURL = {
  url: string,
  key: string,
};

export const createPreSignedURL = async (extension: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      extension,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/s3`, init);
  const json: FetchData<PresignedURL> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};
