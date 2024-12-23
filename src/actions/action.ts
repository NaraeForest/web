import {
  cookies,
} from "next/headers";

const ACCESS_TOKEN = "access-token";

export const getToken = async () => {
  const cookie = await cookies();
  const accessToken = cookie.get(ACCESS_TOKEN)?.value;
  if (accessToken != null) {
    return accessToken;
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
