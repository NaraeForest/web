"use client";

export const readCSRFToken = async () => {
  const init: RequestInit = {
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/csrf/token`, init);
  const json = await res.json();
  return json;
};
