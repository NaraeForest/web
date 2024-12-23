"use server";

import {
  FetchData,
  getToken,
} from "./action";
import {
  SubGoal,
} from "./goals";
import {
  User,
} from "./users";

export type Feed = {
  id: number,
  content: string,
  image: string,
  likes: FeedLike[],
  childs: Feed[],
  parent: Feed,
  subGoal: SubGoal,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type FeedLike = {
  id: number,
  feed: Feed,
  user: User,
  createdAt: string,
  updatedAt: string,
};

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
  const json: FetchData<Feed> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
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
  const json: FetchData<Feed> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
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
  const json: FetchData<Feed[]> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
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
  const json: FetchData<Feed> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
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
  const json: FetchData<FeedLike[]> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};
