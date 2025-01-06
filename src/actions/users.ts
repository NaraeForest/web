"use server";

import {
  FetchData,
  getToken,
} from "./action"
import {
  Feed,
} from "./feeds";
import {
  Goal,
} from "./goals";

export type User = {
  id: number,
  nickname: string,
  profileImage: string,
  headerImage: string,
  bio: string,
  createdAt: string,
  updatedAt: string,
}

export const readMyProfile = async () => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`, init);
  const json: FetchData<User> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const readUserProfile = async (userId: number) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${userId}`, init);
  const json: FetchData<User> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const readUserGoals = async (userId: number) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${userId}/goals`, init);
  const json: FetchData<Goal[]> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const readUserFeeds = async (userId: number, startFeedId?: number) => {
  const search = new URLSearchParams();
  if (startFeedId != null) {
    search.append("startFeedId", startFeedId.toString());
  }
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${userId}/feeds?${search.toString()}`, init);
  const json: FetchData<Feed[]> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const updateMyProfile = async (nickname: string, bio: string, profileImage?: string, headerImage?: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "PATCH",
    body: JSON.stringify({
      nickname,
      bio,
      ...(profileImage != null && { profileImage }),
      ...(headerImage != null && { headerImage }),
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`, init);
  const json: FetchData<undefined> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};
