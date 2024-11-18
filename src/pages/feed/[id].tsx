// pages/feed/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import { feedData } from "../../data/feeds";
import FeedDetail from "../../components/feed-detail";
import Footer from "../../components/Footer";

const FeedPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const feed = feedData.find((feed) => feed.id === Number(id));

  if (!feed) return <div>Feed not found</div>;

  return (
    <div className="flex flex-col h-screen">
      <FeedDetail feed={feed} />
      <Footer />
    </div>
  );
};

export default FeedPage;
