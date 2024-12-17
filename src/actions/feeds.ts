"use server";

import {
  getToken,
} from "./action";

export const createGoalFeed = async (subGoalId: number, content: string, image?: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      subGoalId,
      content,
      image,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/feeds`, init);
  const json = await res.json();
  return json;
};

export const createChildFeed = async (parentId: number, subGoalId: number, content: string, image?: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      subGoalId,
      content,
      image,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/feeds/${parentId}`, init);
  const json = await res.json();
  return json;
};

export const readFeeds = async (category: string, startFeedId?: number) => {
  const search = new URLSearchParams();
  search.append("category", category);
  if (startFeedId != null) {
    search.append("startFeedId", startFeedId.toString());
  }
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/feeds?${search.toString()}`, init);
  const json = await res.json();
  return json;
};

export const readFeed = async (feedId: number) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/feeds/${feedId}`, init);
  const json = await res.json();
  return json;
};

export const updateFeedLike = async (feedId: number) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "PATCH",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/feeds/${feedId}/likes`, init);
  const json = await res.json();
  return json;
};
