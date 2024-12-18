import {
  cookies,
} from "next/headers";

export const ACEESS_TOKEN = "access-token";
export const REFRESH_TOKEN = "refresh-token";

export const getToken = async () => {
  const cookie = await cookies();
  const accessToken = cookie.get(ACEESS_TOKEN)?.value;
  if (accessToken != null) {
    return accessToken;
  }
  const refreshToken = cookie.get(REFRESH_TOKEN)?.value;
  if (refreshToken == null) {
    return;
  }
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `${REFRESH_TOKEN}=${refreshToken}`,
    },
    method: "POST",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reissue`, init);
  const json = await res.json();
  if (json.success) {
    const token: string = json.data.accessToken;
    const bytes = Uint8Array.from(atob(token.split(".")[1]), (char) => char.charCodeAt(0));
    const decoder = new TextDecoder('utf-8');
    const payload = JSON.parse(decoder.decode(bytes));
    if (payload["exp"] == null) {
      return;
    }
    const expiredAt = new Date(parseInt(payload["exp"], 10) * 1000);
    cookie.set(ACEESS_TOKEN, token, { httpOnly: true, expires: expiredAt, secure: process.env.NODE_ENV === "production" });
    return token;
  }
};

export type FetchData<T> = SuccessData<T> | FailData;

interface SuccessData<T> {
  success: true;
  data: T;
}

interface FailData {
  success: false;
  error: string;
}
