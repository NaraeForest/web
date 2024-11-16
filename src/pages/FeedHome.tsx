import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { feedData } from "../data/feeds";
import Feed from "../components/feed";
import Footer from "../components/footer";

const FeedHome: React.FC = () => {
  const router = useRouter();

  // 참조 및 상태 관리
  const feedContainerRef = useRef<HTMLDivElement>(null);
  const tagContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false); // 드래그 여부 상태
  const dragThreshold = 5; // 클릭과 드래그를 구분하는 최소 거리
  let startY = 0; // 드래그 시작 Y 좌표
  let scrollTop = 0; // 드래그 시작 시 스크롤 위치

  // 피드 영역 드래그 핸들러
  const handleFeedDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const container = feedContainerRef.current;
    if (!container) return;

    setIsDragging(false); // 초기화
    startY = "touches" in e ? e.touches[0].clientY : e.clientY;
    scrollTop = container.scrollTop;

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;
      const walk = startY - y; // 드래그 이동 거리
      if (Math.abs(walk) > dragThreshold) {
        setIsDragging(true); // 드래그 활성화
        container.scrollTop = scrollTop + walk; // 수직 스크롤 이동
        e.preventDefault(); // 기본 스크롤 방지
      }
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onMouseMove as any, { passive: false }); // 스크롤 방지
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);
  };

  // 태그 활성화 토글
  const toggleTag = (id: number) => {
    setActiveTags((prev) =>
      prev.includes(id) ? prev.filter((tag) => tag !== id) : [...prev, id]
    );
  };

  // 피드 클릭 핸들러
  const handleFeedClick = (id: number) => {
    if (!isDragging) {
      router.push(`/feed/${id}`);
    }
  };

  const [activeTags, setActiveTags] = useState<number[]>([]);

  return (
    <div className="h-screen flex flex-col">
      {/* 상단 고정 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-bold py-4 pl-4">Feeds</h1>

        {/* 태그 버튼 영역 */}
        <div
          ref={tagContainerRef}
          className="overflow-hidden whitespace-nowrap px-4 pb-4 border-b cursor-grab select-none"
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
        className="flex-1 overflow-hidden px-4 pb-16 cursor-grab select-none"
        onMouseDown={handleFeedDragStart}
        onTouchStart={handleFeedDragStart}
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
