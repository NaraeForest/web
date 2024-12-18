"use client";

import {
  FetchData,
} from "./action";

export type Token = {
  token: string;
}
export const readCSRFToken = async () => {
  const init: RequestInit = {
    method: "GET",
    credentials: "include",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/csrf/token`, init);
  const json: FetchData<Token> = await res.json();
  return json.success ? json.data.token : undefined;
};
