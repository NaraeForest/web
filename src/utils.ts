import {
  MouseEvent,
} from "react";

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

export const shareFeed = (feedId: number, feedUserNickName: string, feedText: string) => (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  navigator.share({
    title: `${feedUserNickName}'s feed share`,
    text: feedText,
    url: `https://05-project.narumir.io/feeds/${feedId}`
  });
};
