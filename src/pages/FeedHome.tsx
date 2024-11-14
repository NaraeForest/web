import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { feedData } from "../data/feeds";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

const FeedHome: React.FC = () => {
  const router = useRouter();
  const feedContainerRef = useRef<HTMLDivElement>(null);
  const tagContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false); // 드래그 여부 상태
  const [activeTags, setActiveTags] = useState<number[]>([]); // 활성화된 태그 ID들
  const dragThreshold = 5; // 클릭과 드래그를 구분하는 최소 거리
  let startX = 0;
  let scrollLeft = 0;

  const handleTagDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const container = tagContainerRef.current;
    if (!container) return;

    setIsDragging(false); // 드래그 상태 초기화
    startX = "touches" in e ? e.touches[0].clientX : e.clientX;
    scrollLeft = container.scrollLeft;

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const walk = x - startX; // 드래그 이동 거리
      if (Math.abs(walk) > dragThreshold) {
        setIsDragging(true);
        container.scrollLeft = scrollLeft - walk; // 태그 스크롤 이동
      }
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove as any);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onMouseMove as any);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);
  };

  const toggleTag = (id: number) => {
    // 태그 활성화/비활성화
    setActiveTags((prev) =>
      prev.includes(id) ? prev.filter((tag) => tag !== id) : [...prev, id]
    );
  };

  const handleFeedClick = (id: number) => {
    // 드래그 중이 아니어야 클릭 동작 실행
    if (!isDragging) {
      router.push(`/feed/${id}`); // 상세 페이지로 이동
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* 상단 고정 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-bold py-4 pl-4">Feeds</h1>

        {/* 태그 버튼 영역 */}
        <div
          ref={tagContainerRef}
          className="overflow-x-auto whitespace-nowrap px-4 pb-4 border-b cursor-grab scrollbar-hide"
          onMouseDown={handleTagDragStart}
          onTouchStart={handleTagDragStart}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <button
              key={index}
              onClick={() => toggleTag(index)}
              className={`inline-block px-4 py-2 mr-2 rounded-full text-sm transition-colors ${
                activeTags.includes(index)
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {`Tag ${index + 1}`}
            </button>
          ))}
        </div>
      </div>

      {/* 피드 리스트 영역 */}
      <div
        ref={feedContainerRef}
        className="flex-1 overflow-hidden px-4 pb-16 cursor-grab"
      >
        {feedData.map((feed) => (
          <div
            key={feed.id}
            onClick={() => handleFeedClick(feed.id)} // 클릭 이벤트 처리
            className="cursor-pointer"
          >
            <Feed
              userName={feed.userName}
              time={feed.time}
              content={feed.content}
              likes={feed.likes}
              comments={feed.comments}
              isDetail={false} // 홈에서는 줄여 보여줌
            />
          </div>
        ))}
      </div>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
};

export default FeedHome;
