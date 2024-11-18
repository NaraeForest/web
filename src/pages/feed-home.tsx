import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { feedData } from "../data/feeds";
import Footer from "../components/Footer";
import Feed from "../components/Feed";

const FeedHome: React.FC = () => {
  const router = useRouter();
  const tagContainerRef = useRef<HTMLDivElement>(null);
  const feedContainerRef = useRef<HTMLDivElement>(null);
  const [activeTags, setActiveTags] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  let startY = 0; // 드래그 시작 위치
  let scrollTop = 0; // 드래그 시작 시 스크롤 위치

  // 태그 활성화/비활성화
  const toggleTag = (id: number) => {
    setActiveTags((prev) =>
      prev.includes(id) ? prev.filter((tag) => tag !== id) : [...prev, id]
    );
  };

  // 태그 드래그 핸들러
  const handleTagDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const container = tagContainerRef.current;
    if (!container) return;

    let startX = "touches" in e ? e.touches[0].clientX : e.clientX;
    let scrollLeft = container.scrollLeft;

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      container.scrollLeft = scrollLeft + (startX - x);
      e.preventDefault();
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("touchend", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onMouseMove as any, { passive: false });
    window.addEventListener("touchend", onMouseUp);
  };

  // 피드 드래그 핸들러
  const handleFeedDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const container = feedContainerRef.current;
    if (!container) return;

    setIsDragging(false);
    startY = "touches" in e ? e.touches[0].clientY : e.clientY;
    scrollTop = container.scrollTop;

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;
      const walk = startY - y;

      if (Math.abs(walk) > 5) {
        setIsDragging(true);
        container.scrollTop = scrollTop + walk;
      }
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("touchend", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onMouseMove as any, { passive: false });
    window.addEventListener("touchend", onMouseUp);
  };

  // 피드 클릭 핸들러
  const handleFeedClick = (id: number) => {
    if (!isDragging) {
      router.push(`/feed/${id}`);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* 상단 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-bold py-4 pl-4">Feeds</h1>

        {/* 태그 버튼 영역 */}
        <div
          ref={tagContainerRef}
          className="overflow-x-auto whitespace-nowrap px-4 pb-4 border-b cursor-grab no-scrollbar select-none"
          onMouseDown={handleTagDragStart}
          onTouchStart={handleTagDragStart}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <button
              key={index}
              onClick={() => toggleTag(index)}
              className={`inline-block px-4 py-2 mr-2 rounded-full text-sm ${
                activeTags.includes(index)
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Tag {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 피드 리스트 */}
      <div
        ref={feedContainerRef}
        className="flex-1 overflow-y-scroll px-4 pb-16 cursor-grab no-scrollbar select-none"
        onMouseDown={handleFeedDragStart}
        onTouchStart={handleFeedDragStart}
        onDragStart={(e) => e.preventDefault()} // 드래그 이벤트 방지
      >
        {feedData.map((feed) => (
          <div
            key={feed.id}
            onClick={() => handleFeedClick(feed.id)}
            className="cursor-pointer"
          >
            <Feed
              userName={feed.userName}
              category={feed.category}
              time={feed.time}
              content={feed.content}
              likes={feed.likes}
              comments={feed.comments}
              isDetail={false} // 간략하게 표시
            />
          </div>
        ))}
      </div>

      {/* 하단 네비게이션 */}
      <Footer />
    </div>
  );
};

export default FeedHome;
