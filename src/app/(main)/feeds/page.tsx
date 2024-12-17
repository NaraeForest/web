"use client";
import {
  categories,
  shareFeed,
  useProfile,
  useScrollHook,
} from "@/utils";
import dayjs from "@/lib/dayjs";
import Image from "next/image";
import Link from "next/link";
import {
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { readFeeds, updateFeedLike } from "@/actions";

export default function Page() {
  const profile = useProfile();
  const [category, setCategory] = useState("all");
  const onCategoryClick = useCallback((cate: string) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCategory(cate);
  }, []);
  const [feeds, setFeeds] = useState<any[]>([]);
  const [isFetching,] = useScrollHook(async () => {
    const lastItem = feeds[feeds.length - 1].id;
    const { data } = await readFeeds(category, lastItem);
    setFeeds([...feeds, ...data]);
  });
  useEffect(() => {
    (async () => {
      const { data } = await readFeeds(category);
      setFeeds([...data]);
    })();
  }, [category]);
  const onFeedLikeClick = (feedId: number) => async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data } = await updateFeedLike(feedId);
    const idx = feeds.findIndex((feed) => feed.id === feedId);
    if (idx == -1) {
      return;
    }
    feeds[idx].likes = data;
    setFeeds([...feeds]);
  };
  if (profile == null) {
    return (<div />);
  }
  return (
    <div>
      <div className="mx-5 mt-16 mb-3">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-[2rem]">Feeds</h1>
        </div>
      </div>
      <div className="flex gap-2 mx-5 overflow-y-scroll">

        <button
          onClick={onCategoryClick("all")}
          className={`text-[#333333] text-[0.625rem] leading-[0.625rem] text-center py-[6px] px-2 border rounded-full border-[#E5E7EB] ${category === "all" ? "font-semibold border-black" : ""}`}
        >
          All
        </button>
        {Object.keys(categories).map((key, i) => {
          const cate = (categories as { [key: string]: string })[key];
          return (
            <button
              onClick={onCategoryClick(cate)}
              key={i}
              className={`text-[#333333] break-keep whitespace-nowrap text-[0.625rem] leading-[0.625rem] text-center py-[6px] px-2 border rounded-full border-[#E5E7EB] ${category === cate ? "font-semibold border-black" : ""}`}
            >
              {key}
            </button>
          )
        })}
      </div>
      <div className="p-5 flex flex-col gap-5 mb-16">
        {feeds.map((feed) => (
          <div
            key={feed.id}
            className="border border-[#E5E7EB] rounded-lg p-4"
          >
            <div className="flex justify-between items-center">
              <Link
                href={`/users/${feed.user.id}`}
                className="flex gap-3"
              >
                <Image src={feed.user.profileImage} alt="" width={40} height={40} className="rounded-full" />
                <div className="flex flex-col">
                  <p className="text-[#333333] text-sm">{feed.user.nickname}</p>
                  <p className="text-[#71717A] text-[0.625rem]">{dayjs(feed.createdAt).fromNow()}</p>
                </div>
              </Link>
              <button>
                <Image alt="ellipsis vertical" src="/ellipsis-vertical.svg" width={24} height={24} />
              </button>
            </div>
            <Link href={`/feeds/${feed.id}`} className="pl-[3.25rem] text-xs text-[#333333] whitespace-pre-wrap">
              {feed.content}
            </Link>
            {feed.image != null && <img
              className="my-4 rounded w-full"
              src={`${feed.image}`}
              alt=""
            />}
            <div className="flex justify-evenly text-[0.625rem] text-[#333333] mt-3">
              <button
                className="flex items-center gap-2"
                onClick={onFeedLikeClick(feed.id)}
              >
                <Image
                  alt="heart full"
                  src={feed.likes.findIndex((val: any) => val.user.id === profile.id)
                    ? "/heart-line.svg"
                    : "/heart-full.svg"}
                  width={16}
                  height={16}
                />
                {feed.likes.length} Likes
              </button>
              <Link href={`/feeds/${feed.id}`} className="flex items-center gap-2">
                <Image alt="chat buble" src={"/chat-bubble.svg"} width={16} height={16} />
                {feed.childs.length} Comments
              </Link>
              <button
                onClick={shareFeed(feed.id, feed.user.nickname, feed.content)}
                className="flex items-center gap-2">
                <Image alt="arrow up tray" src={"/arrow-up-tray.svg"} width={16} height={16} />
                Share
              </button>
            </div>
          </div>
        ))}
        <div className={`${isFetching ? 'visibility' : 'invisible'}`}>
          로딩중...
        </div>
      </div>
    </div>
  );
}
