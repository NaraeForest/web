"use client";

export const uploadPreSignedURL = async (url: string, file: File) => {
  const init: RequestInit = {
    headers: {
      "Content-Type": file.type,
    },
    method: "PUT",
    body: file,
  };
  const res = await fetch(url, init);
  return res.ok
};
