import axios from "@/axios";

export const getMyProfile = async () => {
  const { data } = await axios.get(`/api/v1/users`);
  return data;
}

export const updateUserProfile = async (nickname: string, bio: string, profileImage?: string, headerImage?: string) => {
  const body = {
    nickname,
    bio,
    ...(profileImage != null && { profileImage }),
    ...(headerImage != null && { headerImage }),
  };
  const { data } = await axios.patch(`/api/v1/users`, body);
  return data;
};

export const getUserProfile = async (userId: number) => {
  const { data } = await axios.get(`/api/v1/users/${userId}`);
  return data;
};
