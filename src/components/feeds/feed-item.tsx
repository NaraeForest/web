"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Fragment,
  MouseEvent,
  useState,
} from "react";
import {
  Feed,
  FeedLike,
  updateFeedLike,
} from "@/actions";
import {
  shareFeed,
} from "@/utils";
import {
  useProfileStore,
} from "@/store/profile-store";
import {
  FeedUserAttribution,
} from "./feed-user-attribution";
import { FeedOptions } from "./feed-options";

type FeedItemProps = {
  feed: Feed,
  isParent?: boolean
};
export function FeedItem({ feed, isParent = false }: FeedItemProps) {
  const { id: userId } = useProfileStore();
  const [likes, setLikes] = useState<FeedLike[]>(feed.likes);
  const onLikeClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const data = await updateFeedLike(feed.id);
    setLikes([...data]);
  };
  return (
    <Fragment>
      <FeedUserAttribution
        user={feed.user}
        feedCreatedAt={feed.createdAt}
      >
        {feed.user.id === userId && <FeedOptions
          feed={feed}
        />}
      </FeedUserAttribution>
      <Link
        href={`/feeds/${feed.id}`}
      >
        <p
          className={`whitespace-pre-wrap text-sm ${isParent && "pl-12"}`}
        >
          {feed.content}
        </p>
      </Link>
      {feed.image != null && <Image
        alt="feed content image"
        width={0}
        height={0}
        src={feed.image}
        className="block rounded-lg"
      />}
      <div
        className="flex justify-evenly items-center text-[0.625rem] pt-4"
      >
        <button
          type="button"
          className="flex gap-2 items-center"
          onClick={onLikeClick}
        >
          <Image
            alt="heart"
            width={0}
            height={0}
            src={likes.findIndex((val) => val.user.id === userId) === -1 ? "/heart-line.svg" : "/heart-full.svg"}
            className="w-4 h-4"
          />
          {likes.length} Likes
        </button>
        <Link
          href={`/feeds/${feed.id}`}
          className="flex gap-2 items-center"
        >
          <Image
            alt="chat bubble"
            width={0}
            height={0}
            src={"/chat-bubble.svg"}
            className="w-4 h-4"
          />
          {feed.childs.length} Comments
        </Link>
        <button
          type="button"
          className="flex gap-2 items-center"
          onClick={shareFeed(feed.id, feed.user.nickname, feed.content)}
        >
          <Image
            alt="arrow up tray"
            width={0}
            height={0}
            src={"/arrow-up-tray.svg"}
            className="w-4 h-4"
          />
          Share
        </button>
      </div>
    </Fragment>
  );
}
