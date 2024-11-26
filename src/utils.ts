import {
  MouseEvent,
  useEffect,
  useState,
} from "react";
import {
  getMyProfile,
} from "./actions";

export const categories = {
  "Sports": "sports",
  "Language": "language",
  "Reading": "reading",
  "Cooking": "cooking",
  "Travel": "travel",
  "Social Activities": "social activities",
  "Job Search": "job search",
  "Adaptation": "adaptation",
};

export const useProfile = () => {
  const [profile, setProfile] = useState<any>();
  useEffect(() => {
    (async () => {
      const { data } = await getMyProfile();
      setProfile(data);
    })();
  }, []);
  return profile;
};

export const shareFeed = (feedId: number, feedUserNickName: number, feedText: string) => (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  navigator.share({
    title: `${feedUserNickName}'s feed share`,
    text: feedText,
    url: `https://05-project.narumir.io/feeds/${feedId}`
  })
};
