import {
  MouseEvent,
  useEffect,
  useState,
} from "react";
import {
  readMyProfile,
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
      const { data } = await readMyProfile();
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
export const getScrollHeight = () => {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );
  return scrollHeight;
}

export const useScrollHook = (callback: () => Promise<void>) => {
  const [isFetching, setFetching] = useState(false);

  const onScroll = () => {
    const scrollHeight = getScrollHeight();
    const currentScroll = Math.ceil(window.innerHeight + document.documentElement.scrollTop);
    if (scrollHeight === currentScroll && !isFetching) {
      setFetching(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    console.log("SADf")
    if (isFetching) {
      callback().then(() => {
        setTimeout(() => {
          setFetching(false);
          const scrollAdjustment = 50;
          const newScrollTop = document.documentElement.scrollTop - scrollAdjustment;
          window.scrollTo({
            top: newScrollTop > 0 ? newScrollTop : 0,
            behavior: "smooth",
          });
        }, 2000);
      });
    }
  }, [isFetching]);
  return [isFetching, setFetching];
};
