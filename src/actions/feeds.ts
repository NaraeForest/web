import axios from "@/axios";

export const addGoalFeed = async (subGoalId: number, content: string, image?: string) => {
  const body = {
    subGoalId,
    content,
    image,
  };
  const { data } = await axios.post(`/api/v1/feeds`, body);
  return data;
};

export const getFeed = async (feedId: number) => {
  const { data } = await axios.get(`/api/v1/feeds/${feedId}`);
  return data;
};

export const addChildFeed = async (parentId: number, subGoalId: number, content: string, image?: string) => {
  const body = {
    subGoalId,
    content,
    image,
  };
  const { data } = await axios.post(`/api/v1/feeds/${parentId}`, body);
  return data;
};

export const getFeeds = async (category: string, startFeedId?: number) => {
  const search = new URLSearchParams();
  search.append("category", category);
  if (startFeedId != null) {
    search.append("startFeedId", startFeedId.toString());
  }
  const { data } = await axios.get(`/api/v1/feeds?${search.toString()}`);
  return data;
};

export const toogleLikeFeed = async (feedId: number) => {
  const { data } = await axios.patch(`/api/v1/feeds/${feedId}/likes`);
  return data;
};

export const getUserFeeds = async (userId: number, startFeedId?: number) => {
  const search = new URLSearchParams();
  if (startFeedId != null) {
    search.append("startFeedId", startFeedId.toString());
  }
  const { data } = await axios.get(`/api/v1/users/${userId}/feeds?${search.toString()}`);
  return data;
};
