"use client";
import Image from "next/image";
import {
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  useRouter,
} from "next/router";
import dayjs from "dayjs";
import {
  AddGoalFeed,
} from "@/components/add-goal-feed";
import {
  GetServerSideProps,
} from "next";
import Link from "next/link";
import {
  shareFeed,
  useProfile,
} from "@/utils";
import { readFeed, updateFeedLike } from "@/actions";

type PageProps = {
  params: {
    feedId: number,
  },
}
export default function Page({ params: { feedId } }: PageProps) {
  const profile = useProfile();
  const router = useRouter();
  const [feed, setFeed] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const { success, data } = await readFeed(feedId);
      if (success) {
        setFeed(data);
      }
    })();
  }, [feedId]);
  const onComplete = useCallback((feedId: number) => {
    router.push(`/feeds/${feedId}`);
  }, []);

  const onFeedLikeClick = (targetFeedId: number) => async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await updateFeedLike(targetFeedId);
    const { success, data } = await readFeed(feedId);
    if (success) {
      setFeed(data);
    }
  };
  if (feed == null || profile == null) {
    return (<div />);
  }
  return (
    <div>
      <div className="mx-5 my-3 flex justify-between items-center">
        <div className="flex">
          <Link href={"/feeds"}>
            <Image src="/x-mark.svg" width={24} height={24} alt="abort to create new goal" />
          </Link>
        </div>
      </div>
      {feed.parent != null && <div className="border-y border-[#E5E7EB] p-5">
        <div className="flex justify-between items-center">
          <Link
            href={`/users/${feed.user.id}`}
            className="flex gap-3">
            <Image src={feed.parent.user.profileImage} alt="" width={40} height={40} className="rounded-full" />
            <div className="flex flex-col">
              <p className="text-[#333333] text-sm">{feed.parent.user.nickname}</p>
              <p className="text-[#71717A] text-[0.625rem]">{dayjs(feed.parent.createdAt).fromNow()}</p>
            </div>
          </Link>
        </div>
        <Link href={`/feeds/${feed.parent.id}`} className="text-xs text-[#333333] whitespace-pre-wrap">
          {feed.parent.content}
        </Link>
        {feed.parent.image != null && <img
          className="my-4 rounded w-full"
          src={`${feed.parent.image}`}
          alt=""
        />}
      </div>}
      <div className="border-y border-[#E5E7EB] p-5">
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
        <div className="text-xs text-[#333333] whitespace-pre-wrap">
          {feed.content}
        </div>
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
      {feed.childs.map((child: any) => (
        <div
          key={child.id}
          className="border-b border-[#E5E7EB] p-5"
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-start">
              <Link
                href={`/users/${feed.user.id}`}>
                <Image
                  src={child.user.profileImage}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full block"
                />
              </Link>
              <div className="flex flex-col">
                <p className="text-[#333333] text-sm">
                  {child.user.nickname}
                  <span className="pl-2 text-[#71717A] text-[0.625rem]">{dayjs(feed.createdAt).fromNow()}</span>
                </p>

                <Link href={`/feeds/${child.id}`} className="text-xs text-[#333333] whitespace-pre-wrap">
                  {child.content}
                </Link>
                {child.image != null && <img
                  className="my-4 rounded"
                  src={`${child.image}`}
                  alt=""
                />}
              </div>
            </div>
          </div>
          <div className="flex justify-evenly text-[0.625rem] text-[#333333] mt-3">
            <button
              className="flex items-center gap-2"
              onClick={onFeedLikeClick(child.id)}
            >
              <Image
                alt="heart full"
                src={child.likes.findIndex((val: any) => val.user.id === profile.id)
                  ? "/heart-line.svg"
                  : "/heart-full.svg"}
                width={16}
                height={16}
              />
              {child.likes.length} Likes
            </button>
            <Link href={`/feeds/${child.id}`} className="flex items-center gap-2">
              <Image alt="chat buble" src={"/chat-bubble.svg"} width={16} height={16} />
              {child.childs.length} Comments
            </Link>
            <button
              onClick={shareFeed(child.id, child.user.nickname, child.content)}
              className="flex items-center gap-2">
              <Image alt="arrow up tray" src={"/arrow-up-tray.svg"} width={16} height={16} />
              Share
            </button>
          </div>
        </div>
      ))
      }
      <div className="p-5">
        <AddGoalFeed
          parentId={feed.id}
          subGoalId={feed.subGoal.id}
          onComplete={onComplete}
        />
      </div>
    </div>
  );
}
