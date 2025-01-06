import {
  Fragment,
} from "react";
import {
  readFeed,
} from "@/actions";
import {
  FeedForm,
  NavigationBar,
} from "@/components";
import {
  FeedItem,
} from "@/components/feeds";

type PageProps = {
  params: Promise<{
    feedId: string,
  }>,
};
export default async function Page({ params }: PageProps) {
  const { feedId } = await params;
  const feed = await readFeed(parseInt(feedId, 10));
  return (
    <Fragment>
      <NavigationBar
        title={""}
      />

      {feed.parent != null && <div
        className="p-5"
      >
        <FeedItem
          feed={feed.parent}
          isParent={true}
        />
      </div>}
      <div
        className="p-5 border-y"
      >
        <FeedItem
          feed={feed}
        />
      </div>
      <div>
        {feed.childs.map((child) => (
          <div
            className="px-5 py-5 border-b"
          >
            <FeedItem
              feed={child}
            />
          </div>
        ))}
      </div>
      <div
        className="p-5"
      >
        <FeedForm
          subGoalId={feed.subGoal.id}
          parentFeedId={feed.id}
        />
      </div>
    </Fragment>
  );
}
