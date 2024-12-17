"use server";

import {
  getToken,
} from "./action";

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
  const json = await res.json();
  return json;
};
