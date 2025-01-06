"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  useInView,
} from "react-intersection-observer";
import {
  Feed,
  readFeeds,
} from "@/actions";
import {
  BaseBorder,
  PageHeader,
} from "@/components";
import {
  FeedItem,
} from "@/components/feeds";
import {
  categories,
} from "@/utils";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  useEffect(() => {
    setFeeds([]);
    setHasMore(true);
    fetchData();
  }, [category]);

  const onCategoryChange = useCallback((target: string) => () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", target);
    router.replace(`?${params.toString()}`);
    router.refresh();
  }, []);

  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setLoadig] = useState<boolean>(false);
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const { ref, inView } = useInView({ threshold: 1.0 });
  const fetchData = async () => {
    setLoadig(true);
    const latestId = feeds.length > 0 ? feeds[feeds.length - 1].id : undefined;
    const data = await readFeeds(category, latestId);
    if (data.length === 0) {
      setHasMore(false);
    }
    setFeeds([...feeds, ...data]);
    setLoadig(false);
  };
  useEffect(() => {
    if (inView) {
      fetchData();
    }
  }, [inView]);
  return (
    <div
      className="safe-area-content"
    >
      <PageHeader
        title="Feeds"
      />
      <div
        className="flex gap-2 overflow-x-scroll px-5 hide-scroll"
      >
        <button
          type="button"
          className={`border border-solid ${category === "all" ? "border-[#333333]" : "border-[#E5E7EB]"} rounded-full px-2 py-[0.375rem] text-[0.625rem] break-keep whitespace-nowrap`}
          onClick={onCategoryChange("all")}
        >
          All
        </button>
        {categories.map(({ title, value }) => (
          <button
            key={value}
            type="button"
            className={`border border-solid ${category === value ? "border-[#333333]" : "border-[#E5E7EB]"} rounded-full px-2 py-[0.375rem] text-[0.625rem] break-keep whitespace-nowrap`}
            onClick={onCategoryChange(value)}
          >
            {title}
          </button>
        ))}
      </div>
      <div
        className="flex flex-col gap-5 p-5"
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
      </div>
    </div>
  );
}
