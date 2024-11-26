import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import {
  getUserFeeds,
  toogleLikeFeed,
} from "@/actions";
import {
  useScrollHook,
} from "@/pages/feeds";
import {
  shareFeed,
} from "@/utils";
import {
  MouseEvent,
  useEffect,
  useState,
} from "react";

type UserFeedListProps = {
  userId: number,
};
export function UserFeedList({ userId }: UserFeedListProps) {
  const [feeds, setFeeds] = useState<any[]>([]);
  const [isFetching,] = useScrollHook(async () => {
    const lastItem = feeds[feeds.length - 1].id;
    const { data } = await getUserFeeds(userId, lastItem);
    setFeeds([...feeds, ...data]);
  });
  useEffect(() => {
    (async () => {
      const { data } = await getUserFeeds(userId);
      setFeeds([...data]);
    })();
  }, []);
  const onFeedLikeClick = (feedId: number) => async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data } = await toogleLikeFeed(feedId);
    const idx = feeds.findIndex((feed) => feed.id === feedId);
    if (idx == -1) {
      return;
    }
    feeds[idx].likes = data;
    setFeeds([...feeds]);
  };
  return (
    <div
      className="flex flex-col gap-5 mb-16"
    >
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
              <Image
                src={feed.user.profileImage}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
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
                src={feed.likes.findIndex((val: any) => val.user.id === userId)
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
  );
}
