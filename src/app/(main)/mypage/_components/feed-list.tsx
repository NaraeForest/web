"use client";

import Image from "next/image";
import {
  Fragment,
  useEffect,
  useState,
} from "react";
import {
  useInView,
} from "react-intersection-observer";
import {
  Feed,
  readUserFeeds,
} from "@/actions";
import {
  FeedItem,
} from "@/components/feeds";
import {
  BaseBorder,
} from "@/components";

type FeedListProps = {
  userId: number,
};
export function FeedList({ userId }: FeedListProps) {
  const { ref, inView } = useInView({ threshold: 1.0 });
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setLoadig] = useState<boolean>(false);
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const fetchData = async () => {
    setLoadig(true);
    const latestId = feeds.length > 0 ? feeds[feeds.length - 1].id : undefined;
    const data = await readUserFeeds(userId, latestId);
    if (data.length === 0) {
      setHasMore(false);
    }
    setFeeds([...feeds, ...data]);
    setLoadig(false);
  }
  useEffect(() => {
    if (inView) {
      fetchData();
    }
  }, [inView]);
  return (
    <Fragment>
      <div
        className="flex flex-col gap-5"
      >
        {feeds.map((feed) => (
          <BaseBorder
            key={feed.id}
          >
            <FeedItem
              feed={feed}
            />
          </BaseBorder>
        ))}
      </div>
      {isLoading && <div
        className="flex justify-center items-center py-2"
      >
        <Image
          alt="loading"
          width={0}
          height={0}
          src={"loading.svg"}
          className="animate-spin w-8 h-8"
        />
      </div>}
      {hasMore && <div
        ref={ref}
        style={{ height: "1px" }}
      />}
    </Fragment>
  );
}
