import {
  MouseEvent,
} from "react";


type List = {
  title: string,
  value: string,
}

export const categories: List[] = [
  { title: "Sports", value: "sports" },
  { title: "Language", value: "language" },
  { title: "Reading", value: "reading" },
  { title: "Cooking", value: "cooking" },
  { title: "Travel", value: "travel" },
  { title: "Social Activities", value: "social activities" },
  { title: "Job Search", value: "job search" },
  { title: "Adaptation", value: "adaptation" },
];

export const shareFeed = (feedId: number, feedUserNickName: string, feedText: string) => (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  navigator.share({
    title: `${feedUserNickName}'s feed share`,
    text: feedText,
    url: `https://05-project.narumir.io/feeds/${feedId}`
  });
};
